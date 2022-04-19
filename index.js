const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ teamManagerName, teamManagerID, teamManagerEmail, teamManagerOfficeNumber, engineerName, engineerID, engineerEmail, engineerGit, internName, internID, internEmail, internGit, }) =>
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
            <h3>${teamManagerName}</h3>
            <h4>Manager</h4>
            <p>ID: ${teamManagerID}<br>
            Email: ${teamManagerEmail}<br>
            Office Number: ${teamManagerOfficeNumber}</p>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <h3>${engineerName}</h3>
            <h4>Employee</h4>
            <p>ID: ${engineerID}<br>
            Email: ${engineerEmail}<br>
            Github: ${engineerGit}</p>
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
      name: 'engineerNameTwo',
      message: 'What is the name of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerIDTwo',
      message: 'What is the Employee ID of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerEmailTwo',
      message: 'What is the Email Address of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerGitTwo',
      message: 'What is the Git Hub username of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'internNameTwo',
      message: 'What is the name of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internIDTwo',
      message: 'What is the Employee ID of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internEmailTwo',
      message: 'What is the Email Address of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internGitTwo',
      message: 'What is the Git Hub username of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
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
      name: 'engineerNameThree',
      message: 'What is the name of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerIDThree',
      message: 'What is the Employee ID of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerEmailThree',
      message: 'What is the Email Address of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerGitThree',
      message: 'What is the Git Hub username of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'internNameThree',
      message: 'What is the name of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internIDThree',
      message: 'What is the Employee ID of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internEmailThree',
      message: 'What is the Email Address of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internGitThree',
      message: 'What is the Git Hub username of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
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
      name: 'engineerNameFour',
      message: 'What is the name of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerIDFour',
      message: 'What is the Employee ID of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerEmailFour',
      message: 'What is the Email Address of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'engineerGitFour',
      message: 'What is the Git Hub username of the engineer you would like to add?',
      when: (answers) => answers.addEngineer === true,
    },
    {
      type: 'input',
      name: 'internNameFour',
      message: 'What is the name of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internIDFour',
      message: 'What is the Employee ID of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internEmailFour',
      message: 'What is the Email Address of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
    {
      type: 'input',
      name: 'internGitFour',
      message: 'What is the Git Hub username of the intern you would like to add?',
      when: (answers) => answers.addIntern === true,
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
