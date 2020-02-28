
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');


// translateAllAtOnce()
function translateAllAtOnce () { 
  Promise.all[moveElement(redBox, {x: 20, y: 300}), moveElement(blueBox, {x: 400, y: 300}), moveElement(greenBox, {x: 400, y: 20})]
}

// translateOneByOne()
function translateOneByOne () {
   new Promise((resolve) => {
      resolve(moveElement(redBox, {x: 20, y:300}))
}
    ).then(()=>  {
     return new Promise((resolve) => {
       resolve(moveElement(blueBox, {x: 400, y:300}))
      }
      )  
  }
  ).then(()=>  {
   return  new Promise((resolve) => {
      resolve(moveElement(greenBox, {x: 400, y:20}))
     }
     )  
 })
}


