window.onload = function istoric(){

var b = document.getElementById("buton_submit");
	b.onclick=function(){
		clickCounter();
	}
	
	var retrieved = localStorage.getItem("comentariu");
	var jobValue = JSON.parse(retrieved);
	var ar = Object.values(jobValue);

	for ( var i = 0; i < localStorage.getItem("clickcount"); i++ )
	{
		new_comment_box(ar[i]);
	}
}

function new_comment_box( a )
{

	var text = document.createElement("DIV");
	text.classList.add("form-control");
	var mes = document.createTextNode(a);
	text.appendChild(mes);
	document.getElementById("comment").appendChild(text);
}

function new_comment()
{


	var jobValue = document.getElementById("mesaj").value;

	if (typeof(Storage) !== "undefined") {
	 // Store
	 	var retrieved = localStorage.getItem("comentariu");
	 	var ar = JSON.parse(retrieved);
	 	ar.push(jobValue);
		localStorage.setItem("comentariu", JSON.stringify(ar));

	  // Retrieve
		document.getElementById("result").innerHTML = localStorage.getItem("comentariu");
	}
	else {
		document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}


function clickCounter() {
	var jobValue = document.getElementById("mesaj").value;
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
    	var nr = localStorage.clickcount;
    	localStorage.clickcount = Number(localStorage.clickcount)+1;
    	var retrieved = localStorage.getItem("comentariu");
	 	var a = JSON.parse(retrieved);
	 	var ar = Object.values(a);
	 	
	 	ar.push(jobValue);
	 	localStorage.setItem("comentariu", JSON.stringify(ar));
    } else {
      localStorage.clickcount = 1;
      var ar = [];
      ar.push(jobValue);
      localStorage.setItem("comentariu", JSON.stringify(ar));
    }
    //document.getElementById("comment").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("comment").innerHTML = "Sorry, your browser does not support web storage...";
  }
}