
class NavbarController {
	constructor($state) {
		this.state = $state;
	}
	about(obj){

		function parseForPieChart(obj, prop){
			let ageArr = [];
			obj.forEach(obj => {

				var seen = false;
				if(ageArr.length > 0 ){

					ageArr.forEach(item => {
						if(item.title === obj[prop]){
							seen = true
							item.sum++
						}
					});
					
					if(!seen) ageArr.push({title: obj[prop], sum: 1})

				}else{
					ageArr.push({title: obj[prop], sum: 1})
				}

			});

			return ageArr; 
		}

		let age = parseForPieChart(obj, "age");
		let skill = parseForPieChart(obj, "skill");
		let level = parseForPieChart(obj, "level");

		this.state.go('about',  {
			model: [age, skill, level]
		});
	}
}
NavbarController.$inject = ["$state"];
export default NavbarController;
