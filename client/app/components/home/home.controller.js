import _ from 'lodash';
class HomeController {
	constructor($state, UserServise, $rootScope, $scope) {
		this.UserServise = UserServise;
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.model = [];
		
	};

	$onInit(){
		this.getUserInfo();
		console.log(this.model, 'INIT')
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
		let objKey = Object.keys(this.model[index])[key + 1];
		this.model[index][objKey] = item;
		this.UserServise.updateUserInfo(this.model[index]).then(res => {
			console.log(res);
		}, err => {
			console.log(err);
		})
	}

	/*
	find in list of user, by name, age, skill, level
	*/

	findByText(findText){
		findText = findText.toLowerCase();

		if(!findText) {
			this.getUserInfo();
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

	getUserInfo(){
		this.model = [];
		// get list from service
		this.UserServise.get().then(res => {
			res.forEach((element) => {
				this.model.push(element)	
			});
		}); 
	}
};
HomeController.$inject = ['$state', 'UserServise', '$rootScope', '$scope']
export default HomeController;


