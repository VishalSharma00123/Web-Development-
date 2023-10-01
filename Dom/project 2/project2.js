// accessing open button whose text is Where's Our Model
let openbtn = document.getElementById('open-btn');
// accessing close button whose text is x
let closebtn = document.getElementById('close-btn');
// accessing modal whose text Here I am x
let modal = document.getElementById('modal-container');
console.log(modal);
// Event Listeners
openbtn.addEventListener('click', function (e) {
    // when i press openbtn then a pop up message appears (Here I am x)
    modal.style.cssText = 'display:block;'
    console.log(e.target);

})
// adding Event event listener to closebtn
closebtn.addEventListener('click', function (e) {
    // when we press on the closebtn the text( Here I am x) wont be display
    modal.style.cssText = 'display:none'
    console.log(e.target);
})
// adding Event Listener to the window 
window.addEventListener('click', function (e) {
    console.log(e.target);
    // when i press anywhere the window then the text (Here I am x)
    if (e.target === modal) {
        // e.target=<body>..</body>
        //modal=<div id=modal-container>...</div>
        // it display matched if modal(<div>) is in inside the e.target(<body>) and if it matches then the text (Here I am x)will be disspear
        // modal
        console.log("matched");
        modal.style.cssText = 'display:none'
    }
})