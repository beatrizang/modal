let overlay = document.getElementById('overlay');

document.getElementById('close-btn').addEventListener('click', () =>{
    overlay.style.display = "none";
});

document.getElementById("modal-btn").addEventListener('click', ()=>{
    overlay.style.display = "flex";
})