import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import RouterProvaider from "./router/Router";

const App = () =>{
    return(
        <Router>
            <RouterProvaider/>
        </Router>
    )
}
export default App