const employee = require('./employee');

class intern extends employee {
    constructor ( employeeName, ID, email, school) {
        super("intern", employeeName, ID, email)
        this.school = school;
    }
}

module.exports = intern;