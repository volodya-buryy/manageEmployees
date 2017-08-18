class AboutController {
	constructor($stateParams) {
		this.model = $stateParams.model;
		this.name = 'about';
  }
}
AboutController.$inject = ['$stateParams']
export default AboutController;
