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

document.getElementById("handleADD").addEventListener("click",(event)=>{
    const inputValue = document.getElementById("search-box").value;

    const container = document.getElementById("comment_container");2

    const p = document.createElement("p");
    p.innerText = inputValue;

    container.appendChild(p);

    document.getElementById("search-box").value = "";

});

// const handleSearch = (event) => {
//     console.log("hello BOxx")
// }