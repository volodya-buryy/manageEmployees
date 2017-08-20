class HomeController {
	constructor($state, UserServise) {
		this.UserServise = UserServise
		this.name = 'home';
		this.$state = $state;
		console.log(this.UserServise.get())
		
	};

	$onInit(){
		this.model = this.UserServise.get();
	}

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
HomeController.$inject = ['$state', 'UserServise']
export default HomeController;
