import * as d3 from 'd3';

class NavbarController {
	constructor(User, $state) {
		this.name = 'navbar';
		//console.log(User.D3(),d3, "D3")
		this.state = $state;
	}
	about(obj){
		console.log(obj)
		
		function parseForPieChart(obj, prop){
			let ageArr = [];
			for(let i = 0; i < obj.length; i++){
				var seen = false;
				if(ageArr.length > 0 ){
					for(let j = 0; j != ageArr.length; ++j){
						//console.log(ageArr, obj[i], ageArr[j].age, obj[i].age)
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

		console.log(age)
		this.state.go('about',  {
			model: [age, skill, level]
		});
	}
}
NavbarController.$inject = ['User', "$state"];
export default NavbarController;
