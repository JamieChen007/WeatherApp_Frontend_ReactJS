const BackgroundImage = ({
  imageUrl,
  alt = "desc xxxx",
  className,
  children,
}) => {
  console.log(className);
  return (
    <div className={className} style={{ backgroundImage: `url(${imageUrl})` }}>
      <img src={imageUrl} alt={alt} className="hidden" />
      {children}
    </div>
  );
};

export default BackgroundImage;