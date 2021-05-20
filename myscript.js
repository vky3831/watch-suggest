// DEVELOPER ZONE 1 STARTS
$( document ).ready( readyFn );
// DEVELOPER ZONE 1 ENDS


// SEE THREE STEPS TO ADD DATA
// (BEFORE ADDING DATA HERE CREATE NEW CARD ELEMENT AND ASSIGN ID TO THE LIST IN index.html)

// LIST DATA STARTS HERE
// STEP 1: ADD LIST "ID" IN THE ARRAY
// var listArray = ["list1","list2","list3","list4"];
var listArray = ["list4"];

var listData = {};

// STEP 2: ADD LIST ELEMENTS

//SEE SAMPLE HERE (DO NOT EDIT OR REMOVE SAMPLE DATA)
listData.list0 = {

	card_title : "title",
	card_text : "text"
	,

	// _0 : [rank, id, name, imdb_rating, genre, like%]
	_1 : ["#1", "id", "name", "imdb_rating", "genre", "like"],
	_2 : ["#2", "id", "name", "imdb_rating", "genre", "like"],
	_3 : ["#3", "id", "name", "imdb_rating", "genre", "like"],
	_4 : ["#4", "id", "name", "imdb_rating", "genre", "like"],
	_5 : ["#5", "id", "name", "imdb_rating", "genre", "like"],
	_6 : ["#6", "id", "name", "imdb_rating", "genre", "like"],
	_7 : ["#7", "id", "name", "imdb_rating", "genre", "like"],
	_8 : ["#8", "id", "name", "imdb_rating", "genre", "like"],
	_9 : ["#9", "id", "name", "imdb_rating", "genre", "like"],
	_10 :["#10","id", "name", "imdb_rating", "genre", "like"]
}


listData.list4 = {

	card_title : "Top 10 Hollywood Movies(PART 24)",
	card_text : "MOVIES BEYOND IMAGINATION SERIES",
	tube_link : "https://www.youtube.com/watch?v=iJNuaDtHmy0&t=0s",

	_0 : ["#1.1", "SA2001", "Spirited Away", "8.6", "2001 Family/Fantasy 2h 5m", "93"],
	_1 : ["#1.2", "YN2016", "Your Name", "8.4", "2016 Romance/Fantasy 1h 52m", "97"],
	_2 : ["#2", "GB2018", "Green Book", "8.2", "2018 Comedy/Drama 2h 10m", "93"],
	_3 : ["#3", "T2020", "Tenet", "7.4", "2020 Action/Thriller 2h 30m", "86"],
	_4 : ["#4", "AB1999", "American Beauty", "8.3", "1999 Romance/Drama 2h 2m", "89"],
	_5 : ["#5", "NC2005", "North Country", "7.3", "2005 Drama/Docudrama 2h 6m", "86"],
	_6 : ["#6", "FTKMF2017", "First They Killed My Father", "7.2", "2017 War/Drama 2h 16m", "91"],
	_7 : ["#7", "ADJ2019", "A Dog's Journey", "7.5", "2019 Adventure/Drama 1h 48m", "93"],
	_8 : ["#8", "C2020", "Call", "7.1", "2020 Thriller/Fantasy 1h 52m", "91"],
	_9 : ["#9", "DJ2013", "Don Jon", "6.5", "2013 Romance/Comedy 1h 30m", "82"],
	_10 : ["#10", "WIBLA2011", "World Invasion: Battle Los Angeles", "5.7", "2011 Action/Sci-fi 1h 56m", "80"]
}


// LIST DATA ENDS HERE


// DEVELOPER ZONE 2 STARTS

function readyFn(){
listArray.forEach(makeList);
// listArray.forEach(renderElements);

}

function makeList(item, index) {
	collection = document.getElementById("collection");

	card = document.createElement('div');
	card.classList.add("card");

	card.innerHTML = `<div class="card-body">
		      <h5 class="card-title">${listData[item].card_title}</h5>
		      <p class="card-text">${listData[item].card_text} <span class="badge badge-warning" style="float: right;">IMDb</span></p>
		    </div>
		    <ul class="list-group list-group-flush" id="${item}">
		    	
		    </ul>
		  	<div class="card-body">
    			<a target="_blank" href="${listData[item].tube_link}" class="card-link">Youtube video link</a>
  			</div>`

	collection.appendChild(card);
	renderElements(item);
}

function renderElements(item){
	list = document.getElementById(item);
	var i=0;
	for (const [key, value] of Object.entries(listData[item])) {
		if(i < 3) { i++; continue;}
  		elem = document.createElement('li');
  		elem.classList.add("list-group-item");
  		elem.innerHTML = `<p><span class="badge badge-primary">${value[0]}</span><a data-toggle="modal" data-target="#Modal" class="pointerCursor" id="${value[1]}" onclick="getModalData(event)"> ${value[2]} </a><span class="badge badge-warning" style="float: right;">${value[3]}</span></p><small> ${value[4]} </small><span class="badge badge-success" style="float: right;">${value[5]}% &#x1F44D;</span>`;
		list.appendChild(elem);
	}
}

// DEVELOPER ZONE 2 ENDS HERE


// MODAL DATA STARTS HERE
var modalData = {};

// STEP 3 ADD DATA REGARDING SPECIFIC MOVIE/SERIES HERE BY USING IT'S ID

