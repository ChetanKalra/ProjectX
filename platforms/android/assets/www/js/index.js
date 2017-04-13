var localStorage = window.localStorage;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log("Device Ready");
    
    //     window.plugins.googleplus.trySilentLogin(
    //     {
    //       'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`. 
    //       'webClientId': '1029933643127-gortab6tn9stgdoti0hc71gk0ft4b62m.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required. 
    //       'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server 
    //     },
    //     function (obj) {
    //       alert(JSON.stringify(obj)); // do something useful instead of alerting 
    //     },
    //     function (msg) {
    //       alert('error: ' + msg);
    //     }
    // );

        document.getElementById('GoogleLogin').addEventListener('click', GoogleLogin, false);

        function GoogleLogin(){

        window.plugins.googleplus.login(
        {
          'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`. 
          'webClientId': '1029933643127-gortab6tn9stgdoti0hc71gk0ft4b62m.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required. 
          'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server 
        },

        Redirect_to_profile,

        function (msg) {
          alert('error: ' + msg);
        }
    );

        function Redirect_to_profile(obj) {
            
          User_Details = obj;
          //localStorage.setItem("User_Details",JSON.stringify(Details));


          localStorage.setItem("User_Email",User_Details.email);
          localStorage.setItem("User_Name",User_Details.givenName);
          localStorage.setItem("User_Img",User_Details.imageUrl);

          alert(JSON.stringify(obj)); // do something useful instead of alerting 
          //alert(JSON.stringify(Details.email));
          window.location = "links/Dashboard.html";
        }
    }

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

       


// window.plugins.googleplus.logout(
//     function (msg) {
//       alert(msg); // do something useful instead of alerting 
//     }
// );

// window.plugins.googleplus.disconnect(
//     function (msg) {
//       alert(msg); // do something useful instead of alerting 
//     }
// );

//Volume Up

// document.addEventListener("volumeupbutton", callbackFunction, false);

// function callbackFunction() {
//    alert('Volume Up Button is pressed!');
// }

//Back Button 

// document.addEventListener("backbutton", onBackKeyDown, false);

// function onBackKeyDown(e) {
//    e.preventDefault();
//    alert('Back Button is Pressed!');
// }


    // document.getElementById("SetLocalStorage").addEventListener("click", setItems, false);

    // function setItems(){
    //     localStorage.setItem("name","ProX");
    //     localStorage.setItem("developer","Chetan Kalra");
    // }

    // document.getElementById("ShowLocalStorage").addEventListener("click", showItems, false);


    // function showItems(){
    //     alert(localStorage.getItem("name")+
    //     localStorage.getItem("developer"));
    // }

//     document.addEventListener("batterystatus", onBatteryStatus, false);

//     function onBatteryStatus(info){
//         alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
//     }

//     document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture);

//     function cameraGetPicture() {
//    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
//       destinationType: Camera.DestinationType.DATA_URL,
//       sourceType: Camera.PictureSourceType.PHOTOLIBRARY
//    });

//    function onSuccess(imageURL) {
//       var image = document.getElementById('myImage');
//       image.src = imageURL;
//    }

//    function onFail(message) {
//       alert('Failed because: ' + message);
//    }

// }

// localStorage.clear();

// function setCredentials(){
//     // localStorage.setItem("Username","admin");
//     // localStorage.setItem("Password","admin");

//     var Users = [];
//     localStorage.setItem("Users",Users);
// }

// setCredentials();


// document.getElementById("Login").addEventListener("click",checkCredentials, false);

// function checkCredentials(){
//     
//     var Username = document.getElementById("Username").value;
//     var Password = document.getElementById("Password").value;

//     console.log(Username);
//     console.log(Password);

//     if(Username == localStorage.getItem("Username") && Password == localStorage.getItem("pass"))
//     {
//         window.location = "Dashboard.html";
//     }
//     else
//     {
//         console.log("Invalid Credentials");
//     }

// }


// document.getElementById("register").addEventListener("click",registeruser, false);
 
// function registeruser(){

//     if(localStorage.getItem("Users") == "")
//     {
//         var Users = [];
//     }
//     else
//     {
//         var Users = JSON.parse(localStorage.getItem("Users"));
//     }

//     var name = document.getElementById("name").value;
//     var contact = document.getElementById("no").value;
//     var username = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;

//     var User = { Name:name, contact: contact, username:username, password:pass };

//     Users.push(User);

//     console.log(Users);

   
//    localStorage.setItem("Users",JSON.stringify(Users));

// }

app.initialize();

