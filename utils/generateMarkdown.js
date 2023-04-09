// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'Apache_2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'GPL_v2') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  }
  if (license === 'CC0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return `## License
    This app is licensed under the ${license} license.`
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Licenses](#licenses)
  * [Badges](#badges)
  * [How to Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}

  ${renderLicenseSection(data.license)}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## How to Contribute
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Questions about this app?
  GitHub: https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
