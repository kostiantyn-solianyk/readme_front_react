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
    
    Also we recommend **[redux-toolkit](https://redux-toolkit.js.org/)**. It helps configure Redux store. Provide utils for create reducers, actions and manage store. Has createAsyncThunk func in beta. It allow make async action and call request to API.
  
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
    
- **Forms** 

    **[Formik](https://jaredpalmer.com/formik/docs/api/formik)** - Is a component that helps you with building forms. It uses a render props pattern made popular by libraries like React Motion and React Router.
    `12.7kB. 50% smaller than redux-form`
    
    **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible and extensible forms with easy-to-use validation.
    `8.5kB. ~25% faster than Redux Form`
    
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
            ├── store/ - redux actions, reducers, selectors + redux config
            ├── layouts/ - wrapper components with one centralized design principle with the same styles
                └── AuthLayout/                               
                └── MainLayout/                              
            └── pages/ - app screens
                └── ExampleScreen/
                    ├──components/
                    ├── index.jsx
                    └── styles.scss
                └── index.jsx - wrapper for Routes
            ├── routes/ - Routes [represented as array or ...], returns <Switch> Component
                └── index.jsx - wrapper for Routes | will be imported in src/pages/index.jsx as <Switch> Component
            ├── styles/ - base styles for the application
            └── utils/ - application services, e.g. API clients
                
                
    ```
    
- **Styling.** We have so many great options for styling React components. Your choice should serve your use case and personal preferences.
  - **[Styled-components](https://github.com/styled-components/styled-components)** - is a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS.
  - **[CSS-in-JS - JSS](https://cssinjs.org/react-jss/?v=v10.1.1)** - Allows you to think about styles on a component level with out worrying about styles defined elsewhere. There is also a way to access **props** in your jss file. Example: `color: props => props.labelColor`
  - **[Processors - SCSS](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)** - Sass is supported in create-react-app 2.0 out of the box and becomes a common way to style components.
  
  These three, most used, but remember there is no right way to style components. Depends on how you work, the tools you use, etc. So discuss them with your team or ask recommendations and choose the one you'll integrate to your project in the right way.
    
- **Styleguide** 
  - **[ESLint](https://eslint.org/)**
  Example: `.eslintrc.js`
        
  ```
  module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
      'react/jsx-key': 2,
      'react/no-unused-prop-types': 2,
      'object-curly-spacing': ['error', 'always'],
      'react/jsx-filename-extension': ['error', {'extensions': ['.jsx', '.js']}]
    },
    settings: {
      'import/resolver': {
        node: {paths: ['./src'], extensions: ['.js']}
      },
    },
    plugins: []
  };
  ```

  - **[Prettier](https://prettier.io/)**
  Example: `.prettierrc`
      
  ```
  module.exports = {
      bracketSpacing: true,
      jsxBracketSameLine: false,
      singleQuote: true,
      jsxSingleQuote: true,
      trailingComma: 'all',
      semi: true,
      printWidth: 120
  };
  ```

  - **[precommit hooks](https://githooks.com/)** - You can find any useful hooks in doc. Required hook is **precommit**.
  
## Recommended
  - [axios](https://github.com/axios/axios) - promise based HTTP client for the browser and node.js
  - [react-select](https://react-select.com/home) - A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
  - [react-quill](https://github.com/zenoamaro/react-quill) - simple editor
  - [react-datepicker](https://www.npmjs.com/package/react-datepicker) - A simple and reusable Datepicker component for React
  - [query-string](https://www.npmjs.com/package/query-string) - Parse and stringify URL query strings
  - [moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript
  - [lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras
  - [recharts](http://recharts.org/en-US/) - A composable charting library built on React components
  - [google-map-react](https://github.com/google-map-react/google-map-react) - Google map library for react that allows rendering components as markers
  - [react-table](https://www.npmjs.com/package/react-table) - Hooks for building lightweight, fast and extendable datagrids for React
  - [socket.io-client](https://www.npmjs.com/package/socket.io-client) - Socket.IO enables real-time, bidirectional and event-based communication
  
## Utilities
  
  - **[Api client](ApiHelpers.js)** API client. Based on axios library.
