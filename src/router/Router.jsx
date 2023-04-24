import { Routes, Route } from "react-router-dom";


import Supersmm from "../pages/Supersmm"


const RouterProvaider = () =>{
    return(
        <Routes>
            <Route path=""  element={<Supersmm/>} />
           <Route path="/supersmm"  element={<Supersmm/>} />
          
          
      </Routes>
    )
}
export default RouterProvaider