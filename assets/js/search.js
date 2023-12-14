const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-bar");

const searchContainer = document.getElementById("search-container");

const searchURL = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

const token = "18ec06a3e2mshc92412178be162ap1a604djsn2c54c747cb17"; // Token Gian
// const token = "940dce657bmshd8c731d3dbd3502p18a658jsn330fcc56530d"  // Token Jag
// const token = "66b19f990dmsh7c4ff58d5ea21d0p1aa92fjsnd50246c25f1d"  // Token Val
// const token = "c4234d51b0msh31724428db3a8bfp114b28jsnf03bb1f920a7"  // Token Dav

const Host = "deezerdevs-deezer.p.rapidapi.com";

const searcArtist = async function () {
  try {
    const response = await fetch(searchURL + searchInput.value, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": token,
        "X-RapidAPI-Host": Host,
      },
    });
    if (!response.ok) {
      throw new Error("NON ERANO QUESTI GLI ACCORDI!");
    }
    const responseObj = await response.json();
    console.log(responseObj);

    const allAlbums = [];
    searchContainer.innerHTML = "";
    for (let i = 0; i < responseObj.data.lenght; i++) {
      const element = responseObj.data[i];
      if (
        element.artist.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            searchInput.value
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      ) {
        const artist = element.artist;
        const artistId = element.artist.id;

        searchContainer.innerHTML = "";

        const titleSong = document.createElement("h2");
        titleSong.classList = "d-none d-lg-block col-6 mb-3";
        titleSong.innerText = "Brani";

        const titleArtist = document.createElement("h2");
        titleArtist.classList = "col-12 col-lg-6 mb-3 px-4 px-md-0";
        titleArtist.innerText = "Risultato più rilevante";

        const col = document.createElement("div");
        col.classList = "col-12 col-lg-6 px-4 px-md-0";

        const artistCard = document.createElement("div");
        artistCard.classList = "card border-0 bg-spotify p-3 bg-dark-2 pointer ";

        artistCard.addEventListener("click", function () {
          window.location.assign("./artist.html?artistId=" + artistId);
          searchInput.value = "";
        });

        const cardImg = document.createElement("img");
        cardImg.classList = "card-img-top w-25 rounded-circle shadow-lg";
        cardImg.src = artist.picture_big;

        const cardBody = document.createElement("div");
        cardBody.classList = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.classList = "card-title";
        cardTitle.innerText = artist.name;

        const cardText = document.createElement("p");
        cardText.classList = "card-text badge bg-dark";
        cardText.innerText = artist.type.charAt(0).toUpperCase() + artist.type.slice(1);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        artistCard.appendChild(cardImg);
        artistCard.appendChild(cardBody);
        col.appendChild(artistCard);

        searchContainer.appendChild(titleArtist);
        searchContainer.appendChild(titleSong);
        searchContainer.appendChild(col);

        allAlbums.push(element.album);
        // console.log(allAlbums);
      }
    }

    const col = document.createElement("div");
    col.classList = "col-12 col-lg-6";

    const list = document.createElement("ul");
    list.classList = "m-0 p-0 mt-3 mt-lg-0 px-4 px-md-1 ";
    list.setAttribute("id", "list-songs");

    //Troviamo le sue canzoni più popolari
    responseObj.data.forEach((element) => {
      const listElem = document.createElement("li");
      listElem.innerHTML = `
			  <li class="row mb-3 border-bottom py-2 pointer">
				<div class="col-2 col-md-1">
				  <img
					width="60px"
					src="${element.album.cover_small}"
					alt=""
				  />
				  </div>
				  <div class="col-8 col-md-9 d-flex align-items-center">
				  <div class="ms-1 ms-md-5 d-flex flex-column gap-1 w-100">
					<h5 class="m-0 text-truncate">${element.title}</h5>
					<div class="d-flex">
					  <span class="badge bg-secondary h-100 me-1">${element.explicit_lyrics ? "E" : ""}</span>
					  <p class="m-0 align-self-center">${element.artist.name}</p>
					</div>
				  </div>
				  </div>
				<div class="col-2 text-end align-self-center">${(element.duration / 60).toFixed(2)}</div>
			  </li>
			  `;

      list.appendChild(listElem);
      col.appendChild(list);

      searchContainer.appendChild(col);
    });

    const filteredAlbums = [...new Map(allAlbums.map((element) => [element.title, element])).values()];

    console.log(filteredAlbums);

    localStorage.setItem("albums", JSON.stringify(filteredAlbums));
    localStorage.setItem("dataObj", JSON.stringify(responseObj.data));

    // console.log(album);
  } catch (error) {
    console.log("errore nella ricerca artista", error);
  }
};

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  searchArtist();

  const backBtn = document.getElementById("go-back");
  backBtn.addEventListener("click", () => {
    history.back();
  });

  const forwardBtn = document.getElementById("go-forward");
  forwardBtn.addEventListener("click", () => {
    history.forward();
  });
});
