
class addItemController {
	constructor(UserServise, $rootScope) {
		this.UserServise = UserServise;
		this.$rootScope = $rootScope;
	}
	submit(name, age, skill, level){
		this.UserServise.pushToDB(name, age, skill, level)
		this.close();
	}

	close(){
		this.$rootScope.$emit('close', 'close');
	}
}
addItemController.$inject = ["UserServise", '$rootScope'];
export default addItemController;
