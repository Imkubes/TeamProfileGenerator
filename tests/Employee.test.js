const Employee = require('../lib/Employee');

describe('Employee', () => {
    const mockEmployee = {
        name: 'Sally',
        id: 130,
        email: 'email@email.com',
    };

describe('constructor tests', () => {
    test('should construct a new instance of an employee class', () => {
        const employee = new Employee(mockEmployee);
        expect(employee).toBeInstanceOf(Employee);
    });
});
describe('method tests', () => {
    test('should return ID when the getID method is called', () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getID()).toEqual(130);
    });

    test('should return employee name when getName method is called', () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getName()).toEqual('Sally');
    });

    test('should return employee email when getEmail method is called', () => {
        const employee = new Employee(mockEmployee);
        expect(employee.getEmail()).toEqual('email@email.com');
    });
});
});