const trackList = async function (tracks) {
  const trackListContainer = document.getElementById("album-tracks-list");
  let counter = 1;

  function convertSecondsToMinutesTracks(seconds) {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
    const result = minutes + ":" + extraSeconds;
    return result;
  }

  let audioCorrente = null; // Memorizza l'audio corrente

  tracks.forEach((track) => {
    const trackListElement = document.createElement("li");
    trackListElement.classList = "row mb-3";

    trackListElement.innerHTML = `     
    <div class="wrapper ps-0  col-1 text-center">
        <span class="box1 text-center">${counter++}</span>
        <span class="box2">
          <span class="d-none">${track.preview}</span>
          <button type="button" class=" btn text-start">
                 <div
                   class="icon-player-container d-flex justify-content-center align-items-center text-dark"
                   style="width: 25px; height: 25px"
                 >
                   <svg
                     data-encore-id="icon"
                     role="img"
                     aria-hidden="true"
                     viewBox="0 0 24 24"
                     class="Svg-sc-ytk21e-0 iYxpxA"
                     style="width: 10px; height: 10px"
                   >
                     <path
                       d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                     ></path>
                   </svg>
                 </div>
          </button>
        </span>
    </div>
    <div class="col-8 text-start px-0 ps-2 align-self-center">
      <div class="d-flex flex-column justify-content-center">
        <span>${track.title}</span>
        <span class="fs-8">${track.artist.name}</span>
      </div>
    </div>
    <div class="col-3 text-end px-1 align-self-center">
     ${convertSecondsToMinutesTracks(track.duration)}
    </div>
    `;

    /*     const playBtnContent = trackListElement.getElementsByTagName("span")[0]; */
    const playBtn = trackListElement.getElementsByTagName("span")[1];

    //const playBtn = trackListElement.getElementsById("play");

    const trackPreviewLink = trackListElement.getElementsByTagName("span")[2].innerText;

    console.log(audioCorrente);

    let valoreAttuale = 0;

    playBtn.addEventListener("click", function () {
      // Se c'è un audio corrente, interrompi la riproduzione
      const player = document.getElementById("player");
      const buttonPlayer = document.getElementById("PIPPO");
      player.addEventListener("timeupdate", (event) => {
        const progressBar = document.getElementById("progressBar");
        let duration = event.currentTarget.duration;
        let currentTime = event.currentTarget.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.value = progressPercent;
        /* const playerCurrentTime = document.getElementById("playerCurrentTime");
        const playerDuration = document.getElementById("playerDuration");
        playerCurrentTime.innerHTML = Math.floor(currentTime);
        playerDuration.innerHTML = Math.floor(duration); */
      });
      function riproduci() {
        buttonPlayer.addEventListener("click", function () {
          if (player.paused) {
            player.play();
          } else {
            player.pause();
          }
        });
      }
      console.log(buttonPlayer);
      if (audioCorrente) {
        if (audioCorrente.src !== trackPreviewLink) {
          player.src = trackPreviewLink;
          /*  player.setAttribute("controls", "controls"); */
          player.pause();
          console.log(audioCorrente.src);
          audioCorrente = new Audio(trackPreviewLink);
          playBarItems(track);
        }

        if (audioCorrente.paused) {
          player.play();
        } else {
          player.pause();

          console.log(buttonPlayer);
        }
      } else {
        audioCorrente = new Audio(trackPreviewLink);
        player.src = trackPreviewLink;
        /*  player.setAttribute("controls", "controls"); */
        player.classList = "mx-auto text-primary w-100";
        playBarItems(track);
        player.play();
        console.log(audioCorrente);
        riproduci();
      }
    });
    trackListContainer.appendChild(trackListElement);
  });
};
function setVolume() {
  var volumeSlider = document.getElementById("volumeSlider");
  player.volume = volumeSlider.value;
}
const playBarSongTitle = document.getElementById("playbar-song-title");
const playBarArtistName = document.getElementById("playbar-artist-name");

const albumPage = async function () {
  const params = new URLSearchParams(window.location.search);
  const albumId = params.get("albumId");
  //   const albumId = 13994766;
  const albumURL = "https://deezerdevs-deezer.p.rapidapi.com/album/";
  const token = "18ec06a3e2mshc92412178be162ap1a604djsn2c54c747cb17"; // Token Gian
  // const token = "940dce657bmshd8c731d3dbd3502p18a658jsn330fcc56530d"  // Token Jag
  // const token = "66b19f990dmsh7c4ff58d5ea21d0p1aa92fjsnd50246c25f1d"  // Token Val
  // const token = "c4234d51b0msh31724428db3a8bfp114b28jsnf03bb1f920a7"  // Token Dav

  const Host = "deezerdevs-deezer.p.rapidapi.com";

  try {
    const response = await fetch(albumURL + albumId, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": token,
        "X-RapidAPI-Host": Host,
      },
    });

    const album = await response.json();
    console.log(album);

    function convertSecondsToMinutes(seconds) {
      let minutes = Math.floor(seconds / 60);
      let extraSeconds = seconds % 60;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
      const result = minutes + " min " + extraSeconds + " sec.";
      return result;
    }

    const albumCover = document.getElementById("album-cover");
    const albumTitle = document.getElementById("album-title");

    const albumTitleOnStickyBar = document.getElementById("name-album-2");

    const albumArtistName = document.getElementById("album-artist");
    const albumYear = document.getElementById("album-year");
    const albumTotalSongs = document.getElementById("album-total-songs");
    const albumTotalTime = document.getElementById("album-total-time");
    const albumArtistProfileImg = document.getElementById("profile-picture-album-page");
    const playBarImg = document.getElementById("playbar-img");

    albumCover.src = album.cover_xl;
    albumCover.crossOrigin = "Anonymous";
    albumTitle.innerText = album.title;
    albumTitleOnStickyBar.innerText = album.title;
    albumArtistProfileImg.src = album.artist.picture_small;
    albumArtistName.innerText = album.artist.name;
    albumYear.innerText = album.release_date.substr(0, 4);
    albumTotalSongs.innerText = album.nb_tracks + " brani,";
    albumTotalTime.innerText = convertSecondsToMinutes(album.duration);
    playBarImg.src = album.cover;
    playBarSongTitle.innerText = "";
    playBarArtistName.innerText = "";
    console.log(album.tracks);

    trackList(album.tracks.data);

    const colorThief = new ColorThief();

    albumCover.addEventListener("load", () => {
      console.log(albumCover);
      const color = colorThief.getColor(albumCover);
      console.log(color);
      const colorStr = JSON.stringify(color);
      console.log(colorStr);
      const rgbValue = colorStr.replaceAll("[", "(").replaceAll("]", ")");
      console.log(rgbValue);
      const changeBg = document.getElementById("album-banner");
      changeBg.style.backgroundColor = "rgb" + rgbValue;
    });
  } catch (error) {
    console.log("errore nella ricerca dell'album", error);
  }
};

const playBarItems = (track) => {
  playBarSongTitle.innerText = track.title;
  playBarArtistName.innerText = track.artist.name;
};

window.onload = () => {
  albumPage();
};
