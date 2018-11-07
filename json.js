//code here gets called on window load


//DOM cannot be accessed when the window has not yet loaded
window.onload = function(){
	//hello();
    
    
    //Call the function JSObject()
    JSObject();
    //Call the function JSONObject()
    JSONObject();

	
}

//function needs to be called to work
function hello()
{
    alert("hello");
}

function JSObject()
{
    var car = {		year: 2012,
					make: "Chevy",
					model: "Traverse",
					vinNumber:  12345,
					numberOfDoors: 4,
					color: "Red",
					engineType: "V8",
                    fullname: function(){
                        return this.make+ " "+ this.model;
                    }
    };

    //#1 Access property
    console.log(car.make);
    
    //#2 Access property (like an array)
    console.log(car["vinNumber"]);

    //#3 alias
    var x = "year";
    console.log(car[x]);

    //#4 Access a method
    console.log(car.fullname());

    console.log(car);
    
    //Change a property
    car.color = "purple";
    console.log(car);

    //Add a property
    //car.miles = 0;
    //console.log(car);

    //Delete a property
    //delete car.miles;
    //console.log(car);

    //Change a property to a method
    //console.log(person.formatName);
    //person.formatName = function()
    //{
    //    return this.fname.toUpperCase()+" "+this.lname.toUpperCase();
    //}
    //console.log(person.formatName());
}


function JSONObject()
{		document.getElementById("next").addEventListener("click", nextCar);
    //JSON - Javascript Object Notation
    //Used for data exchange
    //"key":"value"
    //No functions allowed in the value part
    //No trailing commas

        var jsonCar = {  
            "year": "2012",
			"make": "Chevy",
			"model": "Traverse",
			"vinNumber":  "12345",
			"numberOfDoors": "4",
			"color": "Red",
			"engineType": "V8"
			}

			var arrayOfCars = {
			"cars": [
				{ "year": "2012",
				  "make": "Chevy",
				  "model": "Traverse",
				  "vinNumber":  "12345",
				  "numberOfDoors": "4",
				  "color": "Red",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }
				  },

				{"year": "2008",
				  "make": "Honda",
				  "model": "Civic",
				  "vinNumber":  "12346",
				  "numberOfDoors": "4",
				  "color": "Silver",
				  "engineType": "V8", 
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				{ "year": "2017",
				  "make": "Ford",
				  "model": "Fusion",
				  "vinNumber":  "12347",
				  "numberOfDoors": "4",
				  "color": "Black",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				{ "year": "2018",
				  "make": "KIA",
				  "model": "Soul",
				  "vinNumber":  "12348",
				  "numberOfDoors": "4",
				  "color": "Burgundy",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				  { "year": "2018",
				  "make": "Chevy",
				  "model": "Silverado",
				  "vinNumber":  "12349",
				  "numberOfDoors": "4",
				  "color": "White",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				  { "year": "2015",
				  "make": "Chevy",
				  "model": "Blazer",
				  "vinNumber":  "12350",
				  "numberOfDoors": "4",
				  "color": "Olive Green",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				  { "year": "2016",
				  "make": "Subaru",
				  "model": "Forrester",
				  "vinNumber":  "12351",
				  "numberOfDoors": "4",
				  "color": "Beige",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				  { "year": "2014",
				  "make": "Honda",
				  "model": "Accord",
				  "vinNumber":  "12352",
				  "numberOfDoors": "4",
				  "color": "Cream",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				  { "year": "2018",
				  "make": "Nissan",
				  "model": "Ultima",
				  "vinNumber":  "12353",
				  "numberOfDoors": "4",
				  "color": "Gold",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},

				  { "year": "2016",
				  "make": "Chevy",
				  "model": "Envoy",
				  "vinNumber":  "12354",
				  "numberOfDoors": "4",
				  "color": "Dark Purple",
				  "engineType": "V8",
				  "toString" : function () {
						return "Year:  " + this.year + "<br>" +
						"Make:  " + this.make + "<br>" +
						"Model: " + this.model + "<br>" +
						"VIN Number: " + this.vinNumber + "<br>" +
						"Number of Doors: " + this.numberOfDoors + "<br>" + 
						"Color: " + this.color + "<br>" + 
						"Engine Type: " + this.engineType + "<br>";
				  }},


    ]
    };

    //json object into a string
    var jsonCarAsString = JSON.stringify(jsonCar);
    console.log(jsonCarAsString);
    
    //json string into an object
    var jsonObj = JSON.parse(jsonCarAsString);
    console.log(jsonObj.year);
    console.log(jsonObj.make);
    console.log(jsonObj.model);

	
	var carToDisplay = 0;
	document.getElementById("car").innerHTML = arrayOfCars.cars[carToDisplay].toString();

	function nextCar() {
		carToDisplay += 1;
		if (carToDisplay < 9) {
			document.getElementById("car").innerHTML = arrayOfCars.cars[carToDisplay].toString();
		}
		else if (carToDisplay == 9) {
			document.getElementById("car").innerHTML = arrayOfCars.cars[carToDisplay].toString();
			document.getElementById("main").innerHTML += "No More Cars To Display."
			document.getElementById("next").removeEventListener("click", nextCar);

		}
	}
	
}

