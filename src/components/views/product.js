//React Hook
import { useState } from "react";
function Product(props){ //properties
    const product = props.product;
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount(count + 1);
    }
    return (
        <div>
          <h1>Ten san pham {product.name}</h1>
          <p>Price: {product.price}</p>
          <p>{count}</p>
          <button type="button" onClick={add}>Add</button>
        </div>
    )
}
export default Product;