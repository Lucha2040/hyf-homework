//1) Create and save a note
const notes = [];

function addNote(id, content) {
  notes.push({ id, content });
}

addNote((1), ("La cucaracha, la cucaracha"));
addNote((2), ("Ya no puede caminar"));
addNote((3), ("Porque no tiene, porque le faltan"));
addNote((4), ("Las dos patitas de atras"));
console.log(notes); //Testing: add some notes to work the next steps.

// 2) Get a note from ID 
function getNoteFromId(id) {
  if (id > notes.length) {
    console.log("You haven't wrote this note yet")
  } else {
    for (i = 0; i < notes.length; i++) {
      if (id == notes[i]["id"]) {
        console.log(notes[i]);
      }
    }
  }
}

getNoteFromId(3) // Successful search
getNoteFromId(5) // Log error string

// 3)  Get all the notes together 
console.log(notes); // Clearly I am missing something here because I couldn't understand why I need to make a function that I can do with console.log

// 4) Log out notes formatted
function logOutNotesFormatted() {
  for (i = 0; i < notes.length; i++) {
    console.log("The note with the id:" + notes[i]["id"] + " has the following note text: " + notes[i]["content"]);
  }
}
logOutNotesFormatted(); //logs out all the notes formatted 

