#FRONT-END WITH REACT

## Get Started
To get started coding **React** as quickly as possible use [Create React App](https://github.com/facebook/create-react-app).
**Create React App** is a command line tool which creates a starter project for you.

Create a new project and start developing use command ([Creating a project doc](https://github.com/facebook/create-react-app#creating-an-app)):
```
npx create-react-app my-app
cd my-app
npm start
```

Create a new project with **TypeScript** ([Adding TypeScript doc](https://create-react-app.dev/docs/adding-typescript/#installation))
```
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript
```

Add React debugging tools to the **Chrome Developer Tools**. It allows you to inspect the React component hierarchies in the **Chrome Developer Tools**. [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

If you are going to use state manager use => **Redux DevTools** for debugging application's state changes ([Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)).

## Architecture
  
- **State Manager**

  **[Redux](https://redux.js.org/introduction/getting-started/)** is going to play a huge role in your application as a state manager.
  Before getting started with **Redux** you should know principles of **[Flux methodology](https://ru.wikipedia.org/wiki/Flux-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0)**.
  The Redux store is the main aspect of your application.
  
- **Side Effects** 
   
   **[Redux Saga](https://redux-saga.js.org/)**: Used for managing **side-effects** such as dispatching actions asynchronously or accessing browser data.
   If your application is going to interact with some **back-end** application for data, we recommend using **redux saga** for **side effect** management.
