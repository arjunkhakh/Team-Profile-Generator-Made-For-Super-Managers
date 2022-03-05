const Employee = require("../lib/Employee");

describe('Getting Object', () => {
    
it('Getting the Employee Name and ID from the Object', () => {
    const empl = new Employee('hi', 9);
    
    expect(empl.name).toEqual('hi');
    expect(empl.id).toEqual(9);
    })
})