
// from data.js
console.log(data);
var table = d3.select("#ufo-table"); 

var tableBody = table.select("tbody");
var resetButton = d3.select("#reset-btn"); 


//=> this is creaing a function
//ecety item in fighters we are looping through, 
function createDefault(){
    data.forEach(obs => {
        var row = tableBody.append("tr"); cd ku

        row.append("td").text(obs.datetime);
        row.append("td").text(obs.city);
        row.append("td").text(obs.state);
        row.append("td").text(obs.country);
        row.append("td").text(obs.shape);
        row.append("td").text(obs.durationMinutes);
        row.append("td").text(obs.comments);
})
}
createDefault();

resetButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
});

var dateSearchField = d3.select("#datetime");
var stateSearchField = d3.select("#state");
var dateSearchButton = d3.select("#filter-btn");

("#fooTable").tabulator("setData", "/dokumenti");


$("#fooTable").tabulator();
$("#fooTable").tabulator("setData", fooData);
$("#fooTable").tabulator({
    columns:[
      {title:"Date-Time", field:"datetime", sortable:true, width: 40},
      {title:"City", field:"city", sortable:true, width: 40},
      {title:"State", field:"state", sortable:true, width: 10},
      {title:"Country", field:"country", sortable:true, width: 20},
      {title:"UFO Shape", field:"shape", width: 40},
      {title:"t-minutes", field:"durationMinutes", width: 20},
      {title:"Comments", field:"comments", width: 200},
    ],
  });

  $("#fooData").tabulator({});

dateQueryButton.on("click", () => {
//implements a value for date to search for on what is in the field. 
    var dateQuery = dateQueryData.property("value");
    console.log(dateQuery);

    
    tableBody.remove();
    tableBody = table.append("tbody");
    //dateToSearchFor = dateToSearchFor.replaceAll("\\s","");
    //this gets rid of annoying spaces after, not working. 


    // filtering the data so each date time is just equal to what we're putting in. 
    data.filter(f => f.datetime == dateToSearchFor)
        //.filter(f => f.state == stateToSearchFor)
        .forEach(sighting => {
            var row = tableBody.append("tr");

            row.append("td").text(sighting.datetime);
            row.append("td").text(sighting.city);
            row.append("td").text(sighting.state);
            row.append("td").text(sighting.country);
            row.append("td").text(sighting.shape);
            row.append("td").text(sighting.durationMinutes);
            row.append("td").text(sighting.comments);
        })
        });


