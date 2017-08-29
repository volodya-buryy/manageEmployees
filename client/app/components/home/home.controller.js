class HomeController {
	constructor($state, UserServise, $rootScope) {
		this.UserServise = UserServise;
		this.$state = $state;
		this.$rootScope = $rootScope;
	};

	$onInit(){
		this.model = this.UserServise.get();
		this.int = [];
		this.showAddItemModal = false;
		this.$rootScope.$on('close', (data => {
			this.showAddItemModal = false;
		}))
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

		return this. model = this.model.filter(item => {
			for(let key in item){
				let itemParse = item[key].toString().toLowerCase();

				if(itemParse.indexOf(findText) > -1){
					return item
				}else{
					continue
				}
			}
		})
	}

	addItem(){
		this.showAddItemModal = true;
	}
};
HomeController.$inject = ['$state', 'UserServise', '$rootScope']
export default HomeController;
