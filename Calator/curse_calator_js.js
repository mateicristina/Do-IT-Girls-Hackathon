window.onload = function cursa_calator(){

	var nr_curse = 8;
	var nume =["Cristina Matei", "Irina Chitu", "Cristina Meliceanu", "Ioana Ciripan","Alina Popa","Andrei Matei","Ana Popescu", "Sara Popa"];
	var text = ["Universitatea Bucuresti","Universitatea Politehnica", "Universitatea Babes Bolyai","Universitatea Bucuresti","Universitatea Politehnica", "Universitatea Babes Bolyai","Univeristatea Politehnica"];
	for ( var i = 0; i < nr_curse; i++ )
	{
		create_obj(i, nume, text);
	}
	// var x = document.getElementById("email");
	// x.onclick=function(){
	// 	em();
	// }
	

}



function create_obj( i, nume, text )
{
	var new_col_div = document.createElement("DIV");
		var new_service_div = document.createElement("DIV");
			var new_icon_div = document.createElement("DIV");
				var new_i = document.createElement("I"); 
			var new_title = document.createElement("H3");
				var new_title_text = document.createTextNode(nume[i]);
			var new_buton = document.createElement("P");
			var new_description = document.createElement("P");
				var new_description_text = document.createTextNode(text[i])//"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum. baza de date");
	var buton = document.createElement("BUTTON");
	buton.innerHTML = "Alege Cursa";
	buton.onclick = function(){
		em();
		return false;
	};
	new_buton.appendChild(buton);
	new_description.appendChild(new_buton);

// 	var foo = function(){
//   var button = document.createElement('button');
//   button.innerHTML = 'click me';
//   button.onclick = function(){
//     alert('here be dragons');return false;
//   };
//   // where do we want to have the button to appear?
//   // you can append it to another element just by doing something like
//   // document.getElementById('foobutton').appendChild(button);
//   document.body.appendChild(button);
// };
	new_col_div.appendChild(new_service_div);
	new_service_div.appendChild(new_icon_div);
	new_icon_div.appendChild(new_i);
	new_service_div.appendChild(new_title);
	new_title.appendChild(new_title_text);
	new_service_div.appendChild(new_description);
	new_description.appendChild(new_description_text);

	new_col_div.classList.add("col-md-3");
	new_col_div.classList.add("col-sm-6");
	new_service_div.classList.add("serviceBox");
	// culoare diferita pt 
	new_i.classList.add("fa");
	if ( i % 4 == 0 )
	{
		new_service_div.classList.add("purple");
		new_i.classList.add("fa-globe-europe");
		// <i class="far fa-globe-europe"></i>
	}
	if ( i % 4 == 1 )
	{
		new_service_div.classList.add("blue");
		//new_i.classList.add("fa");
		new_i.classList.add("fa-map");
	}
	if ( i % 4 == 2 )
	{
		new_service_div.classList.add("green");
		//new_i.classList.add("fa");
		new_i.classList.add("fa-suitcase");
	}
	if( i % 4 == 3 )
	{
		//new_i.classList.add("fa");
		new_i.classList.add("fa-rocket");	
	}
	new_icon_div.classList.add("service-icon");
	
	
	new_title.classList.add("title");
	new_description.classList.add("description");

	document.getElementById("insert_curse").appendChild(new_col_div);

	new_title_text.onclick= function(){
		em();
	}
}

function em()
{
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "krisstinamatei@gmail.com",
    Password : "35474df0-11ea-4f4d-9938-60a876a43c47",
    To : 'cristina.matei0304@yahoo.com',
    From : "krisstinamatei@gmail.com",
    Subject : "This is the subject2",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

}
