let click = document.getElementById("click");
let header = document.getElementById("header");

click.addEventListener("click", () =>{
    if ( click.checked == true) {
        header.style.left = "0";
    } else {
        header.style.left = "-100%";
    }
})
