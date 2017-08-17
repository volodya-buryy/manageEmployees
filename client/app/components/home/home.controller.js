class HomeController {
	constructor($state) {
		this.name = 'home';
		this.$state = $state;
		this.model = [
			{
				name: "John",
				age: "23",
				skill: "js",
				level: 3
			},
			{
				name: "Dou",
				age: "32",
				skill: "php",
				level: 2
			},
			{
				name: "John",
				age: "23",
				skill: "php",
				level: 2
			},
			{
				name: "Dou",
				age: "3",
				skill: "js",
				level: 2
			},
		];
	};

	removeItem(index) {
		this.model.splice(index, 1);
	}

	editItem(index){
		this.editEvent = true
		console.log(index);
	}
	save(index, key, item){
		let objKey = Object.keys(this.model[index])[key];
		this.model[index][objKey] = item;
	}

	findByText(findText){
		if(!findText) {
			this.$state.reload();
			return
		}

		let a = this.model.filter(item => {
			for(let key in item){
				let itemParse = item[key].toString()

				if(itemParse.indexOf(findText) == 0){
					return item
				}else{
					continue
				}
			}
		})

		this.model = a
		console.log(a);
	}
};
HomeController.$inject = ['$state']
export default HomeController;
