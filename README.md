# KTutors
KTutors is an Ionic App displaying a list of tutors from Firestore collection in Firebase.

## Description

The tutors2 app is a mobile app designed to connect Kalamazoo College students with Kalamazoo College student tutors. 
When the app is first launched, a user authentication page is displayed. Here the user signs in with their username and password, if the user does not yet have an account, there is a create account option. Once inside the app, there are two different pages. The dashboard page is where the listing of tutors occurs. It contains a scrollable list of tutor profiles (containing the name, class year, email, and subjects tutoring). The second tab leads to an information page that includes a tutor input form. On this page you can enter the information for a tutor (name, class year, email, and subjects tutoring). The new tutor profile will automatically be created and displayed on the dashboard. 

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 

Clone the project [GitHubProject](https://github.com/khaywood2019/tutorApp.git)

Once the project is cloned, you can open it up in an editor to view, we used VS Code. To run the project, type "ionic serve" in the terminal. If you want the app to display as it would look on a mobile device, type "ionic serve --lab". 

## How to Navigate the App

Once the app has been launched, the next step is to sign into the app. At the sign in page, you can sign in with out username and password if you have logged in before. If you are a new user, you can create an account. If you have an account, but forgot your password, you can set up a new password through your registered email. 

Once you enter the app, there are two tabs at the bottom. The first tab is the dashboard, and the second tab is an information tab. The dashboard has a scrolling list of tutors with their contact email and subjects they tutor. A user would look through, find a tutor they are interested in, and contact the tutor directly with the listed email. If a user wants to become a tutor, they can go to the information tab and fill out a form with their information. Information to input includes name, email, class year, and subjects to tutor. This information will then display on the dashboard as a new tutor card. To log out of the app, navigate to the menu at the top of the page and click the logout button. 

## Current Status of App

Currently, we believe that our app is fully functional for the components that are included. The user authentication works successfully in verifying app users. Once in the app, the dashboard displays the documents from the intended collection in our Firestore database. The form for tutors to fill out with their information work well and adds the tutor as a document to our tutor collection in our database. Our security is limited and has not been modified to check if users are Kalamazoo College student. We had intended to have a search bar at the top of the dashboard page, but we were not able to connect it and removed it from the project. 

## Connecting your own Firestore Database
If you want to be able to access the database directly, you will have to set up your own database. We chose to use Firestore through Firebase for our database. To do this, you set up your own Firebase and install Firebase within your project. You then create a project within Firebase and start Firestore. Make sure that in the rules of Firestore you change the reading value to true. Once in Firestore, create a collection called TutorInfo. Then add documents to this collection. Documents should have the fields of "Name", "Email", "Year", and "Subjects". To fully connect the app with your Firebase and Firestore, you have to put your firebase apiKey, authDomain, databaseURL, projectId, storageBucket, and messagingSenderID into both environment.prod.ts and environment.ts files. 

## Credits

This software uses the following open source package:

- [Node.js](https://nodejs.org/)
- [Firestore](https://firebase.google.com/docs/firestore)

Authors:

Amalia Scorsone, Terry Nuechterlein, Kate Haywood, and Kylah Davis
