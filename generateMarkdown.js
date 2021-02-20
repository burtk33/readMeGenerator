// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let generatedRM = 
    `# ${data.title}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [License](#license)
* [Questions](#questions)
    
## Description
${data.description}

## Installation Instructions
${data.installInstruct}

## Usage
${data.usage}

## Contribution Guidelines
${data.contrib}

## License

## Questions
[Github Profile](https://github.com/${data.github})

*I can be reached via email at ${data.email}*
`
    return generatedRM;
}

module.exports=generateMarkdown;
