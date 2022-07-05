const form = document.querySelector("form");
const card = document.getElementsByClassName("card");

form.addEventListener("input", (e) => {
    const search = document.getElementById("search").value.toLowerCase();
    console.log(search);
    let orgas = document.getElementsByClassName("acronym");
    console.log(orgas);
    for (i = 0; i < orgas.length; i++) {
        if (!orgas[i].innerHTML.toLowerCase().includes(search)){
            card[i].classList.add("hide");
        } else {
           card[i].classList.remove("hide");
        }
    }
    
  
})