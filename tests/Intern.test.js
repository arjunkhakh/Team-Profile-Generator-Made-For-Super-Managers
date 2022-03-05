
const Intern = require("../lib/Intern");

describe('Getting Intern Object Attribites', () => {
    
    it('Getting the Intern Attributes from the Object', () => {
        const empl = new Intern('hassan', 12, "hassan@example.com", "UoB");
        
        expect(empl.name).toEqual('hassan');
        expect(empl.id).toEqual(12);
        expect(empl.email).toEqual("hassan@example.com");
        expect(empl.school).toEqual("UoB");
        })
    })