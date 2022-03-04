const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const inq = require("inquirer");

const questions = [
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

function writeToFile(filename, data) {
    fs.writeFile(filename, generateMarkdown(data), function (err) {
        if (err) throw err;
        console.log("Saved!");
      })

      ;
}

inq.prompt(questions).then((answers) => {
    writeToFile("index.html", answers);
  }
  )
