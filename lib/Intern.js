const Employee = require('./Employee');

class Intern extends Employee {

    constructor({ name, email, id, github }) {

        super({ name, email, id, github });

        this.role = 'Intern';
    }

    getRole() {
        return this.role;
    }

}


module.exports = Intern;