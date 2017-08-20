class AboutController {
	constructor($stateParams) {
		this.model = $stateParams.model;
		console.log(this.model);
		this.name = 'about';
  }
}
AboutController.$inject = ['$stateParams']
export default AboutController;
