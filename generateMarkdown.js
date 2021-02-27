//function that renders a badge for the license
function renderLicenseBadge(license) {
    let badge=`![License Badge](https://img.shields.io/static/v1?label=License&message=${license.license}&color=blue)`;
    return badge;

}

//function that renders a link to txt file containg license
function renderLicenseLink(license) {
    let selectedLicense=license.license;
    console.log(selectedLicense);
    let licenseLink="";

    if(selectedLicense ==="Apache2.0"){
        licenseLink="![License Link](./licenses/Apache.txt)";
        
    }
    if(selectedLicense ==='MIT'){
        licenseLink="![License Link](./licenses/MIT.txt)";
    }
    if(selectedLicense ==='GNUGPLv3'){
        licenseLink="![License Link](./licenses/GNU.txt)";
    }
    return licenseLink;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let badge=renderLicenseBadge(data);
    let licenseLink= renderLicenseLink(data);
    console.log(data.license);
    console.log('Link: '+licenseLink);
    let generatedRM = 
    `${badge}
# ${data.title}

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
*This project uses the ${data.license} license.
*Read more about it by clicking the link below 
${licenseLink}

## Questions
[Github Profile](https://github.com/${data.github})

*I can be reached via email at ${data.email}*
`
    return generatedRM;
}

module.exports=generateMarkdown;
