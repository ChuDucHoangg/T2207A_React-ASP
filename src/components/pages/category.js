import { useParams } from 'react-router-dom';
import Sidebar from '../layouts/sidebar';
import { useState,useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { NavLink } from "react-router-dom";
function Category(){
    const {id} = useParams();
    const [products,setProducts] = useState([]);
    const loadProducts = async (categoryId) => { 
        try {
            const rs = await api.get(`${url.PRODUCT.CATEGORY_ID}?categoryId=${categoryId}`); 
            setProducts(rs.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        loadProducts(id);
    }, [id]);
    return(
        <div className="row">
                <div className="col-lg-3 col-md-5">
                  <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-7">
                    <h1>Category Page :{id}</h1>
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
                                <h6><NavLink to={`/shop-detail/${e.id}`}>{e.name}</NavLink></h6>
                                    <h5>${e.price}</h5>
                                </div>
                            </div>
                        </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
    )
}
export default Category;