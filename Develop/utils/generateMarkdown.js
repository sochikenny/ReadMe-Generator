// const api = require("./api");

function generateMarkdown(answers, user) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents

*[Installation](#installation) \n

*[Usage](#usage) \n

*[License](#license) \n

*[Badges](#badges) \n

*[Contributing](#contributing) \n

*[Tests](#tests) \n

*[Questions](#questions) \n

------------

## Installation
${answers.installation}

------------

## Usage
${answers.usage}

------------

## License
${answers.license}

------------

## Badges
${answers.badges}

------------

## Contributing
${answers.contributing}

------------

## Tests
${answers.tests}

------------

## Questions
${answers.questions}

------------

### Contact Me
![](${user.avatar_url})
* email: ${user.email}
`;

}

module.exports = generateMarkdown


