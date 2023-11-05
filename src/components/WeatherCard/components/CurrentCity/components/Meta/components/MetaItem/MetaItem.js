import Image from "../../../Image";

const MetaItem = ({ imageUrl, alt, value }) => {
  return (
    <div className="flex flex-col justify-center">
      <Image imageUrl={imageUrl} alt={alt} />
      {value}
    </div>
  );
};

export default MetaItem;
