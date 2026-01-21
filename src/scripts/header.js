$(function (){
    // Wait for jQuery to be ready
    
    $("#resources-button").on("click", function(){
        $("#resources-dropdown").toggleClass("opacity-0");
        $("#dropdown-indicator").toggleClass("rotate-180");
    })
});