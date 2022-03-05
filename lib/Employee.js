// Class For Employee creating the Name, ID and Email Parameter which also has functions to return a parameter
class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee";
    }
}

// Exporting the Class to use in the application and tests
module.exports = Employee