// Choose to write down each link since each license is associated with a different URL
function renderLicenseBadge(data) {
  if (license === "Mozilla Public 2.0") {
    return `![GitHub](https://img.shields.io/badge/license-MPL--2.0-orange?style=for-the-badge)`
  } else if (license === "Apache 2.0") {
    return `![GitHub](https://img.shields.io/badge/license-Apache--2.0-orange?style=for-the-badge)`
  } else if (license === "MIT") {
    return `![GitHub](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)`
  }
  return ""
}

// Choose to check for the NONE first since all the other options would require the same License Badge just different name
function renderLicenseLink(license) {
  if (license === "NONE") {
    return ""
  }
  return `- [License](#license)`
}

function renderLicenseSection(license) {
  if (license === "NONE") {
    return ""
  }
  return `## License
  Copyright (c) 2021 Israel M Rios.
  Licensed under the ${license} license.`
}

// Added the pre-filled information so the username and email can simply just be added by the app
// If a license is chosen the section will be added here
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  To find more information and the repository on this project please visit my [GitHub](https://github.com/${data.username}).

  For any additional questions please email me at ${data.email}.
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;