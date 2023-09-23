//React Hook
import { useState } from "react";
function Category(props){ //properties
    const cat = props.cat;
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount(count + 1);
    }
    return (
        <div>
          <h1>Name: {cat.name}</h1>
          <p>{count}</p>
          <button type="button" onClick={add}>Add</button>
        </div>
    )
}
export default Category;