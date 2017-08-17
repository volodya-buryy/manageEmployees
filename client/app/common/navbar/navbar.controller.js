import * as d3 from 'd3';

class NavbarController {
	constructor(User, $state, $stateParams) {
		this.state = $state;
	}
	about(obj){

		function parseForPieChart(obj, prop){
			let ageArr = [];
			for(let i = 0; i < obj.length; i++){
				var seen = false;
				if(ageArr.length > 0 ){
					for(let j = 0; j != ageArr.length; ++j){
						if(ageArr[j].title === obj[i][prop]){
							seen = true
							ageArr[j].sum++
						}
					}
					if(!seen) ageArr.push({title: obj[i][prop], sum: 1})

				}else{
					ageArr.push({title: obj[i][prop], sum: 1})
				}

			}
			return ageArr
		}

		let age = parseForPieChart(obj, "age");
		let skill = parseForPieChart(obj, "skill");
		let level = parseForPieChart(obj, "level");

		this.state.go('about',  {
			model: [age, skill, level]
		});
	}
}
NavbarController.$inject = ['User', "$state"];
export default NavbarController;
