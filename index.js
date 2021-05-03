const manager = require ('./manager');
const engineer = require ('./engineer');
const intern =  require ('./intern');

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const employee = require('./employee');
const writeFileAsync = util.promisify(fs.writeFile);

const managerQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
      },
      {
        type: 'input',
        name: 'office',
        message: 'Whatmis your office number?',
      }
    
    ];

  
const positionQuestions = [
      {
        type: 'list',
        name: 'position',
        message: 'Is the employee an engineer or intern?',
        choices: [
          "engineer",
          "intern",
        ]
      }
    ];

  
const engineerQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter their Github Username.',
      }
    ];
  
  
const internQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school are they attending?',
      }
    ];

    const finishQuestion = [
        {
          type: 'input',
          name: 'done',
          message: 'Are you done constructing your team? ',
        }
        
      ];

const generateHTMLHead = 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/08685c8b9a.js" crossorigin="anonymous"></script>
    <title>generator</title>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">`

 const generateHTMLFoot=
`</body> </html>`;


const employeeArray = [];

function finishQuestionInfo() {
    inquirer.prompt(finishQuestion).then((finishBuild) => {
        if (finishBuild.done==='no'){
            positionInfo();
        } 
        if (finishBuild.done==='yes'){
            generateHTMLFile(employeeArray);
        } 
    });
}

function managerInfo() {
	inquirer.prompt(managerQuestions).then((managerBuild) => {
		let empmanager = new manager(managerBuild.name, 0, managerBuild.email, managerBuild.office);
		employeeArray.push(empmanager);
        // console.log(empmanager);
		finishQuestionInfo();
	});
}

function positionInfo(){
    inquirer.prompt (positionQuestions).then((positionBuild) =>{
        if (positionBuild.position==='engineer'){
            inquirer.prompt(engineerQuestions).then((engineerBuild) => {
				let empEngineer = new engineer(engineerBuild.name, 1, engineerBuild.email, engineerBuild.github);
				employeeArray.push(empEngineer);
				finishQuestionInfo();
			});
        }
        else if (positionBuild.position==='intern'){
            inquirer.prompt(internQuestions).then((internBuild) => {
				let empIntern = new intern(internBuild.name, 2, internBuild.email, internBuild.school);
				employeeArray.push(empIntern);
				finishQuestionInfo();
			});
        }  
    }
    )
}

function generateHTMLFile (employees){
    var html= buildHTML(employees)
    writeFileAsync('employees.html', html)
}


function buildHTML(employees){
    var allHTML = generateHTMLHead
    employees.forEach(employee => {
        if(employee.title==='manager'){
            allHTML+=     `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.employeeName}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">${employee.office}</li>
                </ul>
            </div>
        </div>`
        }
        if(employee.title==='engineer'){
            allHTML+=    `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.employeeName}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${employee.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: 1123</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank" rel="noopener noreferrer">${employee.github}</a></li>
                </ul>
            </div>
        </div>`}

        if(employee.title==='intern'){
            allHTML+=    `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${employee.employeeName}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>
        </div>`}

        //console.log(allHTML);
      });
      allHTML+= generateHTMLFoot
      return allHTML;
    }


  const init = () => {
    managerInfo()
    
      
  };
  
  init();
 // writeFileAsync('employees.html', allHTML)

 
