  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD37ogYS0mxfKPHR0FC8H1cb2fS2sN15DA",
    authDomain: "tunic-70768.firebaseapp.com",
    projectId: "tunic-70768",
    storageBucket: "tunic-70768.appspot.com",
    messagingSenderId: "31343777746",
    appId: "1:31343777746:web:9289c9ad30d22165fbda0b",
    measurementId: "G-TG2Q240FDT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en'
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();

  const login = document.getElementById("login");
  login.addEventListener("click", function(event){
    event.preventDefault()
    

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Logging you in...")
    window.location.href = "logged-in.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })


  const googleLogin = document.getElementById("google");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    window.location.href = "logged-in.html";
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    
  })