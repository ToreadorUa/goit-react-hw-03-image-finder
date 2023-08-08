export const ImageGalleryItem = ({ id, webformatURL }) => (
  <li className="gallery-item">
    <img src={webformatURL} alt={id} />
  </li>
);
