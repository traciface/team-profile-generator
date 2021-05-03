class employee {
    constructor (title, employeeName, ID, email) {
        this.title = title;
        this.employeeName = employeeName;
        this.ID = ID;
        this.email = email;
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

module.exports = employee;