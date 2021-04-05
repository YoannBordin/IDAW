let dailyData = [];
let today = new Date().toISOString().slice(0, 10);
let apportToday = {
    date : today,
    calories : 0,
    water : 0,
    sugar : 0,
    salt : 0
}

$(document).ready(function(){
    console.log(today);

    loadData();
    drawTodayGraph();
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
        // set the dimensions and margins of the graph
    var margin = {top: 10, right: 40, bottom: 30, left: 30},
    width = 450 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var sVg = d3.select("#Area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    // translate this svg element to leave some margin.
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X scale and Axis
    var x = d3.scaleLinear()
    .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
    .range([0, width]);       // This is the corresponding value I want in Pixel
    sVg
    .append('g')
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    // Y scale and Axis
    y = d3.scaleBand()
    .domain(d3.range(dailyData.length))
    .rangeRound([margin.top, height - margin.bottom])
    .padding(0.1);

    sVg
    .append('g')
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

    
}