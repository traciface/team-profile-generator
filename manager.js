const employee = require('./employee');

class manager extends employee {
    constructor (employeeName, ID, email, office) {
        super("manager", employeeName, ID, email)
        this.office = office;
    }
}

module.exports = manager;