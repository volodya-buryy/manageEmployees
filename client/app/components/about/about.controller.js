class AboutController {
	constructor($stateParams) {
		this.stateParams = $stateParams;	
		this.name = 'about';
  }
  $onInit(){
	this.model = this.stateParams.model;	
	console.log(this.model,  'MMModel');
  }
}
AboutController.$inject = ['$stateParams']
export default AboutController;
