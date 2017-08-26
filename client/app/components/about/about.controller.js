class AboutController {
	constructor($stateParams) {
		this.stateParams = $stateParams;	
  }
  $onInit(){
		this.model = this.stateParams.model;	
  }
}
AboutController.$inject = ['$stateParams']
export default AboutController;
