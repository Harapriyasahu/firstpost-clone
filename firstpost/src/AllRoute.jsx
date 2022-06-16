import React from 'react';
import {Routes,Route} from "react-router-dom";
import Auto from "./pages/Auto";
import Home from "./pages/Home";
import Cricket from "./pages/Cricket";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import India from "./pages/India";
import Opinion from "./pages/Opinion";
import Politics from "./pages/Politics";
import Sports from "./pages/Sports";
import Tech from "./pages/Tech";
import World from "./pages/World";
import Navbar from "./pages/Navbar";
import Homedata from './pages/Homedata';

export const AllRoute = () => {
    return (
        <>
        <Navbar/>
        <Routes>
            
            <Route path={"/"} element={<Homedata/>}/>
            <Route path={"/health"} element={<Health/>}/>
            <Route path={"/india"} element={<India/>}/>
            <Route path={"/world"} element={<World/>}/>
            <Route path={"/politics"} element={<Politics/>}/>
            <Route path={"/auto"} element={<Auto />}/>
            <Route path={"/opinion"} element={<Opinion/>}/>
            <Route path={"/sports"} element={<Sports/>}/>
            <Route path={"/cricket"} element={<Cricket/>}/>
            <Route path={"/entertainment"} element={<Entertainment/>}/>
            <Route path={"/tech"} element={<Tech/>}/>

        </Routes>

        </>
    );
}

