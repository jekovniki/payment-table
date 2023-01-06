import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import TablePage from "./Table";
import MerchantPage from "./Merchant";

const Navigation = () => {
    
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<TablePage />} />
                <Route exact path="/merchant/:id" element={<MerchantPage />} />
            </Routes>
        </Router>
    )
}

export default Navigation