/* Dynamically pull dropdown options from Jason*/
$.each(mydata, function (i, p) {
$('.country-dropdown').append($('<option></option>').val(p.town).html(p.town));
});

/* Dynamically pull table based on the current dropdown values*/
const btn = document.getElementById('search-button');
const myText = document.getElementById('res');

function myFunction() {
    const from = document.getElementById("select-wrapper").value;
    const to = document.getElementById("select-wrapper-2").value;
    var col1, col2 = null;

    /* Filter for json-object from */
    var col1 = mydata.filter(function(obj, index){
        return obj.town===from;
    })
    /*myText.innerHTML = col1[0].town;*/

    /* Filter for json-object to */
    var col2 = mydata.filter(function(obj, index){
        return obj.town===to;
    })

    /* alarm when from or to is missing*/
    if (from == "Choose starting point" || to == "Choose your destination" || from == to) {
        alert("You must choose a starting point and your destination.");
    }
    else {
        var inlink1 = null
        var inlink2 = null
        if (col1[0].https == "y") {
            inlink1 = '<a href=https://' + col1[0].Links + ' target="_blank">More Information</a> ' 
                    + '</td><td>' 
        } else {
            inlink1 = '<a href=http://' + col1[0].Links + ' target="_blank">More Information</a> ' 
                    + '</td><td>' 
                    }

        if (col2[0].https == "y") {
            inlink2 = '<a href=https://' + col2[0].Links + ' target="_blank">More Information</a> ' 
        } else {
            inlink2 = '<a href=http://' + col2[0].Links + ' target="_blank">More Information</a> ' 
            }

        items_table.innerHTML = null;
        items_table = document.getElementById('items_table');
        items_table.innerHTML+= '<tr><th>' + " Departure:" + '</th><th>' + "From: " +col1[0].town  + 
            '</th><th>'+ "Arrival:" +'</th><th>' +"To: "+ col2[0].town +'</th></tr>'+

            '<tr><td>' + "Departure Regulations" + '</td><td>' 
                + col1[0].Departure + '</td><td>' + "Entry Regulations" +'</td><td>'+ col2[0].Entry + '</td></tr>' +

            '<tr><td>' + "Hygiene Regulations" + '</td><td>' 
                + col1[0].HygieneDep + '</td><td>'+ "Hygiene Regulations" +'</td><td>'+ col2[0].Hygiene + '</td></tr>' +

            '<tr><td>' + "Other" + '</td><td>' 
                + col1[0].Other + '</td><td>'+ "Activity Regulations" +'</td><td>'+ col2[0].Activity + '</td></tr>' +

            '<tr><td>'+ "Further Links" + '</td><td>'
                + inlink1 + "Further Links" +'</td><td>'+ inlink2 + '</td></tr>' +

            '<tr><td>' + "Last Updated:" + '</td><td>' 
                + col1[0].Dates + '</td><td>' + "Last Updated:"+'</td><td>' + col2[0].Dates + '</td></tr>';
        }
}
