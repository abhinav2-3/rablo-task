import PropTypes from "prop-types";

const ProductCard = ({ name, price, featured, rating, company, createdAt }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>Price: ${price}</p>
      <p>Featured: {featured ? "Yes" : "No"}</p>
      <p>Rating: {rating}</p>
      <p>Company: {company}</p>
      <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  featured: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ProductCard;
