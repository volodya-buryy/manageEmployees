import * as d3 from 'd3';

class NavbarController {
	constructor(User, $state) {
		this.name = 'navbar';
		console.log(User.D3(),d3, "D3")
		this.state = $state;
	}
	about(obj){
		console.log(obj)
		let ageArr = [];
		for(let i = 0; i < obj.length; i++){
			for(let j = 0; j <= ageArr.length; j++){
				//console.log(ageArr[j].age == obj[i].age, ageArr[j].age, obj[i].age)
				console.log(ageArr)
				if(ageArr.length > 0 ){
					if(ageArr[j].age == obj[i].age){
						ageArr[j].sum ++
					}else{
						ageArr.push({age: obj[i].age, sum: 1})
					}
				}else{
					ageArr.push({age: obj[i].age, sum: 1})
				}
			}

		}
		console.log(ageArr)
		this.state.go('about',  {
			model: [{
				age: ageArr
			}]
		});
	}
}
NavbarController.$inject = ['User', "$state"];
export default NavbarController;
