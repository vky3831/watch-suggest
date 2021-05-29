$( document ).ready( readyFn );


function readyFn(){
listArray.forEach(makeList);
}

function makeList(item, index) {
	collection = document.getElementById("collection");

	card = document.createElement('div');
	card.classList.add("card");

	card.innerHTML = `<div class="card-body" id="bookmark_${item}">
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
