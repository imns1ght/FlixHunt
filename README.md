# Movie Browser

Movie Browser is an app for you to find a good movie or TV show to watch! The Movie Browser uses [React Native](https://reactnative.dev/), [TypeScript](https://www.typescriptlang.org/). The data comes from the [TMDb API](https://developers.themoviedb.org/3) using [Axios](https://github.com/axios/axios).

## Features (outdated!!!)

https://user-images.githubusercontent.com/24906506/178588926-0ced5356-8310-4cd8-83d3-3bbb1c901301.mp4

### [Click here to download](https://github.com/imns1ght/movie-browser/releases)

## Running

### Requirements

- JDK
- Node.js LTS release or greater
- Yarn
- Git
- Watchman

### Documentation

- [React Native](https://reactnative.dev/docs/environment-setup)

### Quick running

Assuming you have installed [Git](https://git-scm.com/), [Yarn](https://classic.yarnpkg.com/en/docs/install#alternatives-stable), Watchman, and [NodeJS LTS](https://nodejs.org/en/), we can follow:

1. Download the project and go to the root directory

   ```bash
   git clone https://github.com/imns1ght/movie-browser && cd movie-browser/
   ```

2. Install the required packages

   ```bash
   yarn install && cd ios/ && pod install && cd ..
   ```


3. Runnning

   1. Start the server
      ```sh
      yarn start
      ```
   2. Start the app
      ```sh
      yarn android
      ```
      ```sh
      yarn ios
      ```

## TODO

- [ ] Accessibility
- [ ] Allow users to signup;
- [ ] Create unit tests;
- [x] Create APK and share with users.

## Contributing

You are welcome! Create the pull requests.

For major changes, please, open an issue first to discuss what you would like to change.

## Support

- [Twitter @imns1ght](https://twitter.com/imns1ght) | [E-mail](mailto:jeffersonbrunoit@gmail.com)

## License

[GPL 3](https://choosealicense.com/licenses/gpl-3.0/)
