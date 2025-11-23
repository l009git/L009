"use client";

import React, { useEffect, useCallback } from 'react';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const Home = function() {
    const handleContextMenu = useCallback((event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }, []);
    
    useEffect(() => {
        document.addEventListener('contextmenu', handleContextMenu);
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, [handleContextMenu]);
    
    return (
        <>
            <Nav />
            <Main />
            <Footer />
        </>
    );
}

export default Home;