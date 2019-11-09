/*  from data.js : the data is the data. 
-------- var tableData = d3.select(data) 
*/

var tableData = fooData; 
console.log(fooData); 

/* refers it to the html code */ 
/* var tableBody = d3.select("tbody");  */
// INSERT CODE HERE! 

function readData(fooData) {
    tableBody.html(""); 
        fooData.forEach((obs) => {
        var tableRows = tableBody.append("tr"); 
        for (var i = 0; i < obs.length; i++) {
        row.append("td").text(obs.datetime); 
        row.append("td").text(obs.city); 
        row.append("td").text(obs.state); 
        row.append("td").text(obs.country); 
        row.append("td").text(obs.shape); 
        row.append("td").text(obs.durationMinutes); 
        row.append("td").text(obs.comments); 
        }
        )
    } }

readData();

/*
tableData.forEach(data => console.log(`${"obs.datetime"}, ${"obs.city"}, ${obs.state}, ${obs.country}, ${obs.shape}, ${obs.durationMinutes}`)); 
*/
resetButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    readData();
});

var dateQueryData = d3.select("#datetime"); 
var stateQueryData = d3.select("#state"); 
var shapeQueryData = d3.select("#shape"); 

var dateQueryButton = d3.select("dateQuery"); 
var stateQueryButton = d3.select("stateQuery"); 
var shapeQueryButton = d3.select("shapeQuery"); 


dateQueryButton.on("click", =>{
    var targetDate = dateQueryData.property("when");
    console.log(targetDate);
});
fooData.filter(fooData => fooData.date == targetDate).forEach(obs => {
    var row = tableBody.append("tr"); 
        row.append("td").text(obs.datetime);
        row.append("td").text(obs.city);
        row.append("td").text(obs.state);
        row.append("td").text(obs.country);
        row.append("td").text(obs.shape);
        row.append("td").text(obs.durationMinutes);
        row.append("td").text(obs.comments);
}); 
/*  something to force it to execute here? */

dateQueryButton.on("click", =>{
    var targetState = stateQueryData.property("where");
    console.log(targetState);
});
fooData.filter(fooData => fooData.state == targetState).forEach(obs => {
    var row = tableBody.append("tr"); 
        row.append("td").text(obs.datetime);
        row.append("td").text(obs.city);
        row.append("td").text(obs.state);
        row.append("td").text(obs.country);
        row.append("td").text(obs.shape);
        row.append("td").text(obs.durationMinutes);
        row.append("td").text(obs.comments);
}); 
/*  something to force it to execute here? */


dateQueryButton.on("click", =>{
    var targetShape = shapeQueryData.property("what");
    console.log(targetShape);
});
fooData.filter(fooData => fooData.shape == targetShape).forEach(obs => {
    var row = tableBody.append("tr"); 
        row.append("td").text(obs.datetime);
        row.append("td").text(obs.city);
        row.append("td").text(obs.state);
        row.append("td").text(obs.country);
        row.append("td").text(obs.shape);
        row.append("td").text(obs.durationMinutes);
        row.append("td").text(obs.comments);
}); 
/*  something to force it to execute here? */

/*  It doesn't work.  But it does a whole lot of not-working in a reasonably structured way. */ 

