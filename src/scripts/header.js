$(function (){
    // Wait for jQuery to be ready
    // $("#resources-dropdown").toggle();
    
    $("#resources-button").on("click", function(){
        $("#resources-dropdown").toggleClass("opacity-0");
        $("#dropdown-indicator").toggleClass("rotate-180");
    })
});