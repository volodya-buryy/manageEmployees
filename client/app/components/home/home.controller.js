import _ from 'lodash';
class HomeController {
	constructor($state, UserServise, $rootScope, $scope) {
		this.UserServise = UserServise;
		this.$state = $state;
		this.$rootScope = $rootScope;
		this.model = [];
		$scope.$watch(() => this.model, (newValue) => {
			console.log(newValue[0])
			let g = newValue[0]
			g.forEach((element) => {
				console.log(element)
			});
			console.log(g)
			//this.model.push(newValue[0][0])
			
			console.log(this.model)
		});
		
	};

	$onInit(){
		this.model.push(this.UserServise.get()); // get list from service
		console.log(this.model, '1')
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
HomeController.$inject = ['$state', 'UserServise', '$rootScope', '$scope']
export default HomeController;


