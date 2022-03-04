const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const inq = require("inquirer");
const fs = require("fs");

const questions1 = [
    {
        type: "input",
        message: "What is your Managers name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is your Managers ID Number?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is your Managers Email Address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is your Managers Office Number?",
        name: "managerNumber",
    },
    {
        type: 'list',
        name: 'list',
        message: 'What Would You Like To Add Next?',
        choices : [
            'Engineer',
            'Intern',
            'No More Members'
        ],
    }
]

const questions2 = [
    {
        type: "input",
        message: "What is your Engineers name?",
        name: "EngineerName",
    },
    {
        type: "input",
        message: "What is your Engineers ID Number?",
        name: "EngineerID",
    },
    {
        type: "input",
        message: "What is your Engineers Email Address?",
        name: "EngineerEmail",
    },
    {
        type: "input",
        message: "What is your Engineers Github?",
        name: "EngineerGithub",
    },
    {
        type: 'list',
        name: 'list',
        message: 'What Would You Like To Add Next?',
        choices : [
            'Engineer',
            'Intern',
            'No More Members'
        ],
    }
]

const questions3 = [
    {
        type: "input",
        message: "What is your Interns name?",
        name: "InternName",
    },
    {
        type: "input",
        message: "What is your Interns ID Number?",
        name: "InternsID",
    },
    {
        type: "input",
        message: "What is your Interns Email Address?",
        name: "InternsEmail",
    },
    {
        type: "input",
        message: "What is your Interns School?",
        name: "InternsSchool",
    },
    {
        type: 'list',
        name: 'list',
        message: 'What Would You Like To Add Next?',
        choices : [
            'Engineer',
            'Intern',
            'No More Members'
        ],
    }
]

function generateMarkdown1(data) {
    return `
          <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

    <header>
       <h1>Team Profile!</h1>
    </header>
    
<body>
        <div class="card-body centre">
        <div class="card m-5" style="width: 89rem;">
        <div class="card-body centre">
          <h5 class="card-title">${ data.managerName }</h5>
          <p class="card-text">ID Number: ${ data.managerID }</p>
          <p class="card-text">Email: ${ data.managerEmail }</p>
          <p class="card-text">Office Number: ${ data.managerNumber }</p>
        </div>
      </div>
      </div>
</body>
</html>
          
    `;
  }

  function generateMarkdown2(data) {
    return `
        <div class="card m-5" style="width: 91rem;">
            <div class="card-body centre">
              <h5 class="card-title">${ data.EngineerName }</h5>
              <p class="card-text">ID Number: ${ data.EngineerID }</p>
              <p class="card-text">Email: ${ data.EngineerEmail }</p>
              <p class="card-text">Github: ${ data.EngineerGithub }</p>
            </div>
          </div>
    `;
  }

  function generateMarkdown3(data) {
    return `
        <div class="card m-5" style="width: 91rem;">
            <div class="card-body centre">
              <h5 class="card-title">${ data.InternName }</h5>
              <p class="card-text">ID Number: ${ data.InternID }</p>
              <p class="card-text">Email: ${ data.InternEmail }</p>
              <p class="card-text">School: ${ data.InternsSchool }</p>
            </div>
          </div>
    `;
  }

function writeToFile(filename, data) {
    fs.appendFile(filename, generateMarkdown1(data), function (err) {
        if (err) throw err;
        console.log("Saved!");
      })
}

function writeToFile1(filename, data) {
    fs.appendFile(filename, generateMarkdown2(data), function (err) {
        if (err) throw err;
        console.log("Saved!");
      })
}

function writeToFile2(filename, data) {
    fs.appendFile(filename, generateMarkdown3(data), function (err) {
        if (err) throw err;
        console.log("Saved!");
      })
}


inq.prompt(questions1).then((answers) => {
    writeToFile(__dirname + "/dist/index1.html", answers);

    if (answers.list === "Engineer") {
        inq.prompt(questions2).then((answers) => {
            writeToFile1(__dirname + "/dist/index1.html", answers);

            if (answers.list === "Intern") {
                inq.prompt(questions3).then((answers) => {
                    writeToFile2(__dirname + "/dist/index1.html", answers);
                }
                )
            }
        }
        )
    }

    if (answers.list === "Intern") {
        inq.prompt(questions3).then((answers) => {
            writeToFile2(__dirname + "/dist/index1.html", answers);

            if (answers.list === "Engineer") {
                inq.prompt(questions2).then((answers) => {
                    writeToFile1(__dirname + "/dist/index1.html", answers);
                }
                )
            }
        }
        )
    }

    if (answers.list === "No More Members") {
        return;
    }
        
  }
  )


  
