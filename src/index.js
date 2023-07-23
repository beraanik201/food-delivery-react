import React from 'react';
import ReactDOM from 'react-dom/client';
import {appRouter} from "./App";
import {  RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {App} from './App';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Error from './Components/Error';
// import Body from './Components/Body';


// const appRouter = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <App />,
//     children:[
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//     errorElement : <Error/>
//   },
  
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouter}/>
  // <React.StrictMode>
   
  //   <App />
  
  // </React.StrictMode>
);
reportWebVitals();
