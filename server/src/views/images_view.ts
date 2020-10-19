import Image from '../models/image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      //path: `http://localhost:3010/uploads/${image.path}`, WEB VERSION
      path: `http://http://192.168.1.78:3010/uploads/${image.path}`, //PHISICAL MOBILE VERSION
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
