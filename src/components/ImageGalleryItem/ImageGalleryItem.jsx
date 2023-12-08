export const ImageGalleryItem = ({ photo }) => {
  console.log(photo.id);
  return <img alt="alt" src={photo.webformatURL} />;
};
