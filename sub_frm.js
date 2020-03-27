function submit_form()
{
x=document.getElementById("ping_button");
x.innerHTML="Sending...";
x.disabled=true;
var database=firebase.database().ref('pings/'+Date.now()+""+Math.floor(Math.random()*1000000)).set({
	name :document.getElementById("ping_name").value,
	tel:document.getElementById("ping_tel").value,
	email:document.getElementById("ping_email").value,
	message:document.getElementById("ping_message").value
},function(error){if(error){
//This is triggered when Form is submitted incorrectly

	alert("Failed!!!");//At present, just displaying a failed message





//Upto this incorrect Form submission 

}else{

//This is triggered when Form is submitted Correctly



	document.getElementById("ping_section").style.display="none";// At present, just hiding the form div


//Upto this correct Form submission
}});

return false;
}
