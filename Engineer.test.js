const Engineer = require('./engineer');

describe("Engineer", () => {
  it("should return the github username", () => {
      const github = "github"
      const engineer = new Engineer("Traci", 1, "Traci@email.com", github)
      expect(engineer.github).toEqual(github)
  })
  describe("getGithub", () => {
      it("should return the github username", () => {
          const github = "github"
          const newGit = new Engineer("Traci", 1, "Traci@email.com", github)
          expect(newGit.getGithub()).toEqual(github)
      })
  })
  describe("getRole", () => {
      it("should return the role", () => {
          const role = "Engineer"
          const newRole = new Engineer(role)
          expect(newRole.getRole()).toEqual(role)
      })
  })
})