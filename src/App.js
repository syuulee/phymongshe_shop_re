import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './pages/Main';
import './css/reset.css';
// https://desipossa.github.io/shop_cra/assets/data.json


const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App;


// state와 props의 차이는?