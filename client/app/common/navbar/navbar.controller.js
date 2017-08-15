import * as d3 from 'd3';

class NavbarController {
  constructor(User) {
    this.name = 'navbar';
    console.log(User.D3(),d3, "D3")

  }
}
NavbarController.$inject = ['User'];
export default NavbarController;
