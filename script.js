// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let imgDisplay = document.querySelector(".display-image");
let songDisplay = document.querySelector(".display-song");
let artistDisplay = document.querySelector(".display-artist");
let linkDisplay = document.querySelector(".display-link");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

/*let img = ["https://i.scdn.co/image/ab67616d0000b2739e16930796a07f1195002389" , "https://i.scdn.co/image/ab67616d0000b27302efe8b445f10fb0f0b84126" , "https://upload.wikimedia.org/wikipedia/en/f/f4/Kenshi_Yonezu_-_Kick_Back.png" , "https://i1.sndcdn.com/artworks-000502276371-7jfxvy-t500x500.jpg" , "https://i.scdn.co/image/ab67616d0000b273572fc10e3f67907bd2bff986"];
let songTitle = ["Matsuri" , "Nisemonoyusya" , "KICK BACK" , "Devil Trigger" , "Other Side"];
let artistName = ["Fujii Kaze" , "703goushitsu" , "Kenshi Yonezu" , "Casey Edwards" , "MIYAVI"];
let songLinks = ["https://www.youtube.com/watch?v=OzjpdQZQZtE" , "https://www.youtube.com/watch?v=hM4f37uRyKc" , "https://www.youtube.com/watch?v=zoNJ6HOt3zw" , "https://www.youtube.com/watch?v=-WpnPSChVRQ" , "https://www.youtube.com/watch?v=15FKY0uXro0"];
*/




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let song0 = {
  songName: "Matsuri",
  songArtist: "Fujii Kaze",
  songUrl: "https://i.scdn.co/image/ab67616d0000b2739e16930796a07f1195002389",
  musicLink:"https://www.youtube.com/watch?v=OzjpdQZQZtE"
};
let song1 = {
  songName: "Nisemonoyusya",
  songArtist: "703goushitsu",
songUrl:"https://i.scdn.co/image/ab67616d0000b27302efe8b445f10fb0f0b84126",
  musicLink:"https://www.youtube.com/watch?v=hM4f37uRyKc"
};
let song2 = {
    songName: "KICK BACK",
  songArtist: "Kenshi Yonezu",
songUrl:"https://upload.wikimedia.org/wikipedia/en/f/f4/Kenshi_Yonezu_-_Kick_Back.png",
  musicLink:"https://www.youtube.com/watch?v=zoNJ6HOt3zw"
};
let song3 = {
      songName: "Devil Trigger",
  songArtist: "Casey Edwards",
songUrl:"https://i1.sndcdn.com/artworks-000502276371-7jfxvy-t500x500.jpg",
  musicLink:"https://www.youtube.com/watch?v=-WpnPSChVRQ"
};
let song4 = {
   songName: "Other Side",
  songArtist: "MIYAVI",
songUrl:"https://i.scdn.co/image/ab67616d0000b273572fc10e3f67907bd2bff986",
  musicLink:"https://www.youtube.com/watch?v=15FKY0uXro0"
};
let songList = [song0 , song1 , song2 , song3 , song4];
console.log(songList);

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  
  /*let imgInput = img.value;
  let songInput = songName.value;
  let artistInput = artistName.value;
  let linkInput = songLink.value;*/

    let songListInput = {
    songUrl: image.value,
    songName: songName.value,
    songArtist: artist.value,
    musicLink: songLink.value
  };


// task 10: use `.push()` to add each input value to the correct array.
  
  /*img.push(imgInput);
  songTitle.push(songInput);
  artistName.push(artistInput);
  songLinks.push(linkInput);*/

  songList.push(songListInput);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  imgDisplay.innerHTML = "";
  songDisplay.innerHTML = "";
  artistDisplay.innerHTML = "";
  linkDisplay.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
  for (let i = 0; i < songList.length;i++) {
    imgDisplay.insertAdjacentHTML("beforeend" , `<p><img src="${songList[i].songUrl}"></p>`)
  }
  
for (let i = 0; i < songList.length;i++) {
    songDisplay.insertAdjacentHTML("beforeend" , `<p>${songList[i].songName}</p>`)
  }

for (let i = 0; i < songList.length;i++) {
    artistDisplay.insertAdjacentHTML("beforeend" , `<p>${songList[i].songArtist}</p>`)
  }
  
  for (let i = 0; i < songList.length;i++) {
    linkDisplay.insertAdjacentHTML("beforeend" , `<p><a href="${songList[i].musicLink}" target="_blank">Song Here!</a></p>`)
  }
}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
