const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];


function removeName (nameToRemove) {
    for (i=0; i < names.length; i++) {
    if (nameToRemove === names[i]) {
      names.splice(names.indexOf(names[i]), 1)
    }
  }
  console.log(names)
  return names
}

removeName("katrine"); 
