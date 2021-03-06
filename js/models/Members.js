(function() {

var app = angular.module('rol-members', []);

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

		// Number of times the member appears in the rol
		Member.appearances = {};

		/**
		* Static method, assigned to class
		* Instance ('this') is not available in static context
		*/
		Member.build = function (data) {
			
			// Initialize member appearances
			Member.appearances[data.name] = 0;

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


})();