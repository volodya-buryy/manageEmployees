
class addItemController {
	constructor(UserServise, $rootScope) {
		this.UserServise = UserServise;
		this.$rootScope = $rootScope;
	}
	submit(name, age, skill, level){
		this.UserServise.set({
			name: name,
			age: age,
			skill: skill,
			level: level
		})
		this.close();
	}

	close(){
		this.$rootScope.$emit('close', 'close');
	}
}
addItemController.$inject = ["UserServise", '$rootScope'];
export default addItemController;
