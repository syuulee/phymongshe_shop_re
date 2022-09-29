import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Category = ({ shopList, category }) => {
  const { cate } = useParams();
  //카테고리가 url 파라미터에 뿌려진 값을 받아와서 새로운 배열을 만든다. 원래 배열에서 카테고리가 일치하는 것으로 
  const MainList = shopList.filter(it => category == it.cate)
  return (
    <section className='shopList'>
      <div className="inner">
        {
          MainList.map((it, idx) => {
            return (
              <figure key={it.id}>
                <Link to={'/shopItm/' + it.id}>
                  <div className="box">
                    <img src={it.src} alt="" />
                  </div>
                  <div className='name'>{it.name}</div>
                  <div className='des'>{it.des.substring(0, 100)} ...</div>
                  <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>
                </Link>
              </figure>
            )
          })
        }
      </div>
    </section>
  )
}

export default Category;