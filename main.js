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
  let template =""
  for (let persona in champion) {
    template += 
    `
    <div class="champions-card">
    <p><img class="image common" src="${champion[persona].img}"></p>
    <p class="name common">Name: ${persona}</p>
    <p class="title common">${champion[persona].title}</p>
    <p class="role common">Role: ${champion[persona].tags}</p>
    <p class="info-champ common">Attack: ${champion[persona].info.attack}</p>
    <p class="info-champ common">Defense: ${champion[persona].info.defense}</p>
    <p class="info-champ common">Magic: ${champion[persona].info.magic}</p>
    <p class="info-champ common">Difficulty: ${champion[persona].info.difficulty}</p>
    </div>
    `;
  }; /*Depois de passar pelo loop, usa o innerHTML e coloca a variavel "template" dentro*/
  document.getElementById("see-characters-here").innerHTML = template;
  console.log(template);
};

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
//Função de ordenar personagens
document.getElementById("send-ordination").addEventListener("click", sortCharacters);
    
function sortCharacters(event) {

    if (document.getElementById("AZ").checked){

      document.getElementById("see-characters-here").style.visibility = "hidden"; 
      document.getElementById("see-characters-here").style.display = "none";
      
      document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
      document.getElementById("see-characters-sort-here-ZA").style.display = "none";

      document.getElementById("see-characters-sort-here-AZ").style.visibility = "visible"; 
      document.getElementById("see-characters-sort-here-AZ").style.display = "block"; 
      
      let arrayPersonas = [];
      for (let persona in champion){    
      arrayPersonas.push(persona);   
      };

      for (let persona of arrayPersonas.sort()) {
      document.getElementById("see-characters-sort-here-AZ").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
      
    }else if(document.getElementById("ZA").checked){

      document.getElementById("see-characters-here").style.visibility = "hidden"; 
      document.getElementById("see-characters-here").style.display = "none";

      document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
      document.getElementById("see-characters-sort-here-AZ").style.display = "none";

      document.getElementById("see-characters-sort-here-ZA").style.visibility = "visible";  
      document.getElementById("see-characters-sort-here-ZA").style.display = "block"; 

      let arrayPersonas = [];
      for (let persona in champion){    
      arrayPersonas.push(persona);   
      };

      for (let persona of arrayPersonas.sort().reverse()) {
      document.getElementById("see-characters-sort-here-ZA").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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

    };
};
//Funções de filtros

const championsArray = Object.keys(champion);
console.log(championsArray);

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', showAssassins);

function showAssassins(event){
  hideCharactersDiv();
  document.getElementById('see-characters-assassins-here').innerHTML = championsArray;
};

function hideCharactersDiv(){
  document.getElementById('see-characters-here').style.display = "none";
};











































/*const searchButton = document.getElementById('filter-champions');
searchButton.addEventListener('click', showAssassins);

const assassin = document.getElementById('assassin');
const fighter = document.getElementById('fighter');
const mage = document.getElementById('mage');
const marksman = document.getElementById('marksman');
const support = document.getElementById('support');
const tank = document.getElementById('tank');

const radioAssassin = document.getElementById('see-characters-assassins-here');
const radioFighter = document.getElementById('see-characters-fighters-here');
const radioMage = document.getElementById("see-characters-mage-here");
const radioMarksman = document.getElementById("see-characters-marksman-here");
const radioSupport = document.getElementById("see-characters-support-here");
const radioTank = document.getElementById("see-characters-tank-here");

const seeAssassinsHere = document.getElementById('see-assassins-here');

function showAssassins(event){
  if(assassin.checked){
    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "visible"; 
    radioAssassin.style.display = "block"; 

    radioFighter.style.visibility = "hidden"; 
    radioFighter.style.display = "none"; 

    radioMage.style.visibility = "hidden"; 
    radioMage.style.display = "none";
    
    radioMarksman.style.visibility = "hidden"; 
    radioMarksman.style.display = "none"; 

    radioSupport.style.visibility = "hidden"; 
    radioSupport.style.display = "none"; 

    radioTank.style.visibility = "hidden"; 
    radioTank.style.display = "none"; 

    let arrayPersonas = [];
    for (let persona in champion){
      arrayPersonas.push(persona);
    }
    for( let persona of arrayPersonas.includes('Assassin')){
      seeAssassinsHere.innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  };
}; */
//------------------------------------------------------------------------------------------
/*const championsArray = Object.values(data);
let championsFIltered = []; */
/*
const filterSelection = document.getElementById('filter-champions');
filterSelection.addEventListener('click', filterRole);

const assassin = document.getElementById('assassin');
const fighter = document.getElementById('fighter');
const mage = document.getElementById('mage');
const marksman = document.getElementById('marksman');
const support = document.getElementById('support');
const tank = document.getElementById('tank');

const radioAssassin = document.getElementById('see-characters-assassins-here');
const radioFighter = document.getElementById('see-characters-fighters-here');
const radioMage = document.getElementById("see-characters-mage-here");
const radioMarksman = document.getElementById("see-characters-marksman-here");
const radioSupport = document.getElementById("see-characters-support-here");
const radioTank = document.getElementById("see-characters-tank-here");*/
//-----------------------------------------------------------------------------------------
/*
function filterAssasin(){
  return (persona.tags === "Assassin")
};
function filterFighter(){
  return (persona.tags === "Fighter")
};
function filterMage(){
  return (persona.tags === "Mage")
};
function filterMarksman(){
  return (persona.tags === "Marksman")
};
function filterSupport(){
  return (persona.tags === "Support")
};
function filterTank(){
  return (persona.tags === "Tank")
};

arrayPersonas.filter(filterAssasin);
arrayPersonas.filter(filterFighter);
arrayPersonas.filter(filterMage);
arrayPersonas.filter(filterMarksman);
arrayPersonas.filter(filterSupport);
arrayPersonas.filter(filterTank); */
//-----------------------------------------------------------------------------------------

/*function filterRole(event){
  if (assassin.checked){

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "visible"; 
    radioAssassin.style.display = "block"; 

    radioFighter.style.visibility = "hidden"; 
    radioFighter.style.display = "none"; 

    radioMage.style.visibility = "hidden"; 
    radioMage.style.display = "none";
    
    radioMarksman.style.visibility = "hidden"; 
    radioMarksman.style.display = "none"; 

    radioSupport.style.visibility = "hidden"; 
    radioSupport.style.display = "none"; 

    radioTank.style.visibility = "hidden"; 
    radioTank.style.display = "none"; 
    
    let arrayPersonas = [];
    for (let persona in champion){    
    arrayPersonas.push(persona);   
    };
      for (let persona of arrayPersonas.filter()) {
      document.getElementById("see-characters-assassins-here").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  } else if (fighter.checked){

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "hidden"; 
    radioAssassin.style.display = "none"; 

    radioFighter.style.visibility = "visible"; 
    radioFighter.style.display = "block"; 

    radioMage.style.visibility = "hidden"; 
    radioMage.style.display = "none";
    
    radioMarksman.style.visibility = "hidden"; 
    radioMarksman.style.display = "none"; 

    radioSupport.style.visibility = "hidden"; 
    radioSupport.style.display = "none"; 

    radioTank.style.visibility = "hidden"; 
    radioTank.style.display = "none"; 
    
    let arrayPersonas = [];
    for (let persona in champion){    
    arrayPersonas.push(persona);   
    };
      for (let persona of arrayPersonas.filter()) {
      document.getElementById("see-characters-fighters-here").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  } else if (mage.checked){

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "hidden"; 
    radioAssassin.style.display = "none"; 

    radioFighter.style.visibility = "hidden"; 
    radioFighter.style.display = "none"; 

    radioMage.style.visibility = "visible"; 
    radioMage.style.display = "block";
    
    radioMarksman.style.visibility = "hidden"; 
    radioMarksman.style.display = "none"; 

    radioSupport.style.visibility = "hidden"; 
    radioSupport.style.display = "none"; 

    radioTank.style.visibility = "hidden"; 
    radioTank.style.display = "none"; 
    
    let arrayPersonas = [];
    for (let persona in champion){    
    arrayPersonas.push(persona);   
    };
      for (let persona of arrayPersonas.filter()) {
      document.getElementById("see-characters-mage-here").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  } else if (marksman.checked){

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "hidden"; 
    radioAssassin.style.display = "none"; 

    radioFighter.style.visibility = "hidden"; 
    radioFighter.style.display = "none"; 

    radioMage.style.visibility = "hidden"; 
    radioMage.style.display = "none";
    
    radioMarksman.style.visibility = "visible"; 
    radioMarksman.style.display = "block"; 

    radioSupport.style.visibility = "hidden"; 
    radioSupport.style.display = "none"; 

    radioTank.style.visibility = "hidden"; 
    radioTank.style.display = "none";   
    
    let arrayPersonas = [];
    for (let persona in champion){    
    arrayPersonas.push(persona);   
    };
      for (let persona of arrayPersonas.filter()) {
      document.getElementById("see-characters-marksman-here").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  } else if (support.checked){

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "hidden"; 
    radioAssassin.style.display = "none"; 

    radioFighter.style.visibility = "hidden"; 
    radioFighter.style.display = "none"; 

    radioMage.style.visibility = "hidden"; 
    radioMage.style.display = "none";
    
    radioMarksman.style.visibility = "hidden"; 
    radioMarksman.style.display = "none"; 

    radioSupport.style.visibility = "visible"; 
    radioSupport.style.display = "block"; 

    radioTank.style.visibility = "hidden"; 
    radioTank.style.display = "none"; 
    
    let arrayPersonas = [];
    for (let persona in champion){    
    arrayPersonas.push(persona);   
    };
      for (let persona of arrayPersonas.filter()) {
      document.getElementById("see-characters-support-here").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  } else if (tank.checked){

    document.getElementById("see-characters-here").style.visibility = "hidden"; 
    document.getElementById("see-characters-here").style.display = "none";
    
    document.getElementById("see-characters-sort-here-ZA").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-ZA").style.display = "none";

    document.getElementById("see-characters-sort-here-AZ").style.visibility = "hidden"; 
    document.getElementById("see-characters-sort-here-AZ").style.display = "none"; 

    radioAssassin.style.visibility = "hidden"; 
    radioAssassin.style.display = "none"; 

    radioFighter.style.visibility = "hidden"; 
    radioFighter.style.display = "none"; 

    radioMage.style.visibility = "hidden"; 
    radioMage.style.display = "none";
    
    radioMarksman.style.visibility = "hidden"; 
    radioMarksman.style.display = "none"; 

    radioSupport.style.visibility = "hidden"; 
    radioSupport.style.display = "none"; 

    radioTank.style.visibility = "visible"; 
    radioTank.style.display = "block"; 
    
    let arrayPersonas = [];
    for (let persona in champion){    
    arrayPersonas.push(persona);   
    };
      for (let persona of arrayPersonas.filter()) {
      document.getElementById("see-characters-tank-here").innerHTML += `
      <div class="champions-card">
      <img class="image common" src="${champion[persona].img}">
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
  };
}; */

/*
function filterAssasin(){
  return (persona.tags === "Assassin")
};
function filterFighter(){
  return (persona.tags === "Fighter")
};
function filterMage(){
  return (persona.tags === "Mage")
};
function filterMarksman(){
  return (persona.tags === "Marksman")
};
function filterSupport(){
  return (persona.tags === "Support")
};
function filterTank(){
  return (persona.tags === "Tank")
};

arrayPersonas.filter(filterAssasin);
arrayPersonas.filter(filterFighter);
arrayPersonas.filter(filterMage);
arrayPersonas.filter(filterMarksman);
arrayPersonas.filter(filterSupport);
arrayPersonas.filter(filterTank); 

arrayPersonas.filter(
  function filterRole(persona){
    return (persona.tags === "Assassin")
  }
)*/