# The Movie Browser

The Movie Browser is an app for you to find a good movie to watch! The Movie Browser is made with ❤️ using [React Native](https://reactnative.dev/) and [Expo](https://expo.io/), consuming data from the [TMDb API](https://developers.themoviedb.org/3) using [Axios](https://github.com/axios/axios)!.

## Features

## Home Page with popular movies and latest releases

  <img src="assets/readme/tablet-home.gif" width="350" height="550"/>

## Search Page

<img src="assets/readme/tablet-search.gif" width="350" height="550"/>

## Movie Page

<img src="assets/readme/tablet-movie.gif" width="350" height="550"/>

## Running

### Requirements

- Node.js LTS release or greater
- Yarn
- Git
- Watchman for macOS users

### Documentation

- [React Native](https://reactnative.dev/docs/environment-setup)
- [Expo](https://docs.expo.io/distribution/building-standalone-apps/#1-install-expo-cli)

### Quick running

Assuming you have installed [Git](https://git-scm.com/), [Yarn](https://classic.yarnpkg.com/en/docs/install#alternatives-stable) and [NodeJS LTS](https://nodejs.org/en/), we can follow:

1. Download the project and go to the root directory

   ```bash
   git clone https://github.com/imns1ght/movie-browser && cd movie-browser/
   ```

2. Install Expo Cli

   ```bash
   yarn global add expo-cli
   ```

3. Runnning

   You can run the project in several ways:

   1. Using an Expo client application for iOS or Android and connect to the same wireless network as your computer

      On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the Camera app.

      - [Android Client](https://play.google.com/store/apps/details?id=host.exp.exponent)
      - [iOS Client](https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2fexponent)

   2. Using an emulator

      - [Installing the iOS Simulator (macOS only)](https://docs.expo.io/workflow/ios-simulator/)
      - [Installing an Android emulator](https://docs.expo.io/workflow/android-studio-emulator/)

   3. Using as a web application, running the script below in the root directory.

      ```bash
      expo start --web
      ```

## TODO

- [ ] Allow users to signup;
- [ ] Create unit tests;
- [ ] Create APK and share with users.

## Contributing

You are welcome! Create the pull requests.

For major changes, please, open an issue first to discuss what you would like to change.

## Support

- [Twitter @imns1ght](https://twitter.com/imns1ght) | [E-mail](mailto:jeffersonbrunoit@gmail.com)

## Authors and acknowledgment

### Authors

- [Jefferson Bruno (imns1ght)](https://jeffersonbruno.com)

### Acknowledgment

- Icons made by [photo3idea_studio](https://www.flaticon.com/authors/photo3idea-studio)
- Database [The Movie Database](https://www.themoviedb.org/)

## License

[GPL 3](https://choosealicense.com/licenses/gpl-3.0/)
