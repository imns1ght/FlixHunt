# Movie Browser

Welcome to Movie Browser, your app for finding the perfect film or series to watch! Built with [React Native](https://reactnative.dev/) and [TypeScript](https://www.typescriptlang.org/), this app allows you to search for movies and TV shows by title, view detailed information about them, and browse popular and upcoming releases. The data is sourced from the [TMDb API](https://developers.themoviedb.org/3).

[Download the app](https://github.com/imns1ght/movie-browser/releases)

## Features

- Search for movies and TV shows by title
- View detailed information about a movie or TV show, including release date, cast, and plot summary
- Browse popular movies and TV shows and upcoming releases

<https://user-images.githubusercontent.com/24906506/178588926-0ced5356-8310-4cd8-83d3-3bbb1c901301.mp4>

## Running the App

To run the app, you'll need to have the following installed on your development machine and have the [environment of React Native configured](https://reactnative.dev/docs/environment-setup):

- JDK
- Node.js LTS release or greater
- Yarn
- Git
- Watchman

1. Clone the repository and navigate to the root directory:

   ```bash
   git clone https://github.com/imns1ght/movie-browser && cd movie-browser/
   ```

2. Install the required packages

   ```bash
   yarn install && cd ios/ && pod install && cd ..
   ```

3. [Generate a new `TMDb API_KEY`](https://www.themoviedb.org/documentation/api) and add it to the `.env` file:

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

If you'd like to contribute to this project, please fork the repository and submit a pull request. We appreciate your help in making Movie Browser better for everyone.

## Acknowledgements

- [The Movie Database API](https://developers.themoviedb.org/3) for providing movie and TV show data
- [React Native](https://reactnative.dev/) for powering the application

## Support

- [Twitter @imns1ght](https://twitter.com/imns1ght)
- [E-mail](mailto:jeffersonbrunoit@gmail.com)

## Disclaimer

The Movie Browser app uses data sourced from the TMDb API (The Movie Database API) to provide
information about movies and TV shows. While we strive to ensure that the information
displayed in the app is accurate and up-to-date, we cannot guarantee the accuracy,
completeness, or timeliness of the data provided by the TMDb API.

By using the Movie Browser app, you acknowledge and agree that we are not responsible for any
errors or omissions in the information provided, or for any actions you may take based on the
information displayed in the app. Additionally, the Movie Browser app is not endorsed or
affiliated with TMDb, and we make no representations or warranties regarding the accuracy or
completeness of the data provided by TMDb.

## License

[GPL 3](https://choosealicense.com/licenses/gpl-3.0/)
