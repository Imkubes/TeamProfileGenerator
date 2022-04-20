const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generatehtml.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const Employees = [];

let isTeamComplete = false;

const validateInput = (userInput) => {
  if (userInput === "") {
    return "Please enter your answer before proceeding.";
  } else {
    return true;
  }
};

const init = async() => {
  await createManager();


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

    if (employeeType === 'none') {
      isTeamComplete = true;
    } else {
      if (employeeType === 'Engineer') {
        await createEngineer();
      }
      if (employeeType === 'Intern') {
        await createIntern();
      }
    }
}

const HTML = generateHTML(employees);
fs.writeFileSync('index.html', HTML, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully created HTML File.');
  }
 });
};

const createManager = async() => {
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

  const Manager = new Manager(managerAnswers);

  Employees.push(Manager);
};

const createEngineer = async() => {

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

  const Engineer = new Engineer(engineerAnswers);

  Employees.push(Engineer);
};

const createIntern = async() => {

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

  const Intern = new Intern(internAnswers);

  Employees.push(Intern);
};

init();

const generateHTML = ({ }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <div class="jumbotron">
        <h1>My Team</h1>
        <p>This is the current team that I am working with!</p>
      </div>
  
      <div class="row">
        <div class="column">
          <div class="card">
            <h3></h3>
            <h4>Manager</h4>
            <p>ID: <br>
            Email: <br>
            Office Number: </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3></h3>
            <h4>Employee</h4>
            <p>ID: <br>
            Email: <br>
            Github: </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>Name</h3>
            <h4>Employee</h4>
            <p>ID: <br>
            Email: <br>
            Office Number: </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>Name</h3>
            <h4>Employee</h4>
            <p>ID: <br>
            Email: <br>
            Office Number: </p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>Name</h3>
            <h4>Employee</h4>
            <p>ID: <br>
            Email: <br>
            Office Number: </p>
          </div>
        </div>
      </div>
  
  </body>
  </html>`;