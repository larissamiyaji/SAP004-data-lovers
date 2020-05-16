import { showAboutGame,
         showCompChan, 
         showYoutubers, 
         showChampionsInCards,
         searchChampionsByName, 
         sortCharactersAZ,
         sortCharactersZA } from './data.js';

import data from "./data/lol/lol.js";


const championsArray = Object.values(data.data);

const aboutGameButton = document.getElementById("about-game");
const compareChampionButton = document.getElementById("compare-champ-but");
const youtubeButton = document.getElementById("but-youtube");
const buttonShowChampions = document.getElementById("show-champions");
const searchButton =document.getElementById('search-button');
const radioAZ = document.getElementById("AZ");
const radioZA = document.getElementById("ZA");
const userInput = document.getElementById("search-entry");
userInput.addEventListener("keypress" , (event) => {
  if (event.keyCode === 13) {
    showChampionsInCards(searchChampionsByName(championsArray))
  }
})

aboutGameButton.addEventListener("click", showAboutGame);
compareChampionButton.addEventListener("click", () => showCompChan(championsArray));
youtubeButton.addEventListener("click", showYoutubers);

buttonShowChampions.addEventListener("click", () => showChampionsInCards(championsArray)); 
searchButton.addEventListener('click', () => showChampionsInCards(searchChampionsByName(championsArray)));
radioAZ.addEventListener("click", () => showChampionsInCards(sortCharactersAZ(championsArray)));
radioZA.addEventListener("click", () => showChampionsInCards(sortCharactersZA(championsArray)));

















































// CALCULO AGREGADO

/*
var selectTypesOfInformation = document.getElementById("types-of-information");
var selectedselectTypesOfInformation = selectTypesOfInformation.selectedIndex;
var typeOfInfo = selectTypesOfInformation.options[selectedselectTypesOfInformation].value;


var selectLevelOfInformation = document.getElementById("level-of-information");
var selectedIndexOfLevelOfInformation = selectLevelOfInformation.selectedIndex;
var levelValue = Number(selectLevelOfInformation.options[selectedIndexOfLevelOfInformation].value);


function percentageByTypeAndLevel(typeOfInfoArg, levelValueArg){

    let numberOfChampions = [];
    let totalOfChampions = [];

    for (let persona of championsArray) {
      totalOfChampions.push(persona.id);

      if(persona.info[typeOfInfoArg] >= levelValueArg){
        numberOfChampions.push(persona.id);
      };
    };

   return percentageOfChampions =  parseInt((numberOfChampions.length * 100) / totalOfChampions.length);
};
------------------------------------------------------------------




/*
const aboutGameButton = document.getElementById("about-game");
aboutGameButton.addEventListener("click", showAboutGame);

const compareChampionButton = document.getElementById("compare-champ-but");
compareChampionButton.addEventListener("click", showCompChan);

const youtubeButton = document.getElementById("but-youtube");
youtubeButton.addEventListener("click", showYoutubers);

const charactersDiv = document.getElementById("characters-div");
const lolToolIntro = document.getElementById("lol-tool-intro");
const aboutTheGameDiv = document.getElementById("about-the-game-div");
const compareChampion = document.getElementById("compare-champions");
const youtubeMedia = document.getElementById("youtube-media");

const champion = data.data;


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
};

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
};

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
};


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
  };
  document.getElementById("see-characters-here").innerHTML = template;
};

document.getElementById("send-ordination").addEventListener("click", sortCharacters);

    
function sortCharacters() {

    if (document.getElementById("AZ").checked){

      document.getElementById("see-characters-here").style.visibility = "hidden"; 
      document.getElementById("see-characters-here").style.display = "none";
      
      document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
      document.getElementById("see-characters-sort-here-ZA").style.display = "none";

      document.getElementById("see-characters-sort-here-AZ").style.visibility = "visible"; 
      document.getElementById("see-characters-sort-here-AZ").style.display = "block"; 
      
      let arrayPersonas = [];
      for (let persona in data.data){    
      arrayPersonas.push(persona);   
      };

      let template = "";
      for (let persona of arrayPersonas.sort()) {
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
      };
      document.getElementById("see-characters-sort-here-AZ").innerHTML = template;
      
    }else if(document.getElementById("ZA").checked){

      document.getElementById("see-characters-here").style.visibility = "hidden"; 
      document.getElementById("see-characters-here").style.display = "none";

      document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
      document.getElementById("see-characters-sort-here-AZ").style.display = "none";

      document.getElementById("see-characters-sort-here-ZA").style.visibility = "visible";  
      document.getElementById("see-characters-sort-here-ZA").style.display = "block"; 

      let arrayPersonas = [];
      for (let persona in data.data){    
      arrayPersonas.push(persona);   
      };

      let template = "";
      for (let persona of arrayPersonas.sort().reverse()) {
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
      };
      document.getElementById("see-characters-sort-here-ZA").innerHTML = template;

    };
};
*/