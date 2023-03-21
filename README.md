# FlixHunt

Welcome to FlixHunt, your app for finding the perfect film or series to watch! Built with [React Native](https://reactnative.dev/) and [TypeScript](https://www.typescriptlang.org/), this app allows you to search for movies and TV shows by title, view detailed information about them, and browse popular and upcoming releases. The data is sourced from the [TMDb API](https://developers.themoviedb.org/3).

<a href='https://play.google.com/store/apps/details?id=com.imns1ght.flixhunt&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' height='70px' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

## Features

| Home | Search | Upcoming | Overview | Cast/Collection | 
|------|-------------|-----------| -----------| -----------|
| ![Home](https://user-images.githubusercontent.com/24906506/225651596-5e10019a-36da-4292-9743-893fb821f5da.png) | ![Search](https://user-images.githubusercontent.com/24906506/225652300-1d82909b-3a24-4c0b-866c-592d9527754a.png) | ![Upcoming](https://user-images.githubusercontent.com/24906506/225651733-48aa8c3a-866b-4094-9682-8fe9b13f78f1.png) | ![Overview](https://user-images.githubusercontent.com/24906506/225651810-d73a16bf-2187-4f96-a9fd-00a746e2c941.png) | ![Cast, Collection and Recommendations](https://user-images.githubusercontent.com/24906506/225652112-5cb838b7-d215-4378-8b85-e9a751397e2d.png) |

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

If you'd like to contribute to this project, please fork the repository and submit a pull request. We appreciate your help in making FlixHunt better for everyone.

## Acknowledgements

- [The Movie Database API](https://developers.themoviedb.org/3) for providing movie and TV show data
- [React Native](https://reactnative.dev/) for powering the application

## Support

- [Twitter @imns1ght](https://twitter.com/imns1ght)
- [E-mail](mailto:jeffersonbrunoit@gmail.com)

## Disclaimer

The FlixHunt app uses data sourced from the TMDb API (The Movie Database API) to provide
information about movies and TV shows. While we strive to ensure that the information
displayed in the app is accurate and up-to-date, we cannot guarantee the accuracy,
completeness, or timeliness of the data provided by the TMDb API.

By using the FlixHunt app, you acknowledge and agree that we are not responsible for any
errors or omissions in the information provided, or for any actions you may take based on the
information displayed in the app. Additionally, the FlixHunt app is not endorsed or
affiliated with TMDb, and we make no representations or warranties regarding the accuracy or
completeness of the data provided by TMDb.

## License

[GPL 3](https://choosealicense.com/licenses/gpl-3.0/)
