import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getQuery } from 'api/getQuery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    totalPages: 0,
    dataArr: [],
    page: 1,
    per_page: 12,
    status: 'idle',
    error: '',
  };
  componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ status: 'pending' });
      getQuery(this.state.query, this.state.page, this.state.per_page)
        .then(data => {
          console.log(data);

          this.setState(
            prev => ({
              totalPages: Math.ceil(data.total / this.state.per_page),
              dataArr: [...prev.dataArr, ...data.hits],
              status: 'resolved',
            }),
            () => {
              console.log(this.state.totalPages);
            }
          );
        })
        .catch(err => {
          this.setState({ status: 'rejected', error: err });
        });
    }
  }
  onSubmit = q => {
    this.setState({ query: q });
  };
  btnLoadMoreClick = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  render() {
    const { totalPages, page, dataArr } = this.state;
    const btnLoadMoreShow = (totalPages > 1) & (page !== totalPages);
    // if (this.state.status === 'idle')
    //   return <Searchbar onSubmit={this.onSubmit} />;
    // if (this.state.status === 'pending') return <div>Загружаем...</div>;
    // if (this.state.status === 'resolved')
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery dataArr={dataArr} />
        {btnLoadMoreShow ? (
          <Button btnLoadMoreClick={this.btnLoadMoreClick} />
        ) : null}
      </>
    );
    if (this.state.status === 'rejected') return <h1>{this.state.error}</h1>;
  }
}
