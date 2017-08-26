class UserService {
    constructor() {
        this.model = [
			{
				name: "John Doe",
				age: "23",
				skill: "js",
				level: 3
			},
			{
				name: "John Doe",
				age: "32",
				skill: "php",
				level: 2
			},
			{
				name: "John Doe",
				age: "18",
				skill: "C++",
				level: 1
			},
			{
				name: "John Doe",
				age: "90",
				skill: "ASM",
				level: 3
			},
			{
				name: "John Doe",
				age: "19",
				skill: "C++",
				level: 1
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
}

export default UserService;