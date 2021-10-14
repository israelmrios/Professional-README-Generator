// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.choices = "Mozilla Public License 2.0"){
    return `![GitHub](https://img.shields.io/badge/license-MPL--2.0-orange?style=for-the-badge)`
  }else if(data.choices = "Apache License 2.0"){
    return `![GitHub](https://img.shields.io/badge/license-Apache--2.0-orange?style=for-the-badge)`
  }else if(data.choices = "MIT License"){
    return `![GitHub](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)`
  }else
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.choices = "Mozilla Public License 2.0"){
    return `mplLICENSE.txt`
  }else if(data.choices = "Apache License 2.0"){
    return `apacheLICENSE.txt`
  }else if(data.choices = "MIT License"){
    return `mitLICENSE.txt`
  }else
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.choices = "Mozilla Public License 2.0"){
    return `## License
    Copyright (c) 2021 Israel M RIos.
    Licensed under the [MPL-2.0](${renderLicenseLink(data.license)}) license.`
  }else if(data.choices = "Apache License 2.0"){
    return `## License
    Copyright (c) 2021 Israel M RIos.
    Licensed under the [Apache-2.0](${renderLicenseLink(data.license)}) license.`
  }else if(data.choices = "MIT License"){
    return `## License
    Copyright (c) 2021 Israel M RIos.
    Licensed under the [MIT](${renderLicenseLink(data.license)}) license.`
  }else
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge()}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  To find more information on this project please visit my GitHub at ${data.username}.

  For any additional questions please email me at ${data.email}.

  ${renderLicenseSection()}
`;
}

module.exports = generateMarkdown;
