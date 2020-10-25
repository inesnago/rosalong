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


