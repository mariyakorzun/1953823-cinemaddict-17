import ApiService from './framework/api-service.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  POST: 'POST',
};

export default class FilmApiService extends ApiService {

  get films() {
    return this._load({url: 'movies'})
      .then(ApiService.parseResponse);
  }

  updateFilm = async (film) => {
    const response = await this._load({
      url: `movies/${film.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(film)),
      headers: new Headers({'Content-Type': 'application/json'})
    });
    return await ApiService.parseResponse(response);
  };

  #adaptToServer = (film) => {
    const adaptedFilmInfo = {
      ...film,
      'age_rating': film.ageRestriction,
      'alternative_title': film.originalTitle,
      'total_rating': film.rating,
      'release': {
        'date': film.releaseDate,
        'release_country': film.country
      }
    };
    delete adaptedFilmInfo.ageRestriction;
    delete adaptedFilmInfo.originalTitle;
    delete adaptedFilmInfo.rating;
    delete adaptedFilmInfo.releaseDate;
    delete adaptedFilmInfo.country;

    const adaptedUserDetails = {
      ...film.userDetails,
      'already_watched': film.userDetails.alreadyWatched,
      'watching_date': film.userDetails.watchingDate,
    };
    return {
      'film_info': adaptedFilmInfo,
      'id': film.id,
      'user_details': adaptedUserDetails,
      'comments': []
    };
  };

  getComments = (filmId) => (
    this._load({url: `comments/${filmId}`})
      .then(ApiService.parseResponse)
  );


  addComment = async (comment, movieId) => {
    const response = await this._load({
      url: `comments/${movieId}`,
      method: Method.POST,
      body: JSON.stringify(comment),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  deleteComment = async (id) => {
    const response = await this._load({
      url: `comments/${id}`,
      method: Method.DELETE,
    });

    return response;
  };
}
