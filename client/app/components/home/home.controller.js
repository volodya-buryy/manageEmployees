class HomeController {
	constructor($state, UserServise) {
		this.UserServise = UserServise;
		this.$state = $state;
		
	};

	$onInit(){
		this.model = this.UserServise.get();
	}

	removeItem(index) {
		this.model.splice(index, 1);
	}

	editItem(index){
		this.editEvent = true
	
	}
	
	save(index, key, item){
		let objKey = Object.keys(this.model[index])[key];
		this.model[index][objKey] = item;
	}

	findByText(findText){
		findText = findText.toLowerCase();

		if(!findText) {
			this.model = this.UserServise.get();
			return
		}

		let a = this.model.filter(item => {
			for(let key in item){
				let itemParse = item[key].toString().toLowerCase();

				if(itemParse.indexOf(findText) > -1){
					return item
				}else{
					continue
				}
			}
		})

		this.model = a
	}
};
HomeController.$inject = ['$state', 'UserServise']
export default HomeController;
