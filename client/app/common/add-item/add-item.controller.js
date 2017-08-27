
class addItemController {
	constructor(UserServise) {
		this.UserServise = UserServise;
	}
	submit(){
		this.UserServise.set({
			name: "John Doe",
			age: "19",
			skill: "C++",
			level: 1
		})
	}
}
addItemController.$inject = ["UserServise"];
export default addItemController;
