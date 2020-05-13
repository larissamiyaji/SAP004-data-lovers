import data from "./data/lol/lol.js";

const champion = data.data;

const championsArray = Object.values(champion); //Object.values transforma um objeto em um array de objetos (mostra os valores da propriedade)
 console.log(championsArray)
// const aboutGameButton = document.getElementById("about-game");
// aboutGameButton.addEventListener("click", showAboutGame);

// const showChampionsButton = document.getElementById("show-champions");
// showChampionsButton.addEventListener("click", showChampions);

// const compareChampionButton = document.getElementById("compare-champ-but");
// compareChampionButton.addEventListener("click", showCompChan);

// const youtubeButton = document.getElementById("but-youtube");
// youtubeButton.addEventListener("click", showYoutubers);

const charactersDiv = document.getElementById("characters-div");
const lolToolIntro = document.getElementById("lol-tool-intro");
const aboutTheGameDiv = document.getElementById("about-the-game-div");
const compareChampion = document.getElementById("compare-champions");
const youtubeMedia = document.getElementById("youtube-media");
const cardContainer = document.getElementById("see-characters-here")
const userInput = document.getElementById('search-entry');
const searchButton = document.getElementById('search-button');
const ZA = document.getElementById("ZA");
const AZ = document.getElementById("AZ");

function showChampions(data) {
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
  cardContainer.innerHTML = ""
  let template = ""
  for (let persona of data) {
    template += `
    <div class="champions-card">
    <p class="image-splash"><img class="image common" src="${persona.splash}"></p>
    <p class="name common">Name: ${persona.name}</p>
    <p class="title common">${persona.title}</p>
    <p class="role common">Role: ${persona.tags}</p>
    <p class="info-champ common">Attack: ${persona.info.attack}</p>
    <p class="info-champ common">Defense: ${persona.info.defense}</p>
    <p class="info-champ common">Magic: ${persona.info.magic}</p>
    <p class="info-champ common">Difficulty: ${persona.info.difficulty}</p>
    </div>
    `;
  } /*Depois de passar pelo loop, usa o innerHTML e coloca a variável "template" dentro*/
  cardContainer.innerHTML = template;
  //console.log(template);
}

showChampions(championsArray)
searchButton.addEventListener('click', () => showChampions(championsByName(championsArray)))


userInput.addEventListener("keypress" , (event) => {
  if (event.keyCode === 13) {
    showChampions(championsByName(championsArray))
  }
})


function championsByName(data){
  return data.filter(champion => champion.name.toUpperCase().includes(userInput.value.toUpperCase()));
}

function sortCharacters(data) {
return data.slice().sort();
}

const order = () => showChampions(sortCharacters(championsArray))
const orderReverse= () => showChampions(sortCharacters(championsArray).reverse())
AZ.addEventListener("click", order);

ZA.addEventListener('click', orderReverse)

