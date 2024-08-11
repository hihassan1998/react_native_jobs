# J-Hunt - a simple job search react native application

# Overview
A react native application which fetches data from an opensource api that helps feed this application with insightfull data that is usefull for anyone who uses the application for their job search. The key websites the job postings are sourced from are LinkedIn, Indeed, Glassdoor, ZipRecruiter , Monster and other pblic listing websites.


### Screenshots
<div>
  <img src="https://github.com/user-attachments/assets/c854dbaa-5f6c-4572-9c21-887104876dae" width="200" height="430" style="margin-right: 10px;" />
  <img src="https://github.com/user-attachments/assets/afb2457e-42bc-4fae-8af5-809a9f410440" width="200" height="auto" style="margin-right: 10px;" />
  <img src="https://github.com/user-attachments/assets/5e36c5a8-885a-4158-ac3b-f29f34725ea5" width="200" height="auto" style="margin-right: 10px;" />
  <img src="https://github.com/user-attachments/assets/f23af021-c721-43a0-957b-1df6c4944f07" width="200" height="auto" style="margin-right: 10px;" />
</div>

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

### Download the Expo Go App and Scan the QR Code or follow the steps 1-4 to get started locally
- [J-Hunt Expo Go App](https://expo.dev/preview/update?message=updated%20job_apply-links&updateRuntimeVersion=1.0.0&createdAt=2024-08-11T14%3A01%3A16.739Z&slug=exp&projectId=bb2dd756-5e6a-4ebb-9453-054be945db77&group=75467954-caab-4377-acc4-56ac71fcb25d)

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
