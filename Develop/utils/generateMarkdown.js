// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license = "Mozilla Public License 2.0"){
    return `![GitHub](https://img.shields.io/badge/license-MPL--2.0-orange?style=for-the-badge)`
  }else if(license = "Apache License 2.0"){
    return `![GitHub](https://img.shields.io/badge/license-Apache--2.0-orange?style=for-the-badge)`
  }else if(license = "MIT License"){
    return `![GitHub](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)`
  }else
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  To find more information on this project please visit my GitHub at ${data.username}.

  For any additional questions please email me at ${data.email}.

  // ## Badges
  // ${data.badges}
`;
}

module.exports = generateMarkdown;
