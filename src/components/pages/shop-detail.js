import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";

function Shop_Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState([]); 

    const loadProduct = async (id) => { 
        try {
            const rs = await api.get(`${url.PRODUCT.DETAIL}?id=${id}`);
            // console.log(rs.data);
            setProduct(rs.data); 
        } catch (error) {

        }
    }

    useEffect(() => {
        loadProduct(id);
    }, [id]);

    return (
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div className="product__details__pic">
                    <div className="product__details__pic__item">
                        <img className="product__details__pic__item--large" src={`/img/product/${product.thumbnail}`} alt={product.name} /></div>
                    <div className="product__details__pic__slider owl-carousel">
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                    <h3>{product.name}</h3>
                    <div className="product__details__rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                        <span>(18 reviews)</span>
                    </div>
                    <div className="product__details__price">${product.price}</div>
                    <p>Qty: {product.qty}</p>
                    <div className="product__details__quantity">
                        <div className="quantity">
                            <div className="pro-qty">
                                <input type="text" value="1" />
                            </div>
                        </div>
                    </div>
                    <a href="#" className="primary-btn">ADD TO CART</a>
                    <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                    <ul>
                        <li><b>Availability</b> <span>In Stock</span></li>
                        <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                        <li><b>Weight</b> <span>1.8 kg</span></li>
                        <li><b>Share on</b>
                            <div className="share">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-pinterest"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="product__details__tab">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="product__details__tab__desc">
                                <h6>Products Information</h6>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <div className="product__details__tab__desc">
                                <h6>Products Information</h6>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                            <div className="product__details__tab__desc">
                                <h6>Products Information</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop_Detail;
