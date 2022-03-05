// Requiring Employee Class
const Employee = require("./Employee");

// Extending Employee Class With Engineer which includes a Github Parameter
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

     getGithub(){
       return "https://github.com/" + this.github
    }

    getRole(){
        return "Engineer";
    }
}

// Exporting the Class to use in the application and tests
module.exports = Engineer