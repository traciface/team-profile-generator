const employee = require('./employee');

class engineer extends employee {
    constructor (employeeName, ID, email, github) {
        super("engineer", employeeName, ID, email)
        this.github = github;
    }
}

module.exports = engineer;