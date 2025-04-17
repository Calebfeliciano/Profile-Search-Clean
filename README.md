# Profile Search

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
The Profile search website allows you to sift through potential candidates using their Github profiles.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Profile Search

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description
The Profile Search website allows you to sift through potential candidates using their GitHub profiles. You can view information such as their name, location, company, and bio, then choose to shortlist or reject them. Shortlisted profiles are stored locally in your browser for later viewing.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
In your intended folder, clone the repo using:

```bash
git clone https://github.com/Calebfeliciano/profile-search.git
cd profile-search
npm install
```
Create a .env file in the root directory and add your GitHub API token:

VITE_GITHUB_TOKEN=your_github_token_here
Then start the development server:

```bash
npm run dev
```

## Usage

Once running, the homepage (/) allows you to review GitHub profiles one by one.

✅ Click the green check icon to shortlist a candidate.

❌ Click the red X icon to reject a candidate.

📁 Navigate to /saved to view your saved candidates.

🔁 New profiles are fetched in batches using the GitHub API.

## License

This project is licensed under the MIT license.

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. Be sure to keep your changes well-documented.


## Questions
If you have any questions, please feel free to contact me:
* GitHub: [Calebfeliciano](https://github.com/Calebfeliciano)
* Email: Caleb.feliciano11@gmail.com
