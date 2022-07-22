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

    let upBtn = document.getElementById("up");
    let downBtn = document.getElementById("down");
    let leftBtn = document.getElementById("left");
    let rightBtn = document.getElementById("right");

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
        //Update shuttle 
        shuttleHeight.innerHTML = 0;
        rocketNode.style.bottom = "0px";
    });

    abortButton.addEventListener('click', event => {
        let response = window.alert("Confirm that you want to abort the mission.");
        status.innerHTML = "Mission aborted.";
        background.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketNode.style.bottom = "0px";

    });

    let currentImgPos = parseInt(rocketNode.style.left);
    let currentImgHeight = parseInt(rocketNode.style.bottom);
    
    function move(direction){ 
        switch (direction) {
            case "up":
                currentImgHeight = parseInt(rocketNode.style.bottom);
                rocketNode.style.bottom = (currentImgHeight + 10) + "px";
                break;
            case "down":
                currentImgHeight = parseInt(rocketNode.style.bottom);
                rocketNode.style.bottom = (currentImgHeight - 10) + "px";
                break;
            case "left": 
                currentImgPos = parseInt(rocketNode.style.left);
                rocketNode.style.left = (currentImgPos - 10) + "px";
                break;
            case "right":
                currentImgPos = parseInt(rocketNode.style.left);
                rocketNode.style.left = (currentImgPos + 10) + "px";
                break;
            }     
    }

    upBtn.addEventListener('click', event => {
        move("up");
    });
    downBtn.addEventListener('click', event => {
        move("down");
    });
    leftBtn.addEventListener('click', event => {
        move("left");
    });
    rightBtn.addEventListener('click', event => {
        move("right");
    });
    
            
    // rightBtn.addEventListener('click', event => {
    //     let currentImgPos = parseInt(rocketNode.style.left);
    //     rocketNode.style.left = (currentImgPos + 10) + "px";

    // });
});