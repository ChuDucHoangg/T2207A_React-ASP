import { useState,useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { NavLink } from "react-router-dom";
function Hero(){
    const [categories,setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const loadCategories = async () => {
        try {
          const rs = await api.get(url.CATEGORY.LIST); 
          setCategories(rs.data);
        } catch (error) {

      }
      }
    useEffect(() => {
        loadCategories(); 
      }, []);
    return(
        <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all" onClick={()=>setShow(!show)}>
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul style={{display:show?"block":"none"}}>
                          {
                            categories.map((e,i)=>{
                              return (
                                 <li key={i}>
                                   <NavLink to={`/category/${e.id}`}>{e.name}</NavLink>
                                </li>)
                            })
                         }
                         </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default Hero;