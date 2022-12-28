import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import TablePage from "./Table";

const Navigation = () => {
    
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<TablePage />} />
                <Route exact path="/merchant/:id" element={<TablePage />} />
            </Routes>
        </Router>
    )
}

export default Navigation