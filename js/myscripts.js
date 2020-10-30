$(document).ready(function(){
    $("#boards").click(function(){
        $("#boards-main").fadeToggle("fast")
    })

    $(".menu").mouseenter(function(){
        $(this).addClass("dark")
    });

    $(".menu").mouseleave(function(){
        $(this).removeClass("dark")
    });

    $(".col-p").mouseenter(function(){
        $(this).addClass("bolder")
    })

    $(".col-p").mouseleave(function(){
        $(this).removeClass("bolder")
    })

    $(".pre-order-btn").mouseenter(function(){
        $(this).addClass("hover")
    })

    $(".pre-order-btn").mouseleave(function(){
        $(this).removeClass("hover")
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

var btn2 = document.getElementById("my-modal-btn-2")
var modal2 = document.getElementById("my-commerce-2")
var close2 = document.getElementById("close-button-2")

btn2.onclick = function(){
    modal2.style.display = "block"
};

close2.onclick = function(){
    modal2.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal2){
        modal2.style.display = "none"
    }
};


var btn3 = document.getElementById("my-modal-btn-3")
var modal3 = document.getElementById("my-commerce-3")
var close3 = document.getElementById("close-button-3")

btn3.onclick = function(){
    modal3.style.display = "block"
};

close3.onclick = function(){
    modal3.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal3){
        modal3.style.display = "none"
    }
};

var btn4 = document.getElementById("my-modal-btn-4")
var modal4 = document.getElementById("my-commerce-4")
var close4 = document.getElementById("close-button-4")

btn4.onclick = function(){
    modal4.style.display = "block"
};

close4.onclick = function(){
    modal4.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal4){
        modal4.style.display = "none"
    }
};

var btn5 = document.getElementById("my-modal-btn-5")
var modal5 = document.getElementById("my-commerce-5")
var close5 = document.getElementById("close-button-5")

btn5.onclick = function(){
    modal5.style.display = "block"
};

close5.onclick = function(){
    modal5.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal5){
        modal5.style.display = "none"
    }
};

var btn6 = document.getElementById("my-modal-btn-6")
var modal6 = document.getElementById("my-commerce-6")
var close6 = document.getElementById("close-button-6")

btn6.onclick = function(){
    modal6.style.display = "block"
};

close6.onclick = function(){
    modal6.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal6){
        modal6.style.display = "none"
    }
};

var btn7 = document.getElementById("my-modal-btn-7")
var modal7 = document.getElementById("my-commerce-7")
var close7 = document.getElementById("close-button-7")

btn7.onclick = function(){
    modal7.style.display = "block"
};

close7.onclick = function(){
    modal7.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal7){
        modal7.style.display = "none"
    }
};

var btn8 = document.getElementById("my-modal-btn-8")
var modal8 = document.getElementById("my-commerce-8")
var close8 = document.getElementById("close-button-8")

btn8.onclick = function(){
    modal8.style.display = "block"
};

close8.onclick = function(){
    modal8.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal8){
        modal8.style.display = "none"
    }
};

var btn9 = document.getElementById("my-modal-btn-9")
var modal9 = document.getElementById("my-commerce-9")
var close9 = document.getElementById("close-button-9")

btn9.onclick = function(){
    modal9.style.display = "block"
};

close9.onclick = function(){
    modal9.style.display = "none"
};

window.onclick = function(event){
    if (event.target == modal9){
        modal9.style.display = "none"
    }
};