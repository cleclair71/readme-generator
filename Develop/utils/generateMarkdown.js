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
function generateMarkdown(userResponses, userInfo) {
 // generate table of contents bases on responses
  let tabCon = `### Table of Contents`;

  if (userResponses.gettingStarted !== '') { tabCon += ` * [Getting Started](#gettingStarted)` };

  if (userResponses.usage !== '') { tabCon += ` * [Usage](#usage)` };

  if (userResponses.contributing !== '') { tabCon += ` * [Contributing](#contributing)` };

 // readMe template
 let templateMarkdqwn = `<a name="readme-top"></a>

 <br />

 <div align="center">
    <a href="">
     <img src="" alt="Logo" width="200" height="200">
   </a>

    <h1 align="center">${userResponses.title}</h1>

    <p align="center">
      ${userResponses.tagline}
    </p>
  </div>

  ## About The Project

  ![screenshot](https://user-imagesexample./screenshot.JPG)

  ${userResponses.description}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  `
  // add table of contents to template
  templateMarkdqwn += tabCon;

  // add built with to template

  // add getting started to template

  // add usage to template

  // add contributing to template

  // add license to template

  // add contact to template

 
 






  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
