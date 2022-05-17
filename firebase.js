
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN2CPK9FpYKkVLy1CNM-YSYVu93x6fa5Q",
  authDomain: "ninja-db-20c70.firebaseapp.com",
  projectId: "ninja-db-20c70",
  storageBucket: "ninja-db-20c70.appspot.com",
  messagingSenderId: "318222695629",
  appId: "1:318222695629:web:a0ef3af3ceb3f40b97bd84",
  measurementId: "G-GFS9796FNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//script secitons
const LIST = document.querySelector('ul');

const addRecipe = (recipe) => {
  console.log(recipe);
  let time = recipe.created_at.toDate();

  let html =
    `
  <li>
    <div>${recipe.title}</div>
    <div>${time}</div>
  </li>
  `;

  LIST.innerHTML += html;
};

//end Script sections

//init services
const db = getFirestore();
//collection ref
const colRef = collection(db, 'recipes');
//end initialize
getDocs(colRef)
  .then(snapshot => {
    snapshot.docs.forEach(

      doc => addRecipe(doc.data())
    );
    // snapshot.docs[0].data()
  })
  .catch(err => console.log(err));

const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', e => {
  e.preventDefault();

  const input = inputForm.recipe.value;

  const values = {
    title: input,
    created_at: Timestamp.fromDate(new Date())

  };
  addDoc(colRef, values)
    .then(_ => console.log("Value Added"))
    .catch(err => console.log("Add Error"));
});


