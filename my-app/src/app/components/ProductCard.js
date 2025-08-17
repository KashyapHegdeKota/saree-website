const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{product.name}</h2>
        <p className="text-gray-600">AED {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
