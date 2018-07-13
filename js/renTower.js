var data = JSON.parse(dataTop);
document.getElementById("building-name").innerHTML = data.buildingName;
document.getElementById("building-address").innerHTML = data.buildingAddress;
var propertiesData = JSON.parse(propertiesData);
document.getElementById("property-type").innerHTML = propertiesData.propertyType[0];
document.getElementById("website").innerHTML = propertiesData.website;

//converting to number with commas as thousands separators
document.getElementById("total-building-area").innerHTML = propertiesData.totalBuildingArea.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("property-class").innerHTML = propertiesData.propertyClass[1];
document.getElementById("tenancy").innerHTML = propertiesData.tenancy;
document.getElementById("year-built").innerHTML = propertiesData.yearBuilt;
document.getElementById("no-of-tenant").innerHTML = propertiesData.noOfTenant;
document.getElementById("floors").innerHTML = propertiesData.floors;

//setting a description
var description = JSON.parse(description);
document.getElementById("description").innerHTML = description.description;


//adding availabilties in the table
var availabilitiesData = JSON.parse(availabilitiesDataTwo);

addRowsToAvailabiltyTable(availabilitiesData[0].unitNameAndNumber, availabilitiesData[0].recordType[0], availabilitiesData[0].availableArea.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " sf");
addRowsToAvailabiltyTable(availabilitiesData[1].unitNameAndNumber, availabilitiesData[1].recordType[1], availabilitiesData[1].availableArea.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " sf");
addRowsToAvailabiltyTable(availabilitiesData[2].unitNameAndNumber, availabilitiesData[2].recordType[1], availabilitiesData[2].availableArea.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " sf");
addRowsToAvailabiltyTable(availabilitiesData[3].unitNameAndNumber, availabilitiesData[3].recordType[1], availabilitiesData[3].availableArea.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " sf");


//counting a number of records in a table
document.getElementById("number-of-records").innerHTML = numberOfRecords().records;


//adds rows to availabilty table
function addRowsToAvailabiltyTable(cell1Content, cell2Content, cell3Content) {
	var table = document.getElementById("table-of-availabilities");
	var row = table.insertRow(numberOfRecords().number + 1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	cell1.innerHTML = cell1Content;
	cell2.innerHTML = cell2Content;
	cell3.innerHTML = cell3Content;

	cell1.setAttribute("border-bottom", "5px solid black");
	cell2.setAttribute("border-bottom", "5px solid black");
	cell3.setAttribute("border-bottom", "5px solid black");
}


//method for records' counting
function numberOfRecords() {
	var records = document.getElementById("table-of-availabilities").rows.length - 1;
	var number = records;	
	if(records > 1) {
		records += " records";
	} else {
		records += " record";
	}
	var result = {records: records, number: number};
	return result;
}



