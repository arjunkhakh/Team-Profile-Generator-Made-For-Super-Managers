const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const questions = [
    {
        type: "input",
        message: "Hello and Welcome to this application on creating your Team Profile! Lets get started with your Manager. What is your managers name?",
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
]