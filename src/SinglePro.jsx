const SinglePro = ({ product, handleCart }) => {
  //  console.log(product);
  return (
    <div className="cart w-[300px] mb-5 border-2 border-red-200 ">
      <img className="w-[100px]" src={product.image} alt="" />
      <h1 className="text-4xl">{product.title}</h1>
      <p>{product.description}</p>
      <div className="footer">
        <h1 className="text-4xl">${product.price}</h1>
        <button
          onClick={() => handleCart(product)}
          className="border-2 border-dotted "
        >
          add to cart
        </button>
      </div>
      <h1>this is single</h1>
    </div>
  );
};

export default SinglePro;
