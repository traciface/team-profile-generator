const Intern = require('./intern');


describe("Intern", () => {
  it("should return the school", () => {
      const school = "school"
      const intern = new Intern("Traci", 1, "Traci@email.com", school)
      expect(intern.school).toEqual(school)
  })
  describe("getSchool", () => {
      it("should return the input value", () => {
          const school = "school"
          const newSchool = new Intern("Traci", 1, "Traci@email.com", school)
          expect(newSchool.getSchool()).toEqual(school)
      })
  })
  describe("getRole", () => {
      it("should return the input value", () => {
          const role = "Intern"
          const newRole = new Intern(role)
          expect(newRole.getRole()).toEqual(role)
      })
  })
})