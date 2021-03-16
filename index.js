// Your code he

let dodger = document.querySelector("#dodger")

dodger.style.backgroundColor = '#FF69B4'
dodger.style.position = 'absolute'

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        let leftNumbers = dodger.style.left.replace("px", "");
        console.log(leftNumbers)
      let left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 10}px`;
    }
});
  
document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowRight') {
        let rightNumbers = dodger.style.left.replace("px", "");
        let right = parseInt(rightNumbers, 10)
        dodger.style.left = `${right + 10}px`;
    }
})

document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowUp') {
        let bottomNumbers = dodger.style.bottom.replace("px", "");
        let bottom = parseInt(bottomNumbers, 10)
        dodger.style.bottom = `${bottom + 10}px`;
    }
})

document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowDown') {
        let bottomNumbers = dodger.style.bottom.replace("px", "");
        let bottom = parseInt(bottomNumbers, 10)
        dodger.style.bottom = `${bottom - 10}px`;
    }
})