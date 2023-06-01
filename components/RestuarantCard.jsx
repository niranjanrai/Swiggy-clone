const RestuarantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId} `}
        alt="chicken"
      ></img>
      <h5>{name}</h5>
      <h6> {cuisines.join(", ")} </h6>
      <h6> {avgRating} stars </h6>
      <p> {sla?.deliveryTime} Minutes </p>
    </div>
  );
};

export default RestuarantCard;
