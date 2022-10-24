export const generateImgBase64 = (item) => {

    let image = new Image();
        image.src = `data:image/png;base64,${item}`

    return image.src

}

export default generateImgBase64
