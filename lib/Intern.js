const Employee = require('./Employee');

class Intern extends Employee {

    constructor({ name, email, id, github }) {

        super({ name, email, id, github });

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Intern';
    }

}


module.exports = Intern;