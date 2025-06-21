// function hello() {
//     console.log("Hello");
// }

// hello()
let username;

document.getElementById("submit").onclick = () => {
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}