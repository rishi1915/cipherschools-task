


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDRO5M1MJoXOQVyyHDjGudPP6S7k_sOQgc",
    authDomain: "newreg-da4c4.firebaseapp.com",
    databaseURL: "https://newreg-da4c4.firebaseio.com",
    projectId: "newreg-da4c4",
    storageBucket: "newreg-da4c4.appspot.com",
    messagingSenderId: "130127419215",
   // appId: "1:557252320398:web:0e6192000d20342b9d7ddf",
    //measurementId: "G-QZ0KS5XWSP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





        const auth = firebase.auth();
        
        
        function signUp(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");
        }
        
        
        
        function signIn(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            
            
            
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                document.getElementById("user_div").style.display = "block";
                document.getElementById("login_div").style.display = "none";
                var user = firebase.auth().currentUser;

                if(user != null){
            
                  var email = user.email;
                  document.getElementById("user_para").innerHTML = "Welcome User : " + email;
            
                }
                
                //Take user to a different or home page
    
                //is signed in
                
            }else{
                
                alert("No Active User");
                document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

                //no user is signed in
            }
            
            
            
        });
        
    