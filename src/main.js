//import { example } from './data.js';
import data from "./data/lol/lol.js";

const champion = data.data;

const aboutGameButton = document.getElementById("about-game");
aboutGameButton.addEventListener("click", showAboutGame);

const showChampionsButton = document.getElementById("show-champions");
showChampionsButton.addEventListener("click", showChampions);

const compareChampionButton = document.getElementById("compare-champ-but");
compareChampionButton.addEventListener("click", showCompChan);

const youtubeButton = document.getElementById("but-youtube");
youtubeButton.addEventListener("click", showYoutubers);

const charactersDiv = document.getElementById("characters-div");
const lolToolIntro = document.getElementById("lol-tool-intro");
const aboutTheGameDiv = document.getElementById("about-the-game-div");
const compareChampion = document.getElementById("compare-champions");
const youtubeMedia = document.getElementById("youtube-media");


function showChampions() {
  charactersDiv.style.visibility = "visible";
  charactersDiv.style.display = "block";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "hidden";
  youtubeMedia.style.display = "none";

  /*Se declarar uma variável e colocar tudo do loop dentro dela fica mais rápido
 o carregamento da página*/
  let template = "";
  for (let persona in champion) {
    template += `
    <div class="champions-card">
    <p class="image-splash"><img class="image common" src="${champion[persona].splash}"></p>
    <p class="name common">Name: ${persona}</p>
    <p class="title common">${champion[persona].title}</p>
    <p class="role common">Role: ${champion[persona].tags}</p>
    <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
    <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
    <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
    <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
    </div>
    `;
  } /*Depois de passar pelo loop, usa o innerHTML e coloca a variável "template" dentro*/
  document.getElementById("see-characters-here").innerHTML = template;
  //console.log(template);
}

function showAboutGame() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "visible";
  aboutTheGameDiv.style.display = "block";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "hidden";
  youtubeMedia.style.display = "none";
}

function showCompChan() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "visible";
  compareChampion.style.display = "block";

  youtubeMedia.style.visibility = "hidden";
  youtubeMedia.style.display = "none";
}

function showYoutubers() {
  charactersDiv.style.visibility = "hidden";
  charactersDiv.style.display = "none";

  lolToolIntro.style.visibility = "hidden";
  lolToolIntro.style.display = "none";

  aboutTheGameDiv.style.visibility = "hidden";
  aboutTheGameDiv.style.display = "none";

  compareChampion.style.visibility = "hidden";
  compareChampion.style.display = "none";

  youtubeMedia.style.visibility = "visible";
  youtubeMedia.style.display = "block";
}
//Função de ordenar personagens
document
  .getElementById("send-ordination")
  .addEventListener("click", sortCharacters);

function sortCharacters() {
  if (document.getElementById("AZ").checked) {
    document.getElementById("see-characters-here").style.visibility = "hidden";
    document.getElementById("see-characters-here").style.display = "none";

    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden";
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "visible";
    document.getElementById("see-characters-sort-here-AZ").style.display = "block";

    let arrayPersonas = [];
    for (let persona in champion) {
      arrayPersonas.push(persona);
    }

    let template = "";
    for (let persona of arrayPersonas.sort()) {
      template += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].splash}">
      <p class="name common">Name: ${persona}</p>
      <p class="title common">${champion[persona].title}</p>
      <p class="role common">Role: ${champion[persona].tags}</p>
      <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
      <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
      <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
      <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
      </div>
      `;
    }
    document.getElementById("see-characters-sort-here-AZ").innerHTML = template;
  } else if (document.getElementById("ZA").checked) {
    document.getElementById("see-characters-here").style.visibility = "hidden";
    document.getElementById("see-characters-here").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden";
    document.getElementById("see-characters-sort-here-AZ").style.display = "none";

    document.getElementById("see-characters-sort-here-ZA").style.visibility = "visible";
    document.getElementById("see-characters-sort-here-ZA").style.display = "block";

    let arrayPersonas = [];
    for (let persona in champion) {
      arrayPersonas.push(persona);
    }

    let template = "";
    for (let persona of arrayPersonas.sort().reverse()) {
      template += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].splash}">
      <p class="name common">Name: ${persona}</p>
      <p class="title common">${champion[persona].title}</p>
      <p class="role common">Role: ${champion[persona].tags}</p>
      <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
      <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
      <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
      <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
      </div>
      `;
    }
    document.getElementById("see-characters-sort-here-ZA").innerHTML = template;
  }
}
//Funções de filtros

const championsArray = Object.values(champion); //Object.values transforma um objeto em um array de objetos (mostra os valores da propriedade)
//console.log(championsArray);
const userInput = document.getElementById('search-entry');
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', showResults);
const seeFilteredHere = document.getElementById('see-filtered-champions-here');

function showResults(){
  showFiltered();
  championsByName();
  championsByRole();
  championsByPartype();
  championsByKey();
  hideCharacters();
  hideCharactersAZ();
  hideCharactersZA();

  let arrayPersonas = [];
  for (let persona in championsArray) {
    arrayPersonas.push(persona);
  }

  let template = "";
  for (let persona in championsArray) {
    template += `
    <div class="champions-card">
    <p class="image-splash"><img class="image common" src="${championsArray[persona].splash}"></p>
    <p class="name common">Name: ${championsArray[persona].name}</p>
    <p class="title common">${championsArray[persona].title}</p>
    <p class="role common">Role: ${championsArray[persona].tags}</p>
    <p class="info-champ common">Attack: ${championsArray[persona].info.attack}</p>
    <p class="info-champ common">Defense: ${championsArray[persona].info.defense}</p>
    <p class="info-champ common">Magic: ${championsArray[persona].info.magic}</p>
    <p class="info-champ common">Difficulty: ${championsArray[persona].info.difficulty}</p>
    </div>
    `;
  }
  seeFilteredHere.innerHTML = template;
}

function hideCharacters(){
  document.getElementById("see-characters-here").style.visibility = "hidden";
  document.getElementById("see-characters-here").style.display = "none";
}
function hideCharactersAZ(){
  document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden";
  document.getElementById("see-characters-sort-here-AZ").style.display = "none";
}
function hideCharactersZA(){
  document.getElementById("see-characters-sort-here-ZA").style.visibility = "visible";
  document.getElementById("see-characters-sort-here-ZA").style.display = "block";
}
function showFiltered(){
  seeFilteredHere.style.visibility = "visible";
  seeFilteredHere.style.display = "block";
}
//=============================================================================================================== 
function championsByName(){
  const championsFilteredByName = championsArray.filter(champion => champion.name.includes(userInput.value));
  seeFilteredHere.innerHTML = championsFilteredByName.value;
 // console.log(championsFilteredByName);
}
function championsByRole(){
  const championsFilteredByRole = championsArray.filter(champion => champion.tags.includes(userInput.value));
  seeFilteredHere.innerHTML = championsFilteredByRole.value;
 // console.log(championsFilteredByRole);
}
function championsByPartype(){
  const championsFilteredByPartype = championsArray.filter(champion => champion.partype.includes(userInput.value));
  seeFilteredHere.innerHTML = championsFilteredByPartype.value;
 // console.log(championsFilteredByPartype);
}
function championsByKey(){
  const championsFilteredByKey = championsArray.filter(champion => champion.key.includes(userInput.value));
  seeFilteredHere.innerHTML = championsFilteredByKey.value;
 // console.log(championsFilteredByKey);
}