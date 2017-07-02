import axios from 'axios';
import config from '../config/dev.js';

export default {
  FETCH_FEATURED_IMAGES: ({
    commit,
    state,
  }) => {
    let feature;
    if (state.route.params.page === 'lepord') {
      feature = 'Lepord';
    }
    if (state.route.params.page === 'sinharaja') {
      feature = 'Sinharaja';
    }
    if (state.route.params.page === 'elephants') {
      feature = 'Elephants';
    }
    if (state.route.params.page === 'bear') {
      feature = 'bear';
    }
    if (state.route.params.page === 'birds') {
      feature = 'birds';
    }
    if (state.route.params.page === 'knuckles') {
      feature = 'knuckles';
    }
    if (state.route.params.page === 'beach') {
      feature = 'surf';
    }

    const url = `${config.apiRootFlicker}/?method=flickr.photos.search&api_key=${config.api_key}&text=${feature}&tags=srilanka&per_page=10&format=json&nojsoncallback=?`;
    axios.get(url)
      .then((response) => {
        console.log(`FETCH_FEATURED_IMAGES1 ${response.data.photos}`);
        commit('SET_FEATUED_IMAGES', {
          images: response.data.photos,
        });
      });
  },
  FETCH_PHOTO: ({
    commit,
    state,
  }) => {
    const photoId = state.route.params.photo_id;
    const photosUrl = `${config.apiRootFlicker}/?method=flickr.photos.getInfo&photo_id=${photoId}&api_key=${config.api_key}&format=json&nojsoncallback=?`;
    console.log(`photos_url ${photosUrl}`);
    axios.get(photosUrl)
      .then((response) => {
        console.log(`FETCH_PHOTO ${response.data.photo}`);
        commit('SET_PHOTO', {
          photo: response.data.photo,
        });
      });
  },
};
