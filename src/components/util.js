
import axios from 'axios';

const API_KEY_FLICKR = "b5b00d16f3e70b5aa0157d79edaab8b5";

export const executeSearch = async (searchText) => {

    try{
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_FLICKR}&format=json&text=${searchText}&nojsoncallback=true&per_page=40&extras=url_s`
      );
        console.log('response:', response );
        return response.data;
      } catch(error){
        console.log(error);
      }
  
    /* .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    }) */
  
  }