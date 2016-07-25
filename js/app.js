(function() {

	var app = angular.module('rol', ['rol-members']);

	app.controller('MainController', function(Member) {

		this.members = [];

		// Initialize the member model objects
		for (var i=0; i<membersData.length; i++) {
			this.members.push(Member.build(membersData[i]));
		}
		console.log(Member.appearances);

		this.monthNames = monthNames;
		this.weeks = weeks;

		angular.element(document).ready(function () {
			
			var month = 4, // Julio (7-1)
				year = 2016;

			for (var d = new Date(year, month); d <= new Date(year, month+1, 0); d.setDate(d.getDate() + 1)) {
				if (d.getDay() == 6) { // If saturday
					var week = {};
					week.saturday = d.getDate();

					// Add one day to get sunday
					d.setDate(d.getDate() + 1);

					if (d.getMonth() == month) { // Check if still in the analized month
						week.sunday = d.getDate();
					}

					weeks.push(week);
				} else if (d.getDay() == 0) { // If first day of the month is sunday
					var week = {};
					week.sunday = d.getDate();

					weeks.push(week);
				}
			}
			console.log(weeks);
		});
	});

	var weeks = [];

	var monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

	var membersData = [
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
			name: "Jerry",
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


