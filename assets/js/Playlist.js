const playlist = [
  { nomePlaylist: "LA CADREGA" },
  { nomePlaylist: "4 uomini e un codice" },
  { nomePlaylist: "Sono il conte Dracula MIIIIII" },
  { nomePlaylist: "SFORZA OLE'" },
  { nomePlaylist: "Vado a cambiare due carte" },
  { nomePlaylist: "Fistalloni" },
  { nomePlaylist: "Il concetto di sedialità" },
  { nomePlaylist: "Quando è bella la mafia Johnnny" },
  { nomePlaylist: "Hai mai rischiato nella vita?" },
  { nomePlaylist: "una volta" },
  { nomePlaylist: "Ho messo 2 ad Inter-Cagliari" },
  { nomePlaylist: "SI PUò FAREEEEEE" },
  { nomePlaylist: "3 ragazzi con la chitarra ed una gamba sulla spalla" },
  { nomePlaylist: "Va come si sente una malboro a 3000 metri" },
  { nomePlaylist: "Piccolo Pippo senza cielo" },
  { nomePlaylist: "Meravigliosamente Pippo" },
  { nomePlaylist: "Another Pippo in the code" },
  { nomePlaylist: "The dark side of the Pippo" },
  { nomePlaylist: "Nel Pippo dipinto di blu" },
  { nomePlaylist: "Non posso ne scendere ne salire" },
  { nomePlaylist: "Vivo per Pippo" },
  { nomePlaylist: "Smells Like Pippo Spirit" },
  { nomePlaylist: "Pippo to Heaven" },
  { nomePlaylist: "Hotel Pippo" },
  { nomePlaylist: "Pippo e la cadrega" },
  { nomePlaylist: "il Pippo della Montagna" },
  { nomePlaylist: "Pippaggeddon" },
  { nomePlaylist: "Pippaggeddon" },
  { nomePlaylist: "Pippaggeddon" },
  { nomePlaylist: "Pippaggeddon" },
];

// Otteniamo l'elemento in cui inserire il nostro HTML
const container = document.getElementById("playlist-list");

// Iteriamo sull'array e creiamo gli elementi HTML
playlist.forEach((oggetto, indice) => {
  const divElement = document.createElement("div");
  divElement.className = "d-flex align-items-center mb-3 py-1 bg-dark-2-hover pointer";

  const innerDiv = document.createElement("div");
  innerDiv.className = "fs-8";

  const pElement = document.createElement("p");
  pElement.className = "m-0 fw-bold";
  pElement.textContent = oggetto.nomePlaylist;

  innerDiv.appendChild(pElement);
  divElement.appendChild(innerDiv);

  container.appendChild(divElement);
});
