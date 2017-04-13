// document.getElementById("Email").innerHTML = Details.email;



// alert(localStorage.getItem("User_Email"));

$('#Email').html(localStorage.getItem("User_Email"));
$('#Name').html(localStorage.getItem("User_Name"));
$('#Img').attr("src",localStorage.getItem("User_Img"));

// alert(JSON.parse(localStorage.getItem("User_Details")));