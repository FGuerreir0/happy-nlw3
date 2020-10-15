import Image from '../models/image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `https://localhost:3010/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
