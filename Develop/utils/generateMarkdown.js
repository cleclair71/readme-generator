// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-pink.svg)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[license](#license)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
 // generate table of contents bases on responses
  let tabCon = ### Table of Contents;

 * [Getting Started](#gettingStarted) 

  * [Usage](#usage) 

 * [Contributing](#contributing) 

 * ${renderLicenseLink(data.license)}



 // readMe template
 <a name="readme-top"></a>

 <br />
 <div align="center">
    <a href="">
     <img src="" alt="Logo" width="200" height="200">
   </a>
    <h1 align="center">${data.title}</h1>
    <p align="center">
      ${data.tagline}
    </p>
  </div>

  ## About The Project

  ![screenshot](https://user-imagesexample./screenshot.JPG)

  ${data.description}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  
  // add table of contents to template


  // add built with to template
  
  ### Built With
  ${data.builtWith}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  

  
  ## Installation
  ${data.installation}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  // add usage to template
  
  ## Usage
  ${data.usage}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  

 
     ## Contributing

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


    ## Resources
  ${data.resources}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ${renderLicenseSection(data.license)}
  ${data.license}
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>

  ## Tests
  ${data.tests}

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions?

    If you have any questions about this project, please don't hesitate to reach out to me. I'm always happy to help and provide additional information.

    ### How to Ask a Question
    1. **Check the existing documentation:** Before asking a question, please take a moment to review the existing documentation. Your question may already be answered in the README file or other project documentation.

2. **Create a new issue:** If you can't find the answer to your question in the documentation, please create a new issue in the project's issue tracker. Be sure to provide as much detail as possible about your question, including any relevant code snippets or screenshots.
[My Repository](#${data.repo})
[My Github](#${data.username})

3. **Contact me directly:** If you prefer to contact me directly, you can do so by sending me an email at ${data.email}. Please include "Question about ${data.title}" in the subject line so that I can quickly identify your message.

### Feedback and Suggestions

I welcome feedback and suggestions for this project. If you have ideas for how to improve the project, please feel free to create a new issue or contact me directly. Your input is greatly appreciated!





  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
 


`;
}

module.exports = generateMarkdown;
