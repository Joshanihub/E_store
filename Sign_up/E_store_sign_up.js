// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC8ZJIrmu_JD3O-gEk7ke4fXTJFGj_xzyo",
    authDomain: "aj-streetwear.firebaseapp.com",
    projectId: "aj-streetwear",
    storageBucket: "aj-streetwear.firebasestorage.app",
    messagingSenderId: "1028528480949",
    appId: "1:1028528480949:web:579776b57baa31f75814fc",
    measurementId: "G-87KPQDTLRG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);




const submit = document.getElementById("submit");


submit.addEventListener("click", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
            const auth = getAuth();
                        createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Signed up 
                            const user = userCredential.user;
                            alert("Creating Account...")
                            window.location.href = "/Products/E_store_product.html";
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert(errorMessage)
                            // ..
                        });


            // email.value = "";
            // password.value = "";
    
});




