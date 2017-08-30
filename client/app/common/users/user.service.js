class UserService {
    constructor() {
        this.model = [
			{
				name: "John Doe",
				age: "23",
				skill: "js",
				level: 3,
				ssn: "444-44-4444"
			},
			{
				name: "John Doe",
				age: "32",
				skill: "php",
				level: 2,
				ssn: "444-44-4445"
			},
			{
				name: "John Doe",
				age: "18",
				skill: "C++",
				level: 1,
				ssn: "444-44-4446"
			},
			{
				name: "John Doe",
				age: "90",
				skill: "ASM",
				level: 3,
				ssn: "444-44-44447"
			},
			{
				name: "John Doe",
				age: "19",
				skill: "C++",
				level: 1,
				ssn: "444-44-4448"
			},
		];
    }
    get(){
        return this.model
    }

    set(item){
		this.model.push(item);
        return this.model
	}
	pushToDB(){
		//TODO: example how to use indexedDB in angularjs -> http://embed.plnkr.co/ip6owK/
		var db;
		let request = indexedDB.open("ManageEmployees", 2);

		request.onerror = function(event) {
			console.log(event.target.errorCode, '<<<---Error Code')
		  	alert("Why didn't you allow my web app to use IndexedDB?!");
		};

		request.onsuccess = function(event) {
			db = event.target.result;
			var objectStore = db.createObjectStore('user_info_list', { keyPath: "ssn" });
			objectStore.createIndex("name", "name", { unique: false });

			objectStore.transaction.oncomplete = function(event) {
				var customerObjectStore = db.transaction("user_info_list", "readwrite").objectStore("user_info_list");
				for (var i in this.model) {
					customerObjectStore.add(this.model[i]);
				}
			};
		};
	}

}

export default UserService;