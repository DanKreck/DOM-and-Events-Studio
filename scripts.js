// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    
    const takeoffButton = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus"); 
    const background = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    
    let currentHeight = Number(shuttleHeight.innerHTML);
    let rocketNode = this.document.getElementById("rocket");

    takeoffButton.addEventListener('click', event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){
            status.innerHTML = "Shuttle in flight.";
            background.style.backgroundColor = "blue";
            // Get current value and update it. 
            currentHeight += 10000; 
            shuttleHeight.innerHTML = currentHeight; 
            let currentImgHeight = parseInt(rocketNode.style.bottom);
            rocketNode.style.bottom = (currentImgHeight + 10) + "px";
        }
    });

    landButton.addEventListener('click', event => {
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        
        shuttleHeight.innerHTML = 0;
        rocketNode.style.bottom = "0px";



    });

    abortButton.addEventListener('click', event => {
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0"; 

    });

});