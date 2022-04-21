const Manager = require('../lib/Manager');
const Intern = require('../lib/Manager');

describe('Manager', () => {
    const mockManager = {
        name: 'Mike',
        id: 321,
        email: 'email@email.com',
        officeNumber: 123,
    };
  describe('constructor tests', () => {
    test('should construct a new instance of the manager class', () => {
      const manager = new Manager(mockManager);
      expect(manager).toBeInstanceOf(Manager);
    });
    test('should construct a new instance of the manager class with name, id, email, officeNumber, and role', () => {
      const manager = new Manager(mockIntern);
      expect(manager).toEqual({
        name: 'Mike',
        id: 321,
        email: 'email@email.com',
        officeNumber: 123,
        role: 'Manager',
      });
    });
  });
  describe('method tests', () => {
    test('should return manager id when the getID method is called', () => {
      const manager = new Manager(mockManager);
      expect(manager.getID()).toEqual(321);
    });
    test('should return manager name when the getName method is called', () => {
      const manager = new Manager(mockManager);
      expect(manager.getName()).toEqual('Mike');
    });
    test('should return manager email when the getEmail method is called', () => {
      const manager = new Manager(mockManager);
      expect(manager.getEmail()).toEqual('email@email.com');
    });
    test('should return manager officeNumber when the getOfficeNumber method is called', () => {
      const manager = new Manager(mockManager);
      expect(manager.getOfficeNumber()).toEqual('123');
    });
    test('should return manager role when the getRole method is called', () => {
      const manager = new Manager(mockManager);
      expect(manager.getRole()).toEqual('Manager');
    });
  });
});