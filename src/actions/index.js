
export const selectImage = image => {
    console.log('selectImage', image);
    return {
        type: 'SELECTED_IMAGE',
        payload: image
    }
}
