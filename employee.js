class Employee {
    constructor (employeeName, ID, email, title) {
        
        this.employeeName = employeeName;
        this.ID = ID;
        this.email = email;
		this.title = title;
    }

	getName() {
		return this.employeeName;
	}

	getId() {
		return this.ID;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return 'Employee';
	}
}

module.exports = Employee;