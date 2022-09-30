import React from 'react';
import MainSlide from '../component/MainSlide';
import MainTab from '../component/MainTab';
import MainCategory from '../component/MainCategory';
import '../css/Main.scss'
import CategorySlider from '../component/CategorySlider';

const Main = ({ shopList }) => {
    return (
        <>
            <MainSlide />
            <CategorySlider shopList={shopList} category={'liquid'} tit={'BEST PRODUCT'} des={'피몽쉐 베스트라인 어쩌고 저쩌고'} />
            <MainTab shopList={shopList} />
            <MainCategory shopList={shopList} category={'cream'} tit={'BEST PRODUCT'} des={'피몽쉐 베스트라인 어쩌고 저쩌고'} bg={'#f7f7f7'} />
            <MainCategory shopList={shopList} category={'gel'} />
            <MainCategory shopList={shopList} category={'pencil'} />
            <MainCategory shopList={shopList} category={'liquid'} />
            <MainCategory shopList={shopList} category={'powder'} />
            <MainCategory shopList={shopList} category={'concealer'} />
        </>
    )
}

export default Main;