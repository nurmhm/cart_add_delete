import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import SinglePro from "./SinglePro";

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleCart = (p) =>{
    const isExist = cart.find(pd => pd.id ===p.id);
    if(!isExist){
      setCart([...cart,p])
    }else{
      alert("allreasy carted")
    }
  }

  // console.log(cart);

  const handleDelet = (id) =>{
    const newArray =cart.filter(item=> item.id != id);
    setCart(newArray);
    
  }

  return (
    <>
<div className="main-container flex justify-around items-center mt-24">
  <div className="card-container w-3/12 items-center">
    {products.map((pd) => (
      <SinglePro key={pd.id} product={pd} handleCart={handleCart}></SinglePro>
    ))}
  </div>

  <div className="cart-container shadow-xl w-[350px]">
    <h1 className="text-center">this is cart</h1>
    <div className="cart-title flex justify-between">
      <h1>name</h1>
      <h1>Price</h1>
    </div>
    <div>
     <h1>{cart.length}</h1>
      {
        
        cart.map((item) => (
          <div className="cart-title flex justify-between">
          <h1>{item.title.slice(0,10)}</h1>
          <h1>{item.price}</h1>
          <button onClick={()=>handleDelet(item.id)}>delete</button>
        </div>

        ))
      }
    </div>
  </div>
</div>


    </>
  );
}

export default App;
