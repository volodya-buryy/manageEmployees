import _ from 'lodash';
class UserService {
    constructor($rootScope) {
		this.$rootScope = $rootScope;
		let that = this;	
		this.model = [];
		$rootScope.$on("test", (a,b) =>{
			console.log(b, this)
			this.db = b;

			var trans = b.transaction(["userInfo"], "readwrite");
			var store = trans.objectStore("userInfo");
		 
			var request = store.getAll();
		 
			request.onsuccess = (e) => {
				console.log(e.target.result)
				e.target.result.forEach((element) => {
					this.model.push(element);
				});
			}
			request.onerror = function(err){
				console.log(err);
			}
		})			
	}

    get(){
		return this.model;		
    }

    set(item){
		this.model.push(item);
        return this.model
	}
	pushToDB(name, age, skill, level){
		console.log(this.db);
		var trans = this.db.transaction(["userInfo"], "readwrite");
		var store = trans.objectStore("userInfo");

		var request = store.add({
			"id": Date.parse(new Date()),
			"name": name,
			"age": age,
			"skill": skill,
			"level": level,
		});

		request.onsuccess = function (e) {
			console.log(e)
			return e
		};

		request.onerror = function (e) {
			console.log(e);
		};
	}
	
}
UserService.$inject = ['$rootScope']
export default UserService;