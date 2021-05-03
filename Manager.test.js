const Manager = require('./manager');

describe("Manager", () => {
  it("should return the office number", () => {
      const number = 1
      const manager = new Manager("Traci", 1, "Traci@email.com", number)
      expect(manager.office).toEqual(number)
  })
  describe("getNumber", () => {
      it("should return the number", () => {
          const number = 1
          const newNumber = new Manager("Traci", 1, "Traci@email.com", number)
          expect(newNumber.getOfficeNumber()).toEqual(number)
      })
  })
  describe("getRole", () => {
      it("should return the role", () => {
          const role = "Manager"
          const newRole = new Manager(role)
          expect(newRole.getRole()).toEqual(role)
      })
  })
})