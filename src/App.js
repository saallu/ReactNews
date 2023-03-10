import logo from './logo.svg';
import './App.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./Components/Router/Routes";
import {Toaster} from "react-hot-toast";

function App() {
  return (
  <>

    <RouterProvider router={routes}></RouterProvider>
    <Toaster></Toaster>

  </>
  );
}

export default App;
