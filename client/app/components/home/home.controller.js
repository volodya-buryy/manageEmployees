class HomeController {
	constructor($state, UserServise, $rootScope) {
		this.UserServise = UserServise;
		this.$state = $state;
		this.$rootScope = $rootScope;
	};

	$onInit(){
		this.model = this.UserServise.get(); // get list from service
		this.int = []; // init arr for edit event
		this.showAddItemModal = false;
		this.$rootScope.$on('close', (data => { // listen event if need to close modal
			this.showAddItemModal = false;
		}))
	}
	/*
	remove user from te list
	*/

	removeItem(index) {
		this.model.splice(index, 1);
	}
	/*
	edit user info
	*/

	editItem(index){
		this.editEvent = true
	}

	save(index, key, item){
		let objKey = Object.keys(this.model[index])[key];
		this.model[index][objKey] = item;
	}

	/*
	find in list of user, by name, age, skill, level
	*/

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

	/*
	add new user to the list
	*/

	addItem(){
		this.showAddItemModal = true;
	}
};
HomeController.$inject = ['$state', 'UserServise', '$rootScope']
export default HomeController;
