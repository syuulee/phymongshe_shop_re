import React, { useEffect, useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './pages/Main';
import Itm from './shop/Itm';
import Cart from './shop/Cart';
import './css/reset.css';
import './css/ShopDetail.scss';
import axios from 'axios';
import List from './shop/List';
import { Route, Routes } from 'react-router-dom';
// https://desipossa.github.io/shop_cra/assets/data.json


const App = () => {
    const [itm, setItm] = useState();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        const getProduct = async () => {
            const res = await axios.get(url);

            const shopdata = res.data.slice(50, 140).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    src: it.image_link,
                    brand: it.brand,
                    cate: it.category,
                    price: it.price * 1450,
                    des: it.description,
                    color: it.product_colors,
                    time: it.created_at,
                    type: it.product_type,
                }
            });
            setItm(shopdata);
            console.log(res.data);
            console.log(shopdata);
        }
        getProduct();
    }, [])
    return (
        <>
            <Header cart={cart} />
            {
                itm
                    ?
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/cart' element={<Cart cart={cart} />} />
                        <Route path='/shopList' element={<List shopList={itm} />} />
                        <Route path='/shopItm/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />} />
                    </Routes>
                    : <div>로딩 중</div>
            }
            <Footer />
        </>
    )
}

export default App;


// state와 props의 차이는?

// {
//     itm.map((it, idx) => {
//         return (
//             <ul>
//                 <li style={{ fontSize: '100px' }}>{idx}</li>
//                 <li>{it.name}</li>
//                 <li>{it.des}</li>
//                 <li>{it.price.toLocaleString()} 원</li>
//                 <li>{it.time} 에 올림</li>
//                 <li>
//                     <img src={it.src} alt="" />
//                 </li>
//             </ul>
//         )
//     })
// }