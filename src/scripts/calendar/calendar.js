$(function (){
    // Wait for jQuery to be ready
    
    const studySessionList = [
        {"month": 0, "day": 13, "year": 2026, "type": "study"},
        {"month": 0, "day": 15, "year": 2026, "type": "study"},
        {"month": 0, "day": 16, "year": 2026, "type": "tutor"},
        {"month": 0, "day": 20, "year": 2026, "type": "study"},
        {"month": 0, "day": 22, "year": 2026, "type": "study"},
        {"month": 0, "day": 23, "year": 2026, "type": "tutor"},
        {"month": 0, "day": 27, "year": 2026, "type": "study"},
        {"month": 0, "day": 29, "year": 2026, "type": "study"},
        {"month": 0, "day": 30, "year": 2026, "type": "tutor"},
        {"month": 1, "day": 3, "year": 2026, "type": "study"},
        {"month": 1, "day": 5, "year": 2026, "type": "study"},
        {"month": 1, "day": 6, "year": 2026, "type": "tutor"},
        {"month": 1, "day": 10, "year": 2026, "type": "study"},
        {"month": 1, "day": 12, "year": 2026, "type": "study"},
        {"month": 1, "day": 13, "year": 2026, "type": "tutor"},
    ]

    const arrOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    // Set up intial agenda
    const currentDate = new Date();

    let calendarMonth = currentDate.getMonth();
    let calendarYear = currentDate.getFullYear();

    function updateAgenda(){
        $("#agenda-header").text(`Upcoming Events in ${arrOfMonths[calendarMonth]} ${calendarYear}`)
        $("#back-button").text(`< ${(calendarMonth == 0)? arrOfMonths[11] : arrOfMonths[calendarMonth - 1]} ${(calendarMonth == 0)? calendarYear - 1 : calendarYear}`)
        $("#forward-button").text(`${(calendarMonth == 11)? arrOfMonths[0] : arrOfMonths[calendarMonth + 1]} ${(calendarMonth == 11)? calendarYear + 1 : calendarYear} >`)

        if(calendarMonth == currentDate.getMonth() && calendarYear == currentDate.getFullYear()){
            $("#recenter-button").addClass("hidden");
        }
        else{
            $("#recenter-button").removeClass("hidden");
        }

        let agendaInnerHTML = "";

        for(i = 0; i < studySessionList.length; i++){
            let currSession = studySessionList[i];

            if(currSession.month == calendarMonth && currSession.year == calendarYear){
                let eventTypeHTML = "";

                if(currSession.type == "study"){
                    eventTypeHTML = `<h4 id="event-type" class="px-[0.5rem] py-[0.35rem] text-white bg-cyan-600 rounded-xl w-fit">Group Study Session</h4>`;
                }
                else{
                    eventTypeHTML = `<h4 id="event-type" class="px-[0.5rem] py-[0.35rem] text-white bg-emerald-600 rounded-xl w-fit">Live Tutoring Session</h4>`;
                }


                if(currSession.day == currentDate.getDate() && calendarMonth == currentDate.getMonth() && calendarYear == currentDate.getFullYear()){
                    //if the current event is taking place today
                    agendaInnerHTML += `
                    <div id="event" class="border-3 rounded-xl p-[0.35rem] px-[0.5rem] sm:p-[0.5rem] sm:px-[0.65rem] bg-slate-300 flex flex-col items-center h-fit">
                        <h4 id="today-text" class="text-center font-bold text-lg">Today</h4>
                        <h3 id="event-date" class="text-2xl md:text-3xl font-semibold">${arrOfMonths[calendarMonth]} ${currSession.day}, ${calendarYear}</h3>
                        <h4 id="event-time" class="mb-[0.45rem] md:mb-[0.65rem] md:text-lg">3:00PM to 5:00PM MST (UTC-7)</h4>
                        ${eventTypeHTML}
                    </div>`;
                }
                else if (currSession.day < currentDate.getDate() && calendarMonth == currentDate.getMonth() && calendarMonth == currentDate.getMonth()){
                    //the current event took place in the past
                    agendaInnerHTML += `
                    <div id="event" class="border-3 rounded-xl p-[0.35rem] px-[0.5rem] sm:p-[0.5rem] sm:px-[0.65rem] bg-gray-400 flex flex-col items-center h-fit">
                        <h3 id="event-date" class="text-2xl md:text-3xl font-semibold">${arrOfMonths[calendarMonth]} ${currSession.day}, ${calendarYear}</h3>
                        <h4 id="event-time" class="mb-[0.45rem] md:mb-[0.65rem] md:text-lg">3:00PM to 5:00PM MST (UTC-7)</h4>
                        ${eventTypeHTML}
                    </div>`;
                }
                else{
                    // the current event will take place in the future
                    agendaInnerHTML += `
                    <div id="event" class="border-3 rounded-xl p-[0.35rem] px-[0.5rem] sm:p-[0.5rem] sm:px-[0.65rem] bg-gray-300 flex flex-col items-center h-fit">
                        <h3 id="event-date" class="text-2xl md:text-3xl font-semibold">${arrOfMonths[calendarMonth]} ${currSession.day}, ${calendarYear}</h3>
                        <h4 id="event-time" class="mb-[0.45rem] md:mb-[0.65rem] md:text-lg">3:00PM to 5:00PM MST (UTC-7)</h4>
                        ${eventTypeHTML}
                    </div>`
                }
            }
        }

        if (agendaInnerHTML == ""){
            agendaInnerHTML = `<span class="font-semibold text-xl mt-[1.5rem]">No Events Planned for ${arrOfMonths[calendarMonth]} ${calendarYear}</span>`;
            
        } 

        $("#agenda").html(agendaInnerHTML);
    }

    updateAgenda()

    $("#back-button").on("click", function(){
        calendarMonth--;

        if(calendarMonth < 0){
            calendarMonth = 11;
            calendarYear--;
        }

        updateAgenda();
    })

    $("#forward-button").on("click", function(){
        calendarMonth++;

        if(calendarMonth > 11){
            calendarMonth = 0;
            calendarYear++;
        }

        updateAgenda();
    })

    $("#recenter-button").on("click", function(){
        calendarMonth = currentDate.getMonth();
        calendarYear = currentDate.getFullYear();

        updateAgenda();
    })
});