// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  tbody.html("");

  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  //look for html tag id of datetime, then hold the value into variable
	let date = d3.select("#datetime").property("value");
  //default variable for filteredData, starting with default
  let filteredData = tableData;
  //if date is entered, filter the default to show the user preference
  if (date) {
	filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
   // @NOTE: If no date was entered, then filteredData will
   // just be the original tableData.
   buildTable(filteredData);
};

//listen for the click event on the button, then run handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

//when page loads build the table
buildTable(tableData);
