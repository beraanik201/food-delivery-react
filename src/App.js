
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
// import { Outlet } from 'react-router-dom';
import About from './Components/About';
import { createBrowserRouter,  Outlet } from "react-router-dom";
import Contact from './Components/Contact';
import Error from './Components/Error';
// import RestaurantMenu from './Components/RestaurantMenu';




/*
Structure-
          1) Header-
                   -Logo
                   -Nav Items
                   -Cart
          2) Body-
                   -Search Bar
                   -Restaurant List
                   -Restaurant Card-
                                    -Image
                                    -Name
                                    -Rating
          3) Footer- 
                    -Links
                    -Copyrights                                 
*/

//App is the parent component.inside the App there will be all components.
function App() {
  return (
    <>
    
    <Header/>
    <Outlet/>
    </>
  );
}

const appRouter = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
    //Children routes using <Outlet/>
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/restaurant/:resId",
      //   element: <RestaurantMenu />,
      // },
    ],
    errorElement : <Error/>
  },
  
]);
     
  


// export default App;
export {App,appRouter};

 