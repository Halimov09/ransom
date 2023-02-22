const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const saqla = document.querySelectorAll(".saqla");
const dfl= document.querySelector(".defaul");
const nat = document.querySelector(".natija");
const h1 = document.querySelector("h1");

let rand = Math.random() * 9;

let rand1 = Math.ceil(rand);
let rand2 = Math.floor(rand);

function random() {
  if (rand1 != rand2) {
    console.log(rand1);
    console.log(rand2);
  } else {
    random();
  }
}
random();

span1.textContent = rand1;
span2.textContent = rand2;

let newran = Math.random() *3;
newran = Math.floor(newran)

saqla.forEach(item =>{
    item.addEventListener("click", ()=>{
        item.style.background = "red";
        item.style.color = "white";
    })
})

let sap = [saqla];
sap.forEach((item) =>{
    console.log(item[newran]);
    item[0].textContent = rand1 + rand1;
    item[1].textContent = rand1 - 1;
    item[2].textContent = rand2;
    item[3].textContent = rand2 - 1;
    item[newran].textContent = rand1 + rand2;

})

sap.forEach(ite =>{
    ite[newran].addEventListener("click", ()=>{
        ite[newran].style.background = "green";
        ite[newran].style.color = "white";
    })
})

dfl.addEventListener("click", ()=>{
    document.location.reload(true)
})


