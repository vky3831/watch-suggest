

// MODAL DATA STARTS HERE
var data = {};

data.WIBLA2011 = {
	description: "When once distant UFOs become a terrifying threat attacking Earth, a Marine staff sergeant and his team take it upon themselves to face the enemy and protect what remains of the planet.",
	torrent: "https://www.1377x.to/torrent/3314615/Battle-Los-Angeles-World-Invasion-2011-720p-H264-italian-english-Ac3-5-1-sub-ita-eng-MIRCrew/#",
	magnetURI: "magnet:?xt=urn:btih:8B593C598C86ED0622BAF848B598176EB2698516&dn=Battle+Los+Angeles+-+World+Invasion+%282011%29.720p.H264.italian.english.Ac3-5.1.sub.ita.eng-MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Finferno.demonoid.pw%3A3391%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F62.138.0.158%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",	
	watch: "https://www.netflix.com/in/title/70138789",
	trailer: "https://www.youtube.com/watch?v=Yt7ofokzn04",
	imdb: "https://www.imdb.com/title/tt1217613/"
}

data.SAMPLE = {
	torrent: "",
	magnetURI: "",
	description: "",
	watch: "",
	trailer: "",
	imdb: ""
}
// MODAL DATA ENDS HERE


// DEVELOPER ZONE
function getModalData(e){
	let id = e.target.id;
	let title = e.target.innerText;
	let description = data[id].description;
	let torrent = data[id].torrent;
	let magnetURI = data[id].magnetURI;
	let watch = data[id].watch;
	let trailer = data[id].trailer;
	let imdb = data[id].imdb;

	setTimeout(e => { 
		$("#modalLabel")[0].innerText = title;
		$("#modalBody")[0].innerText = description; 
		$("#torrent").attr("href", torrent);
		$("#magneturi").attr("href", magnetURI);
		$("#watch").attr("href", watch);
		$("#trailer").attr("href", trailer);
		$("#imdb").attr("href", imdb);

	}, 175);

}