import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ dataArr }) => (
  <ul className="gallery">
    {dataArr.map(({ id, webformatURL }) => (
      <React.Fragment key={id}>
        <ImageGalleryItem webformatURL={webformatURL} />
      </React.Fragment>
    ))}
  </ul>
);
