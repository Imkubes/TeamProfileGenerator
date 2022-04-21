const Employee = require('./Employee');

class Intern extends Employee {

    constructor({ name, email, id, github }) {

        super({ name, email, id, github });

        this.github = github;
        this.role = 'Intern';
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }

}


module.exports = Intern;