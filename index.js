const fs = require('fs');
const inquirer = require('inquirer');

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
      message: 'Enter table of contents:',
      name: 'tableOfContents',
    },
    {
      type: 'input',
      message: 'Enter installation instructions:',
      name: 'installInstruct',
    },
    {
      type: 'input',
      message: 'Enter your Github username:',
      name: 'github',
    },
  ])
  .then((data) => {

    fs.writeFile('README.md', data, (err) =>

      err ? console.error(err) : console.log('README generated succesfully')
    )
  });