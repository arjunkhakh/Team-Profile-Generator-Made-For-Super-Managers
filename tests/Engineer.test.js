// Requiring The Engineer Class
const Engineer = require("../lib/Engineer");

// A Test For the Engineer Class which should return the same variables which it is equal to for each parameter
describe('Getting Engineer Object Attribites', () => {
    
    it('Getting the Engineer Attributes from the Object', () => {
        const empl = new Engineer('hi', 13, "mark@example.com", "arjunkhakh");
        
        expect(empl.name).toEqual('hi');
        expect(empl.id).toEqual(13);
        expect(empl.email).toEqual("mark@example.com");
        expect(empl.github).toEqual("arjunkhakh");
        })
    })