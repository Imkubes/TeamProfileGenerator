const Employee = require('./Employee');

class Engineer extends Employee {

    constructor({ name, id, email, github, }) {

        super({name, email, id});

        this.github = github;

        this.role = 'Engineer';

    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}


module.exports = Engineer;