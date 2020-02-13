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
  