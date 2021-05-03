const Employee = require('./employee');

class Manager extends Employee {
    constructor (employeeName, ID, email, office) {
        super(employeeName, ID, email, "manager")
        this.office = office;
    }
    getRole() {
		return 'Manager';
	}

	getOfficeNumber() {
		return this.office;
	}

}

module.exports = Manager;