const button= document.getElementById("btn");
const colors= document.querySelector(".color");
const mycolorlist= ["green", "red", "rgba(133,122,200)", "#f15025"]
button.addEventListener("click",function() {
    const myrandom= generateRandom()
    console.log(myrandom)
    document.body.style.backgroundColor = mycolorlist[myrandom];
    colors.textContent= mycolorlist[myrandom];
})

function generateRandom() {
    return Math.floor(Math.random() * mycolorlist.length);
}

