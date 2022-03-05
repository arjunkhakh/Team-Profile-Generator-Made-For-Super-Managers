// Requiring The Manager Class
const Manager = require("../lib/Manager");

// A Test For the Manager Class which should return the same variables which it is equal to for each parameter
describe('Getting Manager Object Attribites', () => {
    
    it('Getting the Manager Attributes from the Object', () => {
        const empl = new Manager('tom', 8, "tom@example.com", 5432);
        
        expect(empl.name).toEqual('tom');
        expect(empl.id).toEqual(8);
        expect(empl.email).toEqual("tom@example.com");
        expect(empl.officeNumber).toEqual(5432);
        })
    })