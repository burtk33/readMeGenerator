const fs = require('fs');
const inquirer = require('inquirer');
const generateRM = require('./generateMarkdown.js')


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installInstruct',
        },
        {
            type: 'input',
            message: 'Enter usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter test instructions:',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines:',
            name: 'contrib',
        },
        {
            type: 'checkbox',
            message:'Choose a license:',
            choices: ['Apache2.0', 'MIT', 'GNUGPLv3'],
            name: 'license',

        },
        {
            type: 'input',
            message: 'Enter your Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address:',
            name: 'email',
        },
        
    ])
    .then((data) => {
        const newReadMe=generateRM(data);
        fs.writeFile('README.md', newReadMe, (err) =>

            err ? console.error(err) : console.log('README generated succesfully')
        )
    });