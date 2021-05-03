const Employee = require('./employee');

class Engineer extends Employee {
    constructor (employeeName, ID, email, github) {
        super(employeeName, ID, email, "engineer")
        this.github = github;
    }
    getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
 
}

module.exports = Engineer;