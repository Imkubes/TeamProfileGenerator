const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'teamManagerName',
      message: 'What is your Team Managers Name?',
    },
    {
      type: 'input',
      name: 'teamManagerID',
      message: 'What is your Team Managers Employee ID?',
    },
    {
      type: 'input',
      name: 'teamManagerEmail',
      message: 'What is the Team Managers email?',
    },
    {
      type: 'input',
      name: 'teamManagerOfficeNumber',
      message: 'What is your Team Managers office number?',
    },
    {
      type: 'confirm',
      name: 'addEngineer',
      message: 'Would you like to add an Engineer to the team?',

    },
    {
      type: 'confirm',
      name: 'addIntern',
      message: 'Would you like to add an Intern to the team?',
    },
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the name of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerID',
      message: 'What is the Employee ID of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is the Email Address of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerGit',
      message: 'What is the Git Hub username of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'internName',
      message: 'What is the name of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internID',
      message: 'What is the Employee ID of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is the Email Address of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internGit',
      message: 'What is the Git Hub username of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    }
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
