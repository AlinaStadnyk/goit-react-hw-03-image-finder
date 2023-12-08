import { Component } from 'react';
import axios from 'axios';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    pics: [],
  };
  componentDidMount() {
    axios(
      'https://pixabay.com/api/?q=cat&page=1&key=40365065-ce88301315fd1f49aec04ac88&image_type=photo&orientation=horizontal&per_page=12'
    ).then(resp => {
      console.log(resp.data.hits);
      this.setState({
        pics: resp.data.hits,
      });
    });
  }
  render() {
    const { pics } = this.state;

    return pics.map(element => (
      <ImageGalleryItem key={element.id} photo={element} />
    ));
  }
}
export default ImageGallery;

{
}
