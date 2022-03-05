// Requiring The Intern Class
const Intern = require("../lib/Intern");

// A Test For the Intern Class which should return the same variables which it is equal to for each parameter
describe('Getting Intern Object Attribites', () => {
    
    it('Getting the Intern Attributes from the Object', () => {
        const empl = new Intern('hassan', 12, "hassan@example.com", "UoB");
        
        expect(empl.name).toEqual('hassan');
        expect(empl.id).toEqual(12);
        expect(empl.email).toEqual("hassan@example.com");
        expect(empl.school).toEqual("UoB");
        })
    })