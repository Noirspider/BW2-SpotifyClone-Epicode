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
			}
		}
	} catch (error) {}
};
