// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) =>  {
     return response.json()    
})
.then((data) => {
  //this is where we put our logic
  let pDiv = document.getElementById("pDiv");
  for (let i = 0; i < 10; i++) {    
    let pTag = document.createElement("p");
    pTag.innerHTML = `${i +1}. ${data[i].body}`;
    pDiv.appendChild(pTag);
    // console.log(pTag);
  }
})
.catch((error) => 
console.log(error)
);
}

// getComments();
// `${[i] = 1}: ${data[i].body}`;