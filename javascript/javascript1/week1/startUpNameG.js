//Create button to call nameGenerator 
const btnDiv = document.createElement('div');
document.body.appendChild(btnDiv);
const buttonGenerator = document.createElement('button');
buttonGenerator.onclick = nameGenerator; 
buttonGenerator.innerHTML = 'StartUp Generator'; 
btnDiv.appendChild(buttonGenerator); 
const resultDiv = document.createElement('div'); 
document.body.appendChild(resultDiv);
const ulForResults = document.createElement('ul'); 
ulForResults.appendChild(resultDiv);


function nameGenerator () {
    const firstWords = ["Easy", "Smart", "Awesome", "Super Duper", "Fantastic", "Splendid", "Brilliant", "The cool", "Genius", "Marvelous"];
    const secondWords = ["Corporation", "Team", "Association", "Assemble", "Trio", "League", "Group", "Tribe", "Humans", "Train"];
    const randomNumber = (Math.floor(Math.random() * 10) + 0); 
    
    let startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;
    let logResult = `The startup: "${startupName}" contains ${startupName.length} characters`;
    renderingData(logResult);    
} 


function renderingData (logResult) {
const result = document.createElement('li'); 
result.innerHTML = logResult;
btnDiv.appendChild(result);
console.log(result)
}


