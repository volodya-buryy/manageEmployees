class HomeController {
	constructor($state) {
		this.name = 'home';
		this.$state = $state;
		this.model = [
			{
				name: "John Doe",
				age: "23",
				skill: "js",
				level: 3
			},
			{
				name: "John Doe",
				age: "32",
				skill: "php",
				level: 2
			},
			{
				name: "John Doe",
				age: "18",
				skill: "C++",
				level: 1
			},
			{
				name: "John Doe",
				age: "90",
				skill: "ASM",
				level: 3
			},
			{
				name: "John Doe",
				age: "19",
				skill: "C++",
				level: 1
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
