// L'array di oggetti con i dati degli amici
const amici = [
  {
    nome: "Gianluca",
    immagine: "./assets/imgs/main/Pippo mafia.jpg",
    stato: "Scappati di casa",
    team: "Team 1",
    tempo: "Ora",
  },
  {
    nome: "Davide",
    immagine: "./assets/imgs/main/giacomino.jpg",
    stato: "Scappati di casa",
    team: "Team 1",
    tempo: "2 ore",
  },
  {
    nome: "Valerio",
    immagine: "./assets/imgs/main/giov.jpg",
    stato: "Scappati di casa",
    team: "Team 1",
    tempo: "6 ore",
  },
  {
    nome: "Jagsimran",
    immagine: "./assets/imgs/main/al.jpg",
    stato: "Scappati di casa",
    team: "Team 1",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
  {
    nome: "Pippo",
    immagine: "./assets/imgs/main/Pippo.jpg",
    stato: "La Cadrega",
    team: "Pdor",
    tempo: "4 giorni",
  },
];

// Otteniamo l'elemento del container degli amici
const friendContainer = document.getElementById("friend-container");

// Iteriamo sull'array e creiamo gli elementi HTML per gli amici
amici.forEach((amico) => {
  const friendDiv = document.createElement("div");
  friendDiv.className = "mt-3";

  const rowDiv = document.createElement("div");
  rowDiv.className = "row py-1 bg-dark-2-hover";

  const colImgDiv = document.createElement("div");
  colImgDiv.className = "col-3";

  const img = document.createElement("img");
  img.src = amico.immagine;
  img.alt = "foto-profilo";
  img.className = "rounded-circle w-100";

  const colInfoDiv = document.createElement("div");
  colInfoDiv.className = "col-7 p-0";

  const nomeP = document.createElement("p");
  nomeP.className = "fw-bold m-0";
  nomeP.textContent = amico.nome;

  const statoTeamP = document.createElement("p");
  const statoSpan = document.createElement("span");
  statoSpan.textContent = amico.stato;
  const teamSpan = document.createElement("span");
  teamSpan.textContent = amico.team;
  statoTeamP.appendChild(statoSpan);
  statoTeamP.appendChild(document.createTextNode(" - "));
  statoTeamP.appendChild(teamSpan);

  const colTempoDiv = document.createElement("div");
  colTempoDiv.className = "col-2 p-0";

  const tempoP = document.createElement("p");
  tempoP.textContent = amico.tempo;

  colImgDiv.appendChild(img);
  colInfoDiv.appendChild(nomeP);
  colInfoDiv.appendChild(statoTeamP);
  colTempoDiv.appendChild(tempoP);

  rowDiv.appendChild(colImgDiv);
  rowDiv.appendChild(colInfoDiv);
  rowDiv.appendChild(colTempoDiv);

  friendDiv.appendChild(rowDiv);
  friendContainer.appendChild(friendDiv);
});
