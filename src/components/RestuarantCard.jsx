import { IMG_CDN_URL } from "../config/Constant";

const RestuarantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
}) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="chicken"></img>
      <h5>{name}</h5>
      <h6> {cuisines.join(", ")} </h6>
      <h6> {avgRating} stars </h6>
      <p> {sla?.deliveryTime} Minutes </p>
    </div>
  );
};

export default RestuarantCard;
