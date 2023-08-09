import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onClickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEsc);
  }
  openModal = () => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };
  onClickEsc = e => {
    if (e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };
  render() {
    return (
      <>
        <li className="gallery-item" onClick={this.openModal}>
          <img src={this.props.webformatURL} alt={this.props.id} />
        </li>
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            closeModal={this.openModal}
          />
        )}
      </>
    );
  }
}
