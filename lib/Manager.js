const Employee = require("./Employee");

class Manager extends Employee {
    constructor(github){
        this.github = github;

        super(this.name, this.id, this.email)
    }

    getGithub(){
        console.log("https://github.com/" + this.github)
    }

    getRole(){
        return "Manager";
    }
}