const employee = require('./employee');

class intern extends employee {
    constructor ( employeeName, ID, email, school) {
        super("intern", employeeName, ID, email)
        this.school = school;
    }
    getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = intern;