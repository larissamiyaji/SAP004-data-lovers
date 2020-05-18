export function percentageByTypeAndLevel(typeOfInfoArg, levelValueArg, championsArrayArg){

    let numberOfChampions = [];
    let totalOfChampions = [];

    for (let persona of championsArrayArg) {
      totalOfChampions.push(persona.id);

      if(persona.info[typeOfInfoArg] >= levelValueArg){
        numberOfChampions.push(persona.id);
      }
    }

   return parseInt((numberOfChampions.length * 100) / totalOfChampions.length);
}

export function searchChampionsByName(arrayCharactersForFilter, whatTheUserWantsTosearch){  //PESQUISA DENTRO DOS DADOS OQUE O USUÁRIO FORNECE
    return arrayCharactersForFilter.filter(championFilter => championFilter.name.toUpperCase().includes(whatTheUserWantsTosearch.toUpperCase())); 
}

export function sortCharactersAZ(ObjectCharactersForSortAZ) {  //ORDENA OS PERSONAGENS EM ORDERM AZ
    let arrayPersonas = [];

      for (let persona in ObjectCharactersForSortAZ){    
      arrayPersonas.push(persona);   
      }

    return arrayPersonas.sort();
}
    
export function sortCharactersZA(ObjectCharactersForSortZA) {  //ORDENA OS PERSONAGENS EM ORDERM ZA
    let arrayPersonas = [];

    for (let persona in ObjectCharactersForSortZA){    
    arrayPersonas.push(persona);   
    }

    return arrayPersonas.sort().reverse();
}

export function filterChampionsByTypeAndLevel(arrayCharactersForFilterBTL, typeOfInfoArgBTL, levelValueArgBTL) {

  function isBigEnough(value) {
    return value.info[typeOfInfoArgBTL] >= levelValueArgBTL;
  } 
  
  return arrayCharactersForFilterBTL.filter(isBigEnough); 

}