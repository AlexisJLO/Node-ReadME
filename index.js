const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        }   ,
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short discription explaining your project: ',
        },   
        {
            type: 'input',
            name: 'table',
            message:'What would you like in your Table of contents?',
        } ,  
        {
            type: 'input',
            name: 'installation',
            message: '',
        },
        {
            type: 'input',
            name: 'usage',
            message: '',
        } , 
        {
            type: 'options',
            name: 'license',
            message: {
                Option1: 'test',
                Option2: 'test 2',
                Option3: 'test 3',
            }
        }  ,
        {
            type: 'input',
            name: 'contributing',
            message: '',
        }  ,
        {
            type: 'input',
            name: 'tests',
            message: '',
        }  ,
        {
            type: 'input',
            name: 'questions',
            message: '',
        }     
        
    ])