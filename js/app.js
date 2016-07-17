(function() {

	var app = angular.module('rol', ['rol-members']);

	app.controller('MainController', function(Member) {

		this.monthNames = monthNames;
		this.members = members;
		this.weeks;

		this.hellen = new Member(
			"Hellen",
			true,
			false,
			true,
			true
		);
		console.log(this.hellen);

		this.chris = Member.build({
			name: "Christopher",
			isDirector: false,
			isMusician: true,
			isChorister: true,
			isSoundman: false
		});
		console.log(this.chris);
	});

	app.factory('Member', function () {

		//Constructor
		function Member(name, isDirector, isMusician, isChorister, isSoundman) {
			// Public properties, assigned to the instance ('this')
			this.name = name;
			this.isDirector = isDirector;
			this.isMusician = isMusician;
			this.isChorister = isChorister;
			this.isSoundman = isSoundman;
		}


		/**
		* Static method, assigned to class
		* Instance ('this') is not available in static context
		*/
		Member.build = function (data) {

			return new Member(
				data.name,
				data.isDirector,
				data.isMusician,
				data.isChorister,
				data.isSoundman
			);
		};


		/**
		* Return the constructor function
		*/
		return Member;
	});

	angular.element(document).ready(function () {
			
		var month = 6, // Julio (7-1)
			year = 2016;

		for (var d = new Date(year, month); d <= new Date(year, month, 0); d.setDate(d.getDate() + 1)) {
			if (d.getDay() == 0) {
				var week = [];
				var saturday = 
				week.push()
				weeks.push()
			}
		}

	});

	var weeks = [];

	var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

	var members = [
		{
			name: "Hellen",
			isDirector: true,
			isMusician: false,
			isChorister: true,
			isSoundman: false
		},
		{
			name: "Christopher",
			isDirector: false,
			isMusician: true,
			isChorister: true,
			isSoundman: false
		},
		{
			name: "Ariel",
			isDirector: false,
			isMusician: true,
			isChorister: true,
			isSoundman: false
		},
		{
			name: "Tony",
			isDirector: false,
			isMusician: true,
			isChorister: false,
			isSoundman: false
		},
		{
			name: "Georgina",
			isDirector: false,
			isMusician: false,
			isChorister: true,
			isSoundman: false
		},
		{
			name: "Ronald",
			isDirector: false,
			isMusician: false,
			isChorister: false,
			isSoundman: true
		}
	];



})();

function getMondays() {
    var d = new Date(),
        month = d.getMonth(),
        mondays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Mondays in the month
    while (d.getMonth() === month) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return mondays;
}

