// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-pink.svg)`
  } else {
    return ''
  }
}

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[license](#license)`
  } else {
    return ''
  }
}

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## :clipboard: License`
  } else {
    return ''
  }
}

// generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  <a name="readme-top"></a>
 <br />
 <div align="center">
 <h1 align="center">${data.title}</h1>
    <a href="">
     <img src="" alt="Logo" width="200" height="200">
   </a>
    <p align="center">
      ${data.tagline}
    </p>
  
    </div>
    <br />
    <details><summary>Table of Contents;</summary>

* [About the Project](#description) 
 
* [Installation](#installation)
 
* [Usage](#usage) 

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#email)
 
* ${renderLicenseLink(data.license)}

</details>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="description"></a>

## :rocket: About The Project

![screenshot](https://user-imagesexample./screenshot.JPG)

${data.description}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="installation"></a>

## :hammer_and_wrench: Installation

${data.installation}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

  <a name="usage"></a>

## :computer: Usage
  ${data.usage}

<p align="right">(<a href="#readme-top">back to top</a>)</p>
  
 <a name="contributing"></a>

## :handshake: Contributing

Thank you for your interest in contributing to this project! By contributing, you can help make this project even better for everyone.

### How to Contribute

If you would like to contribute to this project, please follow these steps:
      
1. **Fork the Project:** Fork this project to your own GitHub account.

2. **Create your Feature Branch:** Create a branch for your feature using git checkout -b your-branch-name.

3. **Commit your Changes:** Commit your changes using git commit -m "Your commit message here".

4. **Push to the Branch:** Push your changes to the branch using git push origin your-branch-name.

5. **Open a Pull Request:** Open a pull request to merge your changes into the main branch of the original project.

### Contributors

We would like to extend our heartfelt thanks to the following individuals who have contributed to this project:

* ${data.contributing}

If you have contributed to this project and your name is not on this list, please let us know so that we can add you. Your contributions are greatly appreciated!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="license"></a>

${renderLicenseSection(data.license)}
${data.license}
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="tests"></a>

## :heavy_check_mark: Tests

${data.tests}

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="questions"></a>

## :mailbox_with_no_mail: Questions?

If you have any questions about this project, please don't hesitate to reach out to me. I'm always happy to help and provide additional information.

### How to Ask a Question

1. **Check the existing documentation:** Before asking a question, please take a moment to review the existing documentation. Your question may already be answered in the README file or other project documentation.

2. **Create a new issue:** If you can't find the answer to your question in the documentation, please create a new issue in the project's issue tracker. Be sure to provide as much detail as possible about your question, including any relevant code snippets or screenshots.

[My Repository](${data.repo}) <br />


3. **Contact [My Github](#${data.username}) directly:** If you prefer to contact me directly, you can do so by sending me an email at ${data.email}. Please include "Question about ${data.title}" in the subject line so that I can quickly identify your message.

### :pray: Feedback and Suggestions

I welcome feedback and suggestions for this project. If you have ideas for how to improve the project, please feel free to create a new issue or contact me directly. Your input is greatly appreciated!
 
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
 
`;
}
// markdown data that will be rendered in the README file in \Develop
module.exports = generateMarkdown;
