import axios from 'axios';
import config from '../config/dev.js';

export default {
    FETCH_FEATURED_IMAGES: ({
        commit,
        state
    }) => {
        var feature;
        if (state.route.params.page == "lepord") {
            feature = 'Lepord'
        }
        if (state.route.params.page == "sinharaja") {
            feature = 'Sinharaja'
        }
        if (state.route.params.page == "elephants") {
            feature = 'Elephants'
        }
        if (state.route.params.page == "bear") {
            feature = 'bear'
        }
        if (state.route.params.page == "birds") {
            feature = 'birds'
        }
        if (state.route.params.page == "knuckles") {
            feature = 'knuckles'
        }
        if (state.route.params.page == "beach") {
            feature = 'surf'
        }

        // var url = `${config.apiRoot}/photos/search?tag=${feature}&exclude_nude=1&feature=popular&image_size=4&consumer_key=${config.consumerKey}`;
        var url = `${config.apiRootFlicker}/?method=flickr.photos.search&api_key=${config.api_key}&text=${feature}&tags=srilanka&per_page=10&format=json&nojsoncallback=?`;
        axios.get(url)
            .then(response => {
                console.log("FETCH_FEATURED_IMAGES1 " + response.data.photos);
                commit('SET_FEATUED_IMAGES', {
                    images: response.data.photos
                });
            });
    },
    FETCH_PHOTO: ({
        commit,
        state
    }) => {
        var photoId = state.route.params.photo_id;
        var photos_url = `${config.apiRootFlicker}/?method=flickr.photos.getInfo&photo_id=${photoId}&api_key=${config.api_key}&format=json&nojsoncallback=?`;
        console.log('photos_url ' + photos_url);
        axios.get(photos_url)
            .then(response => {
                console.log("FETCH_PHOTO " + response.data.photo);
                commit('SET_PHOTO', {
                    photo: response.data.photo
                });
            });
    }
}