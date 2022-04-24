const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const mockEngineer = {
        name: 'Suki',
        id: 150,
        email: 'email@email.com',
        github: 'github',
        role: 'Engineer',
    };
describe('constructor tests', () => {
    test('should construct a new instance of the Engineer class', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer).toBeInstanceOf(Engineer);
    });

    test('should make a new instance of the Engineer class with name, id, email, and github', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer).toEqual({
            name: 'Suki',
            id: 150,
            email: 'email@email.com',
            github: 'github',
            role: 'Engineer',
        });
    });
});
describe('method tests', () => {
    test('should return ID when the getID method is called', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getID()).toEqual(150);
    });
    test('should return name when the getName method is called', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getName()).toEqual('Suki');
    });
    test('should return email when the getEmail method is called', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getEmail()).toEqual('email@email.com');
    });
    test('should return github when the getGitHub method is called', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getGitHub()).toEqual('github');
    });
    test('should return Engineer role when the getRole method is called', () => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getRole()).toEqual('Engineer');
    });
});
});