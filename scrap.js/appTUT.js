// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableBody = d3.select("tbody");

function readData(myData){
    tableBody.html(""); 
    
    
    myData.forEach((incident) => {
        var tableRows = tableBody.append("tr");
        row.append("td").text(obs.datetime);
        row.append("td").text(obs.city);
        row.append("td").text(obs.state);
        row.append("td").text(obs.country);
        row.append("td").text(obs.shape);
        row.append("td").text(obs.durationMinutes);
        row.append("td").text(obs.comments);





    } 





} 


