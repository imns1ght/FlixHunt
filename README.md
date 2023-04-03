# FlixHunt

Welcome to FlixHunt, your app for finding the perfect film or series to watch! Built with [React Native](https://reactnative.dev/) and [TypeScript](https://www.typescriptlang.org/), this app allows you to search for movies and TV shows by title, view detailed information about them, and browse popular and upcoming releases. The data is sourced from the [TMDB API](https://developers.themoviedb.org/3).

FlixHunt is not endorsed or affiliated with TMDB.

<a href='https://play.google.com/store/apps/details?id=com.imns1ght.flixhunt&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' height='70px' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

## Features

| Home | Recommendations | Search | Details | 
|------|-------------|-----------| -----------| 
| ![Home](https://user-images.githubusercontent.com/24906506/229597081-4841f48b-af8f-405e-931a-735269eee8a9.png) | ![RecommendationsByGenre](https://user-images.githubusercontent.com/24906506/229597098-5ec8b2e3-0932-4aaa-a003-0636b555a7c4.png) | ![Search](https://user-images.githubusercontent.com/24906506/229597208-db849f3a-d4c8-43f2-8542-4c7d22f7bce6.png) | ![Media-1](https://user-images.githubusercontent.com/24906506/229597059-63e87d2c-2429-462b-9d7a-462c1069cbf1.png) |

| Cast/Collection | Favorites | Upcoming | Profile | 
|-----------------|-----------|----------|---------| 
| ![Media-2](https://user-images.githubusercontent.com/24906506/229597069-8ac4014e-d615-47bc-9efa-2c099a3ae48d.png) | ![Favorites](https://user-images.githubusercontent.com/24906506/229597048-f990dd65-7d96-405c-a5af-a6c46873b7f1.png) | ![Upcoming Movies](https://user-images.githubusercontent.com/24906506/229597217-b3c93aca-3b9d-488f-b3a7-1cf44caa87cb.png) | ![Profile](https://user-images.githubusercontent.com/24906506/229597094-68046a4f-a7b9-40c3-b107-d075d62eae2c.png)








<br/>

Fully supported languages

- en-US
- pt-BR

## Running the App

To run the app, you'll need to have the following installed on your development machine and have the [environment of React Native configured](https://reactnative.dev/docs/environment-setup):

- JDK
- Node.js LTS release or greater
- Yarn
- Git
- Watchman

1. Clone the repository and navigate to the root directory:

   ```bash
   git clone https://github.com/imns1ght/FlixHunt && cd FlixHunt/
   ```

2. Install the required packages

   ```bash
   yarn install && cd ios/ && pod install && cd ..
   ```

3. [Generate a new `TMDB API_KEY`](https://www.themoviedb.org/documentation/api) and add it to the `.env` file:

   ```env
   API_KEY='<insert-your-api-key-here'
   ```

4. Start the server

   ```sh
   yarn start
   ```

5. Start the app

   ```sh
   yarn android
   ```

   ```sh
   yarn ios
   ```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We appreciate your help in making FlixHunt better for everyone.

## Acknowledgements

- [The Movie Database API](https://developers.themoviedb.org/3) for providing movie and TV show data
- [React Native](https://reactnative.dev/) for powering the application

## Support

- [Twitter @imns1ght](https://twitter.com/imns1ght)
- [E-mail](mailto:jeffersonbrunoit@gmail.com)

## License

[GPL 3](https://choosealicense.com/licenses/gpl-3.0/)
