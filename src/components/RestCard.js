import { CDN_URL } from "../utlis/constant";

const RestCards = (props) => {
  const { Restdata } = props;
  const {
    name,
    costForTwoString,
    slaString,
    cuisines,
    cloudinaryImageId,
    avgRating,
  } = Restdata.data;
  return (
    <div className=" w-60 rounded-lg h-80 bg-gray-200 text-center m-2">
      <img src={CDN_URL + cloudinaryImageId}></img>
      <h1>{name} </h1>
      <h2>{cuisines.join(", ")} </h2>
      <h3>{costForTwoString} </h3>
      <h4>{slaString} </h4>
      <h4>{avgRating + " ratings"} </h4>
    </div>
  );
};

export default RestCards;
