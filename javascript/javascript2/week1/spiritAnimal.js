
const spiritAnimal = ['Archaeopteryx', 'Brachiosaurus', 'Diplodocus', 'Protoceratops', 'Stegosaurus', 'Triceratops', 'Tyrannosaurus', 'Velociraptor', 'Ankylosaurus', 'Pterodactylus'];

const spiritEssence = ['Golden', 'Silver', 'Fearless', 'Liberating', 'Slayer', 'Sublime', 'Utmost', 'Fluffy', 'Communist', 'Exentric'];


function getSpiritA () {
  const randomAnimal = Math.floor(Math.random()*10);
  const randomEssence = Math.floor(Math.random()*10);
  let userName =  document.getElementById("userName").value;
    if (userName == null || userName == undefined) {
        return "Please, insert your denomination of birth"
    } else {
    return `${userName}: The ${spiritEssence[randomEssence]} ${spiritAnimal[randomAnimal]}`;
    }
}



