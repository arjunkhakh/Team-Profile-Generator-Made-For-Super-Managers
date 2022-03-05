// Requiring The Employee Class
const Employee = require("../lib/Employee");

// A Test For the Employee Class which should return the same variables which it is equal to for each parameter
describe('Getting Object', () => {
it('Getting the Employee Name and ID from the Object', () => {
    const empl = new Employee('hi', 9);
    
    expect(empl.name).toEqual('hi');
    expect(empl.id).toEqual(9);
    })
})