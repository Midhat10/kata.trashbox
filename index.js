const searchWrapper = document.querySelector(".search-input");
const input = searchWrapper.querySelector("#repository-text");
const suggBox = searchWrapper.querySelector(".autocom-box");
const saveBox = document.querySelector(".search-save");

function debounce(fn, ms) {
  let timecode;
  return function (...args) {
    let thisNow = this;
    let argsNow = args;

    clearTimeout(timecode);
    timecode = setTimeout(() => {
      fn.apply(thisNow, argsNow);
    }, ms);
  };
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    let repositoryValue = input.value;
    listData = "<li>" + repositoryValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

function select(element) {
  let selectUserData = element.textContent;
  const el = fullArray.find((element) => element.name === selectUserData);
  // console.log(el.owner.login);
  const div = document.createElement("div");
  div.className = "search__item";
  div.innerHTML = `<div>Name: ${el.name}</div>
  <div>Owner:  ${el.owner.login}</div>
  <div>Stars:  ${el.stars}</div>
  <button class="btn-cancel" onclick="deleteDiv(this)">
    <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M43.3514 39.9743L1.35145 1.47431" stroke="#FF0000" stroke-width="4" />
</svg>
<svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.35145 39.9743L43.3514 1.47431" stroke="#FF0000" stroke-width="4" />
</svg></button>
`;

  saveBox.append(div);
  input.value = ""; //После выбора одного из элементов из списка,
  // опустошает бассейн возможных поисковых запросов и оставляет один из вариантов ответа
  searchWrapper.classList.remove("active");
}

function deleteDiv(el) {
  el.closest("div").remove();
}

async function forWaiting(e) {
  let repositoryData = e.target.value.toLocaleLowerCase(); // что ввёл на клавиатуре
  let emptyArray = []; //список с данными, до 5 штук
  if (repositoryData) {
    // если введены данные
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${repositoryData}`
    );
    const Answer = await response.json();
    emptyArray = Answer.items;
    if (emptyArray.length === 0) {
      searchWrapper.classList.remove("active");
      return;
    }

    emptyArray = emptyArray
      .filter((data) => {
        return data.name.toLocaleLowerCase().startsWith(repositoryData);
      })
      .slice(0, 5);
    fullArray = [];
    emptyArray = emptyArray.map((data) => {
      fullArray.push({
        name: data.name,
        owner: data.owner,
        stars: data.stargazers_count,
      });
      return (data.innerHTML = `
        <li>${data.name}</li>
        `);
    });
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active");
  }
}

let forWaitingDebounced = debounce(forWaiting, 200);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // console.log("fetch");
    // e.target.value = "";
  } else {
    forWaitingDebounced(e);
  }
});
