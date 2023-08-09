export const Modal = ({ largeImageURL, closeModal }) => (
  <div class="overlay" onClick={closeModal}>
    <div class="modal">
      <img src={largeImageURL} alt="image" />
    </div>
  </div>
);
