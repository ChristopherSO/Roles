(function() {

	var app = angular.module('rol', ['rol-members', 'dndLists']);

	app.controller('MainController', function(Member, $scope) {

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


		$scope.data = {
			selected: null,
			templates: [
				{type: "item", id: 2},
				{type: "container", id: 1, columns: [[], []]}
			],
			dropzones: {
				"Directores": [
					{
						"type": "item",
						"name": "Hellen"
					},
					{
						"type": "item",
						"name": "Segura"
					},
					{
						"type": "item",
						"name": "Raúl"
					}
				],
				"Músicos": [
					{
						"type": "item",
						"name": "Christopher"
					},
					{
						"type": "item",
						"name": "Tony"
					},
					{
						"type": "item",
						"name": "Cristian"
					},
					{
						"type": "item",
						"name": "Carlos"
					}
				],
				"Coristas": [
					{
						"type": "item",
						"name": "Georgina"
					},
					{
						"type": "item",
						"name": "Michelle"
					},
					{
						"type": "item",
						"name": "David"
					},
					{
						"type": "item",
						"name": "Analive"
					},
					{
						"type": "item",
						"name": "Ester"
					},
					{
						"type": "item",
						"name": "Lissette"
					}
				],
				"Sonidistas": [
					{
						"type": "item",
						"name": "Jerry"
					}
				]
			}
		};

		$scope.$watch('models.dropzones', function(model) {
			$scope.modelAsJson = angular.toJson(model, true);
		}, true);

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


