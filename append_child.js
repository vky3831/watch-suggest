
ele = document.getElementById("list4");

li = document.createElement('li');

li.classList.add("list-group-item");

li.innerHTML = `<p><span class="badge badge-primary">#10</span><a data-toggle="modal" data-target="#Modal" class="pointerCursor" id="WIBLA2011" onclick="getModalData(event)"> World Invasion: Battle Los Angeles </a><span class="badge badge-warning" style="float: right;">5.7</span></p><small> 2011 Action/Sci-fi 1h 56m </small><span class="badge badge-success" style="float: right;">80% &#x1F44D;</span>`

ele.appendChild(li);




