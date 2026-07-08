// const target = document.getElementsByClassName("title");
// const target = document.getElementById("title")

// target.style.color = "red";

// const allBox = document.getElementsByClassName("box");

// for(let i = 0; i<allBox.length; i++){
//     const element = allBox[i];
//     element.style.backgroundColor = "green";
//     if(element.innerText == "box-5"){
//         element.style.backgroundColor = "red"
//     }
// }

document.getElementById("handleADD").addEventListener("click", (event) => {
    const inputValue = document.getElementById("search-box").value;

    const container = document.getElementById("comment_container"); 2

    const p = document.createElement("p");
    p.classList.add("child")
    p.innerText = inputValue;

    container.appendChild(p);

    document.getElementById("search-box").value = "";

    const allComments = document.getElementsByClassName("child");
    for (const element of allComments) {
        element.addEventListener("click", (e) => {
            e.target.parentNode.removeChild(element);
        });
    }

});


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })




// const handleSearch = (event) => {
//     console.log("hello BOxx")
// }