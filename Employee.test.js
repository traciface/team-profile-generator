const Employee = require('./employee');

describe("Employee", () => {
    it("should return the name", () => {
        const name = "traci"
        const newEmployee = new Employee(name)
        expect(newEmployee.employeeName).toEqual(name)
    })
    it("should return the id", () => {
        const id = 1
        const newEmployee = new Employee("Traci", id)
        expect(newEmployee.ID).toEqual(id)
    })
    it("should return the email", () => {
        const email = "Traci@email.com"
        const newEmployee = new Employee("Traci", 1, email)
        expect(newEmployee.email).toEqual(email)
    })
    describe("getName", () => {
        it("should return the name", () => {
            const name = "name"
            const newName = new Employee(name)
            expect(newName.getName()).toEqual(name)
        })
    })
    describe("getId", () => {
        it("should return the id", () => {
        const id = 1
        const newId = new Employee("name", id)
        expect(newId.getId()).toEqual(id)
        })
    })
    describe("getEmail", () => {
        it("should return the email", () => {
            const email = "email"
            const newEmail = new Employee("name", 1, email)
            expect(newEmail.getEmail()).toEqual(email)
        })
    })
    describe("getRole", () => {
        it("should return the role", () => {
            const role = "Employee"
            const newRole = new Employee()
            expect(newRole.getRole()).toEqual(role)
        })
    })
})