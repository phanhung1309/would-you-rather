# Would You Rather? project

This is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

This project uses semantic-ui-react, redux-toolkit, redux-persist:

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file
├── public
│   ├── assets # User avatar icon.
│   └── index.html 
└── src
    ├── App.css # Styles for your app
    ├── App.js # This is the root of your app. Contains the route of application and initial data.
    ├── components  # This folder contains common components for reusing
    ├── services  # Contains mock database and functionality
    ├── pages  # This folder contains pages corresponding with the particular route
    ├── store  # Contains slices of actions and reducers
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

The router structure includes:
```bash
// Private routes (need authentication to reach)
    ├── '/' - Home screen 
    ├── '/add' - Add new question screen 
    ├── '/question/:questionId' - Question details screen 
    ├── '/leaderboard' - LeaderBoard screen 

// Public routes
    ├── '/login' - Login screen 
    ├── '*' - Not found screen 
```

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
