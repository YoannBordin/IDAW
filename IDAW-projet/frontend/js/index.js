let dailyData = [];
let today = new Date().toISOString().slice(0, 10);

let apportToday = {
    date : today,
    calories : 0,
    water : 0,
    sugar : 0,
    salt : 0
}

let vnr = {
    calories : 2000,
    water : 2500,
    sugar : 90,
    salt : 6
}

$(document).ready(function(){
    console.log(today);

    loadData();
});

function loadData() {
    $.ajax({
        type: "POST",
        url: "../backend/initAccueil.php",
        data: null,
        success: function (data) {
            console.log(data); // show response from the php script.
            let jsonData = JSON.parse(data);

            for (let i = 0; i < jsonData.length; i++) {
                let apportCurrent = {
                    date: jsonData[i][0],
                    calories: jsonData[i][1],
                    water: jsonData[i][2],
                    sugar: jsonData[i][3],
                    salt: jsonData[i][4]
                };

                dailyData.push(apportCurrent);
            }

            setApportToday();
            console.log(apportToday);
            
            drawTodayGraph();
        }
    });
}

function setApportToday(){
    let i = 0;
    while(i < dailyData.length && dailyData[i].date != today){
        i++;
    }

    if(i < dailyData.length){
        apportToday = dailyData[i];
    }
}

function drawTodayGraph(){
    let i = 1;
    Object.keys(apportToday).forEach(key => {
        if(key != "date"){
            console.log(key);
            let rapport = Math.round(apportToday[key] / vnr[key] * 100);
            console.log(rapport);

            $(`#entryAccueil${i}`).append(
                `<svg height="30"><g>
                        <rect width="${rapport/2}%" height="25" fill="lightblue"></rect>
                        <text x="${rapport}" y="12" dy="6">${rapport} %</text>
                </g></svg>`
            );

            i++;
        }
    });
}

