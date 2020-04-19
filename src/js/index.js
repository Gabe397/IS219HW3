(function () {

    let cities = [
        { fldName: "Tokyo", fldLat: 35.685, fldLong: 139.7514,fldCountry:'Japan',fldAbbreviation:'JPN',fldCapitalStatus:'Primary',fldPopulation:3567000 },
        { fldName: "New York City", fldLat: 40.6943, fldLong: -73.9249,fldCountry:'USA',fldAbbreviation:'USA',fldCapitalStatus:'Primary',fldPopulation:19354922},
        { fldName: "Mumbai", fldLat: 19.017, fldLong: -99.131,fldCountry:'India',fldAbbreviation:'IND',fldCapitalStatus:'Admin',fldPopulation:18978000},
        { fldName: "Sao Paolo", fldLat: -23.5587, fldLong: 72.857,fldCountry:'Brazil',fldAbbreviation:'BRA',fldCapitalStatus:'Primary',fldPopulation:18845000}
    ];

    let table = document.querySelector("table");
    let TableHeadings = Object.keys(cities[0]);
    table.classList.add("table")
    generateTableHead(table, TableHeadings);
    generateTable(table, cities);

})();

function generateTableHead(table, TableHeadings) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let heading of TableHeadings) {
        let th = document.createElement("th");
        let text = document.createTextNode(heading);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

