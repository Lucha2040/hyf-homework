
const spiritAnimal = ['Archaeopteryx', 'Brachiosaurus', 'Diplodocus', 'Protoceratops', 'Stegosaurus', 'Triceratops', 'Tyrannosaurus', 'Velociraptor', 'Ankylosaurus', 'Pterodactylus'];

const spiritEssence = ['Golden', 'Silver', 'Fearless', 'Liberating', 'Slayer', 'Sublime', 'Utmost', 'Fluffy', 'Communist', 'Exentric'];





function getSpiritA () {
  let userName =  document.getElementById("userName").value;
    if (userName == null || userName == undefined) {
        return "Please, insert your denomination of birth"
    } else {
    return `${userName}: The ${spiritEssence[randomIndex()]} ${spiritAnimal[randomIndex()]}`;
    }
}

function randomIndex () {
  return  Math.floor(Math.random()*10);
}


