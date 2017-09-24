import _ from 'lodash';
class UserService {
    constructor($rootScope, $q) {
		this.$q = $q;
		this.$rootScope = $rootScope;
		let that = this;	
		this.model = [];
		this.db = null;		
	}

    get(){		
		let deferred  = this.$q.defer();

		this.$rootScope.indexedDbRes().then(db => {
			this.db = db; 

			var trans = db.transaction(["userInfo"], "readwrite");
			var store = trans.objectStore("userInfo");
			
			var request = store.getAll();
			
			request.onsuccess = (e) => {				
				let a = e.target.result
				this.model = [];
				a.forEach((element) => {
					this.model.push(element);
				});
				deferred.resolve(a)
			}
			request.onerror = function(err){
				console.log(err);
				deferred.reject('OOps')
			}
		}, err => {
			console.log(err);
			deferred.reject(err)
		});		
				
		return deferred.promise;		
    }

    set(item){
		this.model.push(item);
        return this.model
	}
	pushToDB(name, age, skill, level){
		var trans = this.db.transaction(["userInfo"], "readwrite");
		var store = trans.objectStore("userInfo");

		var request = store.add({
			"id": Date.parse(new Date()),
			"name": name,
			"age": age,
			"skill": skill,
			"level": level,
		});

		request.onsuccess = (e) => {
			console.log(e)
			this.model.push(request)
			return e
		};

		request.onerror = (e) => {
			console.log(e);
		};
	}

	updateUserInfo(item){
		let deferred = this.$q.defer();

		var trans = this.db.transaction(["userInfo"], "readwrite");
		var store = trans.objectStore("userInfo");

		var request = store.put(item);

		request.onsuccess = (e) => {
			console.log(e)
			this.model.push(request)
			return e
		};

		request.onerror = (e) => {
			console.log(e);
		};

		return deferred.promise;
	}
	
}
UserService.$inject = ['$rootScope', '$q']
export default UserService;