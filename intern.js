const Employee = require('./employee');

class Intern extends Employee {
    constructor ( employeeName, ID, email, school) {
        super(employeeName, ID, email, "intern")
        this.school = school;
    }
    getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = Intern;