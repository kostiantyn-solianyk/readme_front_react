**FRONT-END WITH REACT**

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
    
    **Installations**
    ```
    npm install redux
    # or
    yarn add redux
    ```
  
- **Side Effects** 
   
    **[Redux Saga](https://redux-saga.js.org/)**: Used for managing **side-effects** such as dispatching actions asynchronously or accessing browser data.
    If your application is going to interact with some **back-end** application for data, we recommend using **redux saga** for **side effect** management.
    
    **Installations**
    ```
    npm install redux-saga
    # or
    yarn add redux-saga
    ```
     
    **[Redux Thunk](https://github.com/reduxjs/redux-thunk)**
    is a **[middleware](https://searchapparchitecture.techtarget.com/definition/middleware)** that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.
    
    **Installations**
    ```
    npm install redux-thunk
    # or
    yarn add redux-thunk
    ```
    
- **Routing In App** 

    **[React Router](https://reacttraining.com/react-router/web/guides/quick-start)** If you have a lot of routes, especially with a lot of nested **Route** and **Switch** components, you may want to pick React Router. It will be 100% backward compatible, offering an incremental migration path to the new hook-based APIs.

    **Installations**
    ```
    npm install react-router-dom
    # or
    yarn add react-router-dom
    ```
    
- **File Structure (directory layout)** 
    
    **Project Structure.**
    In general, you can choose a structure that will be convenient for your future project, **BUT** there is some recommendations.
    
    ```
        my-app
        ├── ...
        └── src/ app main folder
            └── assets/ - Images, icons, vendors, even SASS mixins(as a centralized access point)
                ├── images/
                ├── icons/
                └── vendors/
            └── components/ - Components which are shared among multiple components/pages of your application
                └── Input/
                └── Button/
                └── DatePicker/
                └── Tabs/
            ├── domain/ - redux actions, reducers, selectors + redux config
            ├── layouts/ - wrapper components with one centralized design principle with the same styles
                └── AuthLayout/                               
                └── MainLayout/                              
            └── pages/ - app screens
                └── exampleScreen/
                    ├──components/
                    ├── index.js
                    └── styles.sass
                └── index.jsx - wrapper for Routes
            ├── routes/ - Routes [represented as array or ...], returns <Switch> Component
                └── index.jsx - wrapper for Routes | will be imported in src/pages/index.jsx as <Switch> Component
            ├── styles/ - base styles for the application
            └── utils/ - application services, e.g. API clients
                
                
    ```
    
- **Styleguide** 
  - **[ESLint](https://eslint.org/)**
  - **[Prettier](https://prettier.io/)**
  - **[precommit hooks](https://githooks.com/)**
  
## Recommended
  - [axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js
  - [react-select](https://react-select.com/home) - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
  - [redux-form](https://redux-form.com/8.3.0/) - The best way to manage your form state in Redux
  - [redux-form-input-masks](https://www.npmjs.com/package/redux-form-input-masks) - offer simple APIs to create these masks
  - [react-quill](https://github.com/zenoamaro/react-quill) - simple editor
  - [react-datepicker](https://www.npmjs.com/package/react-datepicker) - A simple and reusable Datepicker component for React
  - [query-string](https://www.npmjs.com/package/query-string) - Parse and stringify URL query strings
  - [moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript
  - [lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras
