export const renderImageBase64 = (item) => {
  const dataImg = 'data:image/png;base64';

  if (item.substring(0, 21) == dataImg) {
    return item;
  } else {
    let image = new Image();
    image.src = `data:image/png;base64,${item}`;
    return image.src;
  }
};

export default renderImageBase64;
