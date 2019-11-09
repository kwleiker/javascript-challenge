/*  from data.js : the data is the data.  it was thus: 
-------- var tableData = d3.select(data) 
*/

var tableData = data; 
console.log(data); 

for (var i = 0; i < city.length; i++) {
    printName(city[i]); 
  }

/* refers it to the html code */ 
/* var tableBody = d3.select("tbody");  */
// INSERT CODE HERE! 

function readData(data) {
    tableBody.html(""); 


        data.forEach((obs) => {
        var tableRows = tableBody.append("tr"); 
        row.append("td").text(obs.datetime);
        row.append("td").text(obs.city);
        row.append("td").text(obs.state);
        row.append("td").text(obs.country);
        row.append("td").text(obs.shape);
        row.append("td").text(obs.durationMinutes);
        row.append("td").text(obs.comments);
        }
        )
    } 

    /*
tableData.forEach(data => console.log(`
${"obs.datetime"}, ${"obs.city"}, ${obs.state}, ${obs.country}, ${obs.shape}, ${obs.durationMinutes}`));

