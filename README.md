# Polar Pals

## Overview
**_CSCI 2715 Human-Computer Interaction_**

**Authors**: [Lexe Le](https://github.com/ldinhle), [Rain Jocas](https://github.com/rainjocas), [Jimmy Song](https://github.com/jsong4), [Neil Bam](https://github.com/nbam1), [Lily Huynh](https://github.com/lilynhuynh)

**Last Updated**: May 12, 2025

This project was developed in **CSCI 2715 Human-Computer Interaction** over the course of the Spring 2025 semester. Polar Pals is an web application that allows Bowdoin students to form new friendships, anonymously. Similar to DataMatch and MarriagePact, individuals will be asked to respond to a quick preliminary questionnaire that consist of fun written prompts, personal values, and descriptions that best describe them. Based on their response, individuals with similar responses are more likely to match. But here's the catch, you are not limited to only 1 or a couple matches forever, users can continuously edit their profiles and edit their preferences and dealbreakers in terms of values to see a new pool of potential matches from all registered students. However, we are focusing on friendships (which could of course always become romantic down the line) rather than romantic relationships. In concept, we would like to create a platform where individuals who are matched together can get to know each other anonymously before they meet in person. This is to encourage people to get past their initial fears and biases, such as class year, major, social circles, etc. In doing so, we hope to help start lasting, meaningful friendships among Bowdoin students.

### Features
- **Quick & Easy Profile Questionnaire**: New users are prompted to create their profile by filling out a quick questionnaire that consists of written prompts and responses, personal values, descriptors, and persona customization!
- **Intuitive Match Algorithm**: Users are able to view their top 10 closest matches based on their profile responses. These matches are displayed as nodes of their polar bear persona where the closer a node is to the center, the more similar that persona is to your own profile.
- **Polar Bear Persona Customization**: Users can customize and make their anonymous profile more personal! Users have the freedom to choose from the whole color scale and a set of unique accessories.
- **Preferences and Dealbreakers**: Users can filter matches with specific dealbreakers as well. Similar to the personal values they set during profile creation, they can alter their matches on certain values they would not like to match with, allowing for more user freedom and control.
- **Accessible User Interface**: The color palette and font, etc. are all up to accessibility guidelines ensuring that Polar Pals is accessible to all Bowdoin students!

> [!NOTE]
> **UPLOADING DESIGNS** Due to security protocols by JavaScript, there is no easy way to directly download the saved designs to the project folder. The same can be said for file uploads within the browser as a form input, thus **users MUST move any (valid) designs into the correct project folder to be used**. Please move all files to the `assets/ornament_designs` folder.

### Version Control
This project uses Git an GitHub for tracking commits and managing project development. Please see the GitHub repository for the full development of the application:
https://github.com/jsong4/HCI_PQ

## Setup
> [!NOTE]
> If you would like to locally test the server, please install the LiveServer extension on Visual Studio Code. Else, open the project folder on your device, right click on index.html and open in your browser of choice.

This website is available at https://jsong4.github.io/HCI_PQ/index.html but as stated in the note, you can also run this locally on your device.

This application uses **localStorage** so please ensure that your device allows for localStorage access. If this is not permitted, please configure your localStorage for our application to work properly.

## Usage
This program can be accessed by cloning the repository from the provided GitHub link above or on the provided link above.
> [!CAUTION]
> Please refer to the **Setup** section before running the program.

## Limitations
Due to a limited amount of users, we have created multiple test users to ensure that our match algorithm works properly as it assumes there are at LEAST 10 users in the users list. Furthermore, because of the limited users, our chat inbox is using test users to show how the chat inbox should look like and work but you cannot actually chat with another user listed in the side bar.