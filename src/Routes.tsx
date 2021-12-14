import React from "react";
import {
    BrowserRouter,
    Routes as Switch,
    Route
  } from "react-router-dom";

import InitialPage from "./Pages/InitialPage";
import ConfirmationPage from "./Pages/ConfirmationPage";
import TestPage from "./Pages/TestPage";


const Routes = () => {
   return(
       <BrowserRouter>
        <Switch>
            <Route path="/" element={<InitialPage/>} />
            <Route path="/confirmation/:amount" element={<ConfirmationPage/>} />
            <Route path="/test/:amount" element={<TestPage/>} />
            <Route path="*" element={<InitialPage/>} />
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;