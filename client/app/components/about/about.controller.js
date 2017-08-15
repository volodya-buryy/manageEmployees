class AboutController {
	constructor($stateParams) {
		console.log($stateParams)
		this.model = $stateParams.model;
		this.name = 'about';

		this.val = [
			{   "id": "id1",
				"name": "the name 1",
				"values": [
				{ "age": "One",  "population": 5 },
				{ "age": "Two", "population": 2 },
				{ "age": "Three", "population": 9 },
				{ "age": "Four", "population": 7 },
				{ "age": "Five", "population": 4 },
				{ "age": "Six", "population": 3  },
				{ "age": "Seven", "population": 9 }
				]
			}
		]
  }
}
AboutController.$inject = ['$stateParams']
export default AboutController;
