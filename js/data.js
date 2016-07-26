/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("data").controller("DataController", function($scope) {

	$scope.data = {
		selected: null,
		templates: [
			{type: "item", id: 2},
			{type: "container", id: 1, columns: [[], []]}
		],
		dropzones: {
			"Directors": [
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
			"Musicians": [
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
			"Choristers": [
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
			"Musicians": [
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
			"Soundmans": [
				{
					"type": "item",
					"name": "Jerry"
				}
			],
			"A": [
				{
					"type": "container",
					"id": 1,
					"columns": [
						[
							{
								"type": "item",
								"name": "1"
							},
							{
								"type": "item",
								"name": "2"
							}
						],
						[
							{
								"type": "item",
								"name": "3"
							}
						]
					]
				},
				{
					"type": "item",
					"name": "4"
				},
				{
					"type": "item",
					"name": "5"
				},
				{
					"type": "item",
					"name": "6"
				}
			],
			"B": [
				{
					"type": "item",
					"name": 7
				},
				{
					"type": "item",
					"name": "8"
				},
				{
					"type": "container",
					"id": "2",
					"columns": [
						[
							{
								"type": "item",
								"name": "9"
							},
							{
								"type": "item",
								"name": "10"
							},
							{
								"type": "item",
								"name": "11"
							}
						],
						[
							{
								"type": "item",
								"name": "12"
							},
							{
								"type": "item",
								"name": "15"
							},
							{
								"type": "item",
								"name": "16"
							}
						]
					]
				},
				{
					"type": "item",
					"name": 16
				}
			]
		}
	};

	$scope.$watch('models.dropzones', function(model) {
		$scope.modelAsJson = angular.toJson(model, true);
	}, true);

});