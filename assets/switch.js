let resultDiv = document.createElement("div")
resultDiv.id = 'result'
document.getElementById('wrapper').appendChild(resultDiv)


// event listener
let showBtn = document.querySelector("button");
showBtn.addEventListener('click',displayStates)
function displayStates(){
 const input = document.getElementById("input");
 const city  = input.options[input.selectedIndex].value
 let population = 0, literacyRate = 0, languge = 0;
 switch(city){
     case 'chennai':
         population = 8398393
         literacyRate = 77.87
         language = 'tamil'
         break
         case 'bengaluru':
         population = 83877
         literacyRate = 64.77
         language = 'kannada'
         break
         case 'delhi':
         population = 65446734
         literacyRate = 44.45
         language = 'hindi'
         break
         case 'Mumbai':
         population = 3456454
         literacyRate = 76.66
         language = 'marathi'
         break

 }

 let text = `the india city of ${city} has a population of ${population},language spoken is ${language} and literacy rate is ${literacyRate}%`
 
 document.getElementById('result').innerHTML = text;

}