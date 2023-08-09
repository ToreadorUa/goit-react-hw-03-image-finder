import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ dataArr }) => (
  <ul className="gallery">
    {dataArr.map(({ id, webformatURL, largeImageURL }) => (
      <React.Fragment key={id}>
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      </React.Fragment>
    ))}
  </ul>
);
