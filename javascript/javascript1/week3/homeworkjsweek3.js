
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = names.splice(1, 1);
console.log(names);

//////////////////////////////////////////////////////////////////////////////////////

// Please note I couldn't do the right format for these. I found some solutions with Math.floor but I couldn't understand it and it didn't seem to give back the right result. I hope we can review this in class because formats are a thing. 
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function getInTheTARDIS(travelInformation) {
  let time;
  return time = travelInformation.destinationDistance / travelInformation.speed;
}
const travelTime = getInTheTARDIS(travelInformation);
console.log(travelTime);

/////////////////////////////////////////////////////////////////////////////////////

// I understood with the NEXT exercise (The data base songs) how to operate loops better and I could optimize this but I didn't have enough time.  
const seriesDurations = [
  {
    title: 'Modern Family',
    days: 4,
    hours: 3,
    minutes: 59,
  },
  {
    title: 'Avatar: The Last Airbender',
    days: 1,
    hours: 1,
    minutes: 25,
  },
  {
    title: 'The Simpsons',
    days: 10,
    hours: 6,
    minutes: 24,
  }
]
const hoursToMinutes = (24 * 60);
const movie1 = (seriesDurations[0]["days"]) * hoursToMinutes + (seriesDurations[0]["hours"]) * 60 + seriesDurations[0]["minutes"];
const movie2 = (seriesDurations[1]["days"]) * hoursToMinutes + (seriesDurations[1]["hours"]) * 60 + seriesDurations[1]["minutes"];
const movie3 = (seriesDurations[2]["days"]) * hoursToMinutes + (seriesDurations[2]["hours"]) * 60 + seriesDurations[2]["minutes"];


function lifePercentage(a) {
  const lifeSpanNoZeros = 420480; // This is 80 years in minutes. 
  return (a / lifeSpanNoZeros)
}
const totalSum = lifePercentage(movie1) + lifePercentage(movie2) + lifePercentage(movie3);

// 2 things: I know I should have done a loop for this, but I will like to hand in the homework on time (and it is a bit late already) and, for some reason, I couldn't add toFixed to the function because that was affecting the result in totalSum later. 
console.log(seriesDurations[0]["title"] + " took " + lifePercentage(movie1).toFixed(3) + "% of my life");
console.log(seriesDurations[1]["title"] + " took " + lifePercentage(movie2).toFixed(3) + "% of my life");
console.log(seriesDurations[2]["title"] + " took " + lifePercentage(movie3).toFixed(3) + "% of my life");
console.log("In total that is " + totalSum.toFixed(3) + "% of my life")

///////////////////////////////////////////////////////////////////////////////////////////////

const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

const myPlaylist = [];

let songCounter = 5
function addSongDatabase(song) {
  song.songId = songCounter;
  songCounter++;
  songDatabase.push(song)
}

addSongDatabase({
  title: 'Adams Song',
  artist: 'Blink 182',
}
);

addSongDatabase({
  title: 'Alle skuffer over tid',
  artist: 'The minds of 99',
}
);

function getSongByTitle(titleSearching) {
  for (i = 0; i < songDatabase.length; i++) {
    if (titleSearching == songDatabase[i]["title"]) {
      return songDatabase[i];
    }
  }
}

console.log(getSongByTitle('Alle skuffer over tid')); //This Works
console.log(getSongByTitle('when is too much too little?')); //This gives undefined

function addSongToMyPlaylist(title) {
  if (getSongByTitle(title)) {
    myPlaylist.push(getSongByTitle(title));
  }
}

addSongToMyPlaylist('Blacker than black');
addSongToMyPlaylist('My baby');
console.log(myPlaylist); //Testing: the 2 songs were added to myPlaylist

//////////////////////////////////////////////////////////////////////////////////////////////////
// 1) Create and save a note
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

