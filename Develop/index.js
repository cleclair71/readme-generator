// <a name="readme-top"></a>

// <br />
// <div align="center">
//   <a href="">
//     <img src="" alt="Logo" width="200" height="200">
//   </a>

//   <h3 align="center">title</h3>

//   <p align="center">
//     tagline
//   </p>
// </div>



// <!-- TABLE OF CONTENTS -->
// <details>
//   <summary>Table of Contents</summary>
//   <ol>
//     <li>
//       <a href="#about-the-project">About The Project</a>
//       <ul>
//         <li><a href="#built-with">Built With</a></li>
//       </ul>
//     </li>
//     <li>
//       <a href="#getting-started">Getting Started</a>
//     </li>
//     <li><a href="#usage">Usage</a></li>
//     <li><a href="#features">Features</a></li>
//     <li><a href="#contributing">Contributing</a></li>
//     <li><a href="#license">License</a></li>
//     <li><a href="#contact">Contact</a></li>
//     <li><a href="#acknowledgments">Acknowledgments</a></li>
//   </ol>
// </details>



// <!-- ABOUT THE PROJECT -->
// ## About The Project

// example screenshot
// ![screenshot](https://user-images./screenshot.JPG)

// This is the description section of the readme. [Insert project name] is a [brief project description]. It was created to [state the project's purpose and goals]. This repository is where we [describe what's included in the repository, such as the source code, documentation, or other assets].

// <p align="right">(<a href="#readme-top">back to top</a>)</p>



// ### Built With

// list of frameworks, libraries, and other tools used in the project
// * [example](https://www.example.com/)


// <p align="right">(<a href="#readme-top">back to top</a>)</p>


// ## Getting Started

//[Provide instructions on how to set up and run the project, including prerequisites, installation steps, and any other necessary details.]


// <p align="right">(<a href="#readme-top">back to top</a>)</p>


// ## Usage
// [Provide examples or instructions on how to use the project, such as command-line arguments or API endpoints. Include screenshots or GIFs if applicable.]
// ![examplegif](https://example.gif)

// 1. example instructions
//```sh
// git clone https://github.com/your_username_/Project-Name.git
// ```
// 2. Install NPM 
// ```sh
// npm install
// ```
// <p align="right">(<a href="#readme-top">back to top</a>)</p>


// ## Features

// - [x] List the key features of the project
// - [x] Additional feature if applicable


// <p align="right">(<a href="#readme-top">back to top</a>)</p>


// <!-- CONTRIBUTING -->
// ## Contributing

// [Explain how others can contribute to the project, such as by reporting bugs, suggesting new features, or submitting code changes. Include guidelines for pull requests and any other relevant information.]



// <p align="right">(<a href="#readme-top">back to top</a>)</p>



// <!-- LICENSE -->
// ## License

// [Specify the license under which the project is released, along with any relevant terms and conditions.]

// <p align="right">(<a href="#readme-top">back to top</a>)</p>


// ## Contact

// [Provide contact information for the project maintainer or team, including email addresses or social media links, if applicable.]

// <p align="right">(<a href="#readme-top">back to top</a>)</p>



// <!-- ACKNOWLEDGMENTS -->
// ## Acknowledgments

// * [Resources you used](resourcesyouusedexample.com)



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// const api = require('./utils/api.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        default: 'yourUsername',
    },
    {
        type: 'input',
        message: "What is your project's title?",
        name: 'title',
        default: 'title',
    },
    {
        type: 'input',
        message: "If applicable, what is your project's tagline?",
        name: 'tagline',
        default: 'tagline',
    },
    {
        type: 'input',
        message: "Please write a description of your project.",
        name: 'description',
        default: 'Enter description here',
    },
    {
        type: 'input',
        message: "List the frameworks, libraries, or other tools used in the project (separate with commas).",
        name: 'builtWith',
        default: 'Built with',
    },
    {
        type: 'input',
        message: "Provide instructions on how to set up and run the project for the Installation section.",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Provide examples or instructions on how to use the project.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "If applicable, what are the github usernames of the project's contributors?",
        name: 'contributing',
    },
    {
        type: 'list',
        message: "Choose a license for your project:",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: "What resources did you use to create this project? (separate with commas)",
        name: 'resources',
    },
    {
        type: 'input',
        message: "What is the link to your repository?",
        name: 'repo',
        default: 'repo',
    },
    {
        type: 'input',
        message: "What is your email",
        name: 'email',
        default: 'email',
    },
    {
        type: 'input',
        message: "Explain any libraries used for testing your software, and give explicit instructions on how to run those tests.",
        name: 'tests',
        default: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const builtWithSection = data.builtWith.join('\n');
    // const featuresSection = data.features.map((feature) => `- [x] ${feature}`).join('\n');
    // data.templateMarkdown = data.templateMarkdown
    //   .replace('{{builtWith}}', builtWithSection)
    //   .replace('{{features}}', featuresSection);
     return fs.writeFile(path.join (process.cwd(), fileName), data); 
  }
//   const writeFileA = util.promisify(writeToFile);

  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log ("Generating markdown...");
        writeToFile('README.md', generateMarkdown(...answers));
    //   const frameworks = answers.builtWith.split(',').map((fw) => fw.trim());
    //   const data = {
    //     username: answers.username,
    //     repo: answers.repo,
    //     title: answers.title,
    //     tagline: answers.tagline,
    //     description: answers.description,
    //     builtWith: frameworks,
    //     features: answers.features.split(',').map((feature) => feature.trim()),
    //     gettingStarted: answers.gettingStarted,
    //     usage: answers.usage,
    //     contributing: answers.contributing,
    //     license: answers.license,
    //     templateMarkdown: templateMarkdown,
    //   };
     
    });
  }
  
  // Function call to initialize app
  init() {
     //api
    //  const githubUser = await api.getUser(data.username);
    //  console.log("Your Github user info: ", githubUser.data);
    //    data.profileImage = githubUser.data.avatar_url;
    //    console.log("Your profile image: ", data.profileImage);

    //    console.log ("Generating markdown...");
    //    const markdown = generateMarkdown(data);
    //    console.log(markdown);
    //    console.log("Writing to file...");
    //    await
    //  writeFileA('README.md', data);
  };
