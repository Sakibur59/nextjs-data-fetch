const Products = ({product}) => {
  return (
    <div className="card w-96 bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>
          {product.description}
        </p>
        <p>${product.price}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
