$(function (){
    // Wait for jQuery to be ready
    // $("#resources-dropdown").toggle();
    
    $("#go-to-lessons").on("click", function(){
        let clientRect = document.getElementById("lessons").getBoundingClientRect()
        let targetScrollY = clientRect.top + window.scrollY - 216;

        $('html, body').animate({
            scrollTop: targetScrollY
        }, 800);
    })

    $("#go-to-videos").on("click", function(){
        let clientRect = document.getElementById("videos").getBoundingClientRect()
        let targetScrollY = clientRect.top + window.scrollY - 216;

        $('html, body').animate({
            scrollTop: targetScrollY
        }, 800);
    })

    $("#go-to-activities-labs").on("click", function(){
        let clientRect = document.getElementById("activities-labs").getBoundingClientRect()
        let targetScrollY = clientRect.top + window.scrollY - 216;

        $('html, body').animate({
            scrollTop: targetScrollY
        }, 800);
    })

    $("#go-to-quizzes").on("click", function(){
        let clientRect = document.getElementById("quizzes").getBoundingClientRect()
        let targetScrollY = clientRect.top + window.scrollY - 216;

        $('html, body').animate({
            scrollTop: targetScrollY
        }, 800);
    })
});