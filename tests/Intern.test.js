const Intern = require('../lib/Intern');


describe('Intern', () => {
  const mockIntern = {
      name: 'Alex',
      id: 155,
      email: 'email@email.com',
      github: 'github',
  };
describe('constructor tests', () => {
  test('should construct a new instance of the intern class', () => {
    const intern = new Intern(mockIntern);
    expect(intern).toBeInstanceOf(Intern);
  });
  test('should construct a new instance of the intern class with name, id, email, role', () => {
    const intern = new Intern(mockIntern);
    expect(intern).toEqual({
      name: 'Alex',
      id: 155,
      email: 'email@email.com',
      github: 'github',
      role: 'Intern',
    });
  });
});
describe('method tests', () => {
  test('should return ID when the getID method is called', () => {
    const intern = new Intern(mockIntern);
    expect(intern.getID()).toEqual(155);
  });
  test('should return name when the getName method is called', () => {
    const intern = new Intern(mockIntern);
    expect(intern.getName()).toEqual('Alex');
  });
  test('should return interns email when the getEmail method is called', () => {
    const intern = new Intern(mockIntern);
    expect(intern.getEmail()).toEqual('email@email.com');
  });
  test('should return interns github when the getGitHub method is called', () => {
    const intern = new Intern(mockIntern);
    expect(intern.getGitHub()).toEqual('github');
  });
  test('should return intern role when the getRole method is called', () => {
    const intern = new Intern(mockIntern);
    expect(intern.getRole()).toEqual('Intern');
  });
});
});