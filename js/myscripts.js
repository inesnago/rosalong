$(document).ready(function(){
    $("#boards").click(function(){
        $("#boards-main").fadeToggle("fast")
    })
});



var btn = document.getElementById("my-modal-btn-1")
var modal = document.getElementById("my-commerce")
var close = document.getElementById("close-button-1")

btn.onclick = function(){
    modal.style.display = "block"
};

close.onclick = function(){
    modal.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
};