// SEE SAMLPLE BELOW (DO NOT EDIT OR REMOVE SAMPLE)
modalData.SAMPLE_ID = {
	torrent: "",
	magnetURI: "",
	description: "",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.SA2001 = {
	torrent: "",
	magnetURI: "",
	description: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.YN2016 = {
	torrent: "",
	magnetURI: "",
	description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.GB2018 = {
	torrent: "",
	magnetURI: "",
	description: "Dr Don Shirley is a world-class African-American pianist, who is about to embark on a concert tour in the Deep South in 1962. In need of a driver and protection, Shirley recruits Tony Lip, a tough-talking bouncer from an Italian-American neighbourhood in the Bronx. Despite their differences, the two men soon develop an unexpected bond while confronting racism and danger in an era of segregation.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.T2020 = {
	torrent: "",
	magnetURI: "",
	description: "A secret agent is given a single word as his weapon and sent to prevent the onset of World War III. He must travel through time and bend the laws of nature in order to be successful in his mission.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.AB1999 = {
	torrent: "",
	magnetURI: "",
	description: "Lester's life seems perfect, having a respectable job and a family, but inside, he is slowly slipping into depression. Struggling with life, he gets infatuated with his daughter's friend, Angela.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.NC2005 = {
	torrent: "",
	magnetURI: "",
	description: "Josey Aimes flees from her husband after suffering a long period of abuse and tries to support her two children, Sammy and Karen. She starts working at a mine but her father expresses disapproval.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.FTKMF2017 = {
	torrent: "",
	magnetURI: "",
	description: "Loung Ung is 5 years old when the Khmer Rouge assumes power over Cambodia in 1975. They soon begin a four-year reign of terror and genocide in which nearly 2 million Cambodians die. Forced from her family's home in Phnom Penh, Ung is trained as a child soldier while her six siblings are sent to labor camps.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.ADJ2019 = {
	torrent: "",
	magnetURI: "",
	description: "Bailey is living the good life on the Michigan farm of his boy, Ethan and Ethan's wife Hannah. He even has a new playmate: Ethan and Hannah's baby granddaughter, CJ. The problem is that CJ's mom, Gloria, decides to take CJ away. As Bailey's soul prepares to leave this life for a new one, he makes a promise to Ethan to find CJ and protect her at any cost. Thus begins Bailey's adventure through many lives filled with love, friendship, and devotion.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.C2020 = {
	torrent: "",
	magnetURI: "",
	description: "Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.DJ2013 = {
	torrent: "",
	magnetURI: "",
	description: "New Jersey bartender Jon Martello (Joseph Gordon-Levitt) knows what's important: his friends, his family, his car, his church, his sexual conquests -- and porn. In fact, Jon is a porn addict and has never had a genuine relationship with a woman. However, when he meets Barbara (Scarlett Johansson) he has to change his operating methods, because Barbara won't be bedded easily. For the first time in his life, Jon begins a real courtship, but his obsession with erotica threatens to ruin everything.",
	watch: "",
	trailer: "",
	imdb: ""
}

modalData.WIBLA2011 = {
	description: "When once distant UFOs become a terrifying threat attacking Earth, a Marine staff sergeant and his team take it upon themselves to face the enemy and protect what remains of the planet.",
	torrent: "https://www.1377x.to/torrent/3314615/Battle-Los-Angeles-World-Invasion-2011-720p-H264-italian-english-Ac3-5-1-sub-ita-eng-MIRCrew/#",
	magnetURI: "magnet:?xt=urn:btih:8B593C598C86ED0622BAF848B598176EB2698516&dn=Battle+Los+Angeles+-+World+Invasion+%282011%29.720p.H264.italian.english.Ac3-5.1.sub.ita.eng-MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Finferno.demonoid.pw%3A3391%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F62.138.0.158%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce",	
	watch: "https://www.netflix.com/in/title/70138789",
	trailer: "https://www.youtube.com/watch?v=Yt7ofokzn04",
	imdb: "https://www.imdb.com/title/tt1217613/"
}


// MODAL DATA ENDS HERE


// DEVELOPER ZONE 3 STARTS
function getModalData(e){
	let id = e.target.id;
	let title = e.target.innerText;
	let description = modalData[id].description;
	let torrent = modalData[id].torrent;
	let magnetURI = modalData[id].magnetURI;
	let watch = modalData[id].watch;
	let trailer = modalData[id].trailer;
	let imdb = modalData[id].imdb;

	setTimeout(e => { 
		$("#modalLabel")[0].innerText = title;
		$("#modalBody")[0].innerText = description; 
		torrent == "" ? $("#torrent").addClass("disabled") : $("#torrent").attr("href", torrent).removeClass("disabled");
		magnetURI == "" ? $("#magneturi").addClass("disabled") : $("#magneturi").attr("href", magnetURI).removeClass("disabled");
		watch == "" ? $("#watch").addClass("disabled") : $("#watch").attr("href", watch).removeClass("disabled");
		trailer == "" ? $("#trailer").addClass("disabled") : $("#trailer").attr("href", trailer).removeClass("disabled");
		imdb == "" ? $("#imdb").addClass("disabled") : $("#imdb").attr("href", imdb).removeClass("disabled");

	}, 175);

}
// DEVELOPER ZONE 3 ENDS