import React from "react";
import {
    BrowserRouter,
    Routes as Switch,
    Route
  } from "react-router-dom";

import InitialPage from "./Pages/InitialPage";
import ConfirmationPage from "./Pages/ConfirmationPage";


const Routes = () => {
   return(
       <BrowserRouter>
        <Switch>
            <Route path="/" element={<InitialPage/>} />
            <Route path="/confirmation" element={<ConfirmationPage/>} />
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;