const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

const validateInput = (userInput) => {
  if (userInput === "") {
    return "Please enter your answer before proceeding.";
  } else {
    return true;
  }
};

const init = async () => {
  await createManager();

  let isTeamComplete = false;
  while (!isTeamComplete) {

    const employeeTypeQuestion = [
      {
        type: 'list',
        message: 'Please select the employee type you wish to add.',
        name: 'employeeType',
        choices: ['Engineer', 'Intern', 'None']
      }
    ];

    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

    if (employeeType === 'None') {
      isTeamComplete = true;
    } else {
      if (employeeType === 'Engineer') {
        await createEngineer();
      }
      if (employeeType === 'Intern') {
        await createIntern();
      }
    }
  };

  const generateHTML = (employees) => {
    const managers = employees.filter(manager => {
      return manager.getRole() === 'Manager';
    });
    const engineers = employees.filter(engineer => {
      return engineer.getRole() === 'Engineer';
    });
    //console.log(engineers);
    const interns = employees.filter(intern => {
      return intern.getRole() === 'Intern';
    });
    //console.log(interns);
    const managerHTML = managers.map(manager => {
      return `
      <div class="card">
      <div class="card-body">
          <h3 class = "card-title">${manager.getName()}</h3>
          <h4 class = "card-subtitle mb-2">☕Manager</h4>
          <div>ID: ${manager.getID()}</div>
          <div>Email: <a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></div>
          <div>Office Number: ${manager.getOfficeNumber()}</div>
      </div>
  </div>`
    });

    const engineerHTML = engineers.map(engineer => {
      return `
      <div class="card">
      <div class="card-body">
          <h3 class = "card-title">${engineer.getName()}</h3>
          <h4 class = "card-subtitle mb-2">👓Engineer</h4>
          <div>ID: ${engineer.getID()}</div>
          <div>Email: <a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></div>
          <div>GitHub: <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></div>
      </div>
  </div>`
    });
    const internHTML = interns.map(intern => {
      return `
      <div class="card">
      <div class="card-body">
          <h3 class = "card-title">${intern.getName()}</h3>
          <h4 class = "card-subtitle mb-2">🎓Intern</h4>
          <div>ID: ${intern.getID()}</div>
          <div>Email: <a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></div>
          <div>GitHub: <a href = "https://github.com/${intern.getGitHub()}">${intern.getGitHub()}</a></div>
      </div>
  </div>`
    });
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profiles</title>
</head>

<body>
    <div class="jumbotron">
        <h1>Team Profile Generator</h1>
    </div>

    <div class = "card-deck">
    ${managerHTML.join('\n')}
    ${engineerHTML.join('\n')}
    ${internHTML.join('\n')}
        
    </div>


</body>

</html>`
  };

  const HTML = generateHTML(employees);
  fs.writeFileSync('index.html', HTML, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully created HTML File.');
    }
  });
};

const createManager = async () => {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the Managers name?',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee ID:',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Managers email?',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the Managers office number?',
      validate: validateInput,
    },
  ];

  const managerAnswers = await inquirer.prompt(managerQuestions);

  const newManager = new Manager(managerAnswers);

  employees.push(newManager);
};

const createEngineer = async () => {

  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the Engineers name',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the Engineers ID',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the Engineers email',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the Engineers Github',
      validate: validateInput,
    },
  ];

  const engineerAnswers = await inquirer.prompt(engineerQuestions);

  const newEngineer = new Engineer(engineerAnswers);

  employees.push(newEngineer);
};

const createIntern = async () => {

  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'Please enter the Interns name',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter the Interns ID',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the Interns email',
      validate: validateInput,
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter the Interns Github',
      validate: validateInput,
    },
  ];

  const internAnswers = await inquirer.prompt(internQuestions);

  const newIntern = new Intern(internAnswers);

  employees.push(newIntern);
};

init();