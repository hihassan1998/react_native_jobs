# J-Hunt - a simple job search react native application

# Overview
A react native application which fetches data from an opensource api that helps feed this application with insightfull data that is usefull for anyone who uses the application for their job search. The key websites the job postings are sourced from are LinkedIn, Indeed, Glassdoor, ZipRecruiter , Monster and other pblic listing websites.

### Screenshots
| | | | |
| --- | --- | --- | --- |
| ![Screenshot 1](screenshot1.png) | ![Screenshot 2](screenshot2.png) | ![Screenshot 3](screenshot3.png) | ![Screenshot 4](screenshot4.png) |

# Features
- Job search functionality with filters (e.g., location, job type)
- Job details page with company information, job description, and requirements
- User-friendly interface with navigation and search functionality

# Tech Stack
Node.js
React Native
Axios
Expo
Stylesheet

# API Overview
JSearch by OpenWeb Ninja is a fast, reliable, and comprehensive jobs API. As the most comprehensive and maintained option available, JSearch empowers you to seamlessly access most-up-to-date job postings and salary information in real-time from Google for Jobs - the largest job aggregate on the web.
- [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)



# Getting Started
To get started with the J-Hunt application, follow these steps:

1. Clone the Repository
Clone the J-Hunt repository from GitHub using the following command:
git clone https://github.com/hihassan1998/j-hunt.git

2. Install Dependencies
Install the required dependencies using the following command:
npm install

3. Start the Development Server
Start the development server using the following command:
npx expo start

4. Open the App
Open the app in your preferred simulator or emulator by scanning the QR code displayed in the terminal.

## Directory Structure
### Root

- components/
  - common/
    - styles.js
  - pages/
    - Home.js
    - JobDetails.js
    - JobList.js
    - Search.js
  - screens/
    - HomeScreen.js
    - JobDetailsScreen.js
    - SearchScreen.js
- navigation/
  - AppNavigation.js
  - AppStack.js
- services/
  - api.js
- utils/
  - helpers.js
- App.js
- App.test.js
- index.js



# Contributing
If you'd like to contribute to the J-Hunt application, please follow these steps:

- Fork the repository on GitHub.
- Make your changes to the code.
- Submit a pull request to the main repository.

# License
The J-Hunt application is licensed under the MIT License. See the LICENSE file for more information.

I hope this updated documentation helps! Let me know if you have any further questions.