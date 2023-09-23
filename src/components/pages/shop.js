import { useState,useEffect } from "react";
import Sidebar from '../layouts/sidebar';
function Shop(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://localhost:7168/api/product")
        .then(data=>data.json())
        .then(data=>{
            setProducts(data);
        })
    },[]);
    return(
        <div className="row">
                <div className="col-lg-3 col-md-5">
                  <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-7">
                {/* <div className="product__discount">
                        <div className="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                        <div className="row">
                            <div className="product__discount__slider owl-carousel">
                            </div>
                        </div>
                    </div> */}
                    <div className="filter__item">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <div className="filter__option">
                                    <span className="icon_grid-2x2"></span>
                                    <span className="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                        products.map((e, index) => {
                            return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg" style={{ backgroundImage: `url(img/product/${e.thumbnail})` }}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">{e.name}</a></h6>
                                    <h5>${e.price}</h5>
                                </div>
                            </div>
                        </div>
                            )
                        })
                    }
                    </div>
                    <div className="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
    )
}
export default Shop;