import React from 'react'
import CategorySlider from './CategorySlider';
import MainCategory from './MainCategory'

const MainProuctSlide = ({ shopList, category, tit, des, bg }) => {
    return (
        <section className="sce slide_" style={{ background: bg }}>
            <h2>BEST PRODUCT</h2>
            <p>피몽쉐 마인드풀 라운지 BEST PRODUCT</p>
            <div className="inner">
                <CategorySlider shopList={shopList} category={category} arrow={true} dots={true} />
            </div>
        </section>
    )
}

export default MainProuctSlide;