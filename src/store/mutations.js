export default {
    SET_FEATUED_IMAGES: (state, {
        images
    }) => {
        state.featuredImages = images;
        console.log('SET_FEATUED_IMAGES : ' + state.featuredImages);
    },
     SET_PHOTO: (state, {
        photo
    }) => {
        state.photo = photo;
        console.log('SET_FEATUED_IMAGES : ' + state.featuredImages);
    }
}