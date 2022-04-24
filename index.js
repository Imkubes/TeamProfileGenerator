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

const init = async() => {
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
      return manager.role === 'Manager';
    });
    const engineers = employees.filter(engineer => {
      return engineer.role === 'Engineer';
    }).map(engineer => {
      return [engineer.name, engineer.email, engineer.id, engineer.github];
    });
    console.log(engineers);
    const interns = employees.filter(intern => {
      return intern.role === 'Intern';
    }).map(intern => {
      return [intern.name, intern.email, intern.id, intern.github]; 
    });
    //console.log(interns);
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

  const newManager = new Manager(managerAnswers);

  employees.push(newManager);
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

  const newEngineer = new Engineer(engineerAnswers);

  employees.push(newEngineer);
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

  const newIntern = new Intern(internAnswers);

  employees.push(newIntern);
};

init();