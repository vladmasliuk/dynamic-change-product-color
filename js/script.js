//  change product color
// get img target
const overlay = document.getElementById("product-target");
// Click on a color
var el = document.getElementsByClassName("prod-color-btn");
for (var i = 0; i < el.length; i++) {
    el[i].onclick = changeColor;
}

function changeColor(e) {
    // get color
    let hex = e.target.getAttribute("data-hex");
    // set color
    overlay.style.fill = hex;
}

// show / hide product configuration
// click on "configure" btn
$("#make-conf-btn").click(function(){
    $("#single-product-info").fadeOut(1);
    $("#single-product-conf").fadeIn();
});

// click on color prev in prod page
$("#make-conf-color-prev").click(function(){ 
    $("#single-product-info").fadeOut(1);
    $("#single-product-conf").fadeIn();
});

// click on "confirm" btn
$("#prod-conf-exit").click(function(){
    $("#single-product-conf").fadeOut(1);
    $("#single-product-info").fadeIn();
});

// on choose color
$(".prod-color-btn").click(function() {
    $(".prod-color-title").text($(this).attr('name'));
    $(".prod-color-prev").css("background-color", $(this).attr('data-hex'));
});