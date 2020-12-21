# The Movie Browser

The Movie Browser is an app for you to find a good movie to watch! The Movie Browser is made with ❤️ using [React Native](https://reactnative.dev/) and [Expo](https://expo.io/), consuming data from [TMDb API](https://developers.themoviedb.org/3).

## Features

### Home Page with Trending Movies and Last Releases

- ![Home Page](assets/readme/tablet-home.gif)

### Search Page

- ![Search Page](assets/readme/tablet-search.gif)

### Movie Page

- ![Movie Page](assets/readme/tablet-movie.gif)

## Configuring

Assuming you have installed [CMake](https://cmake.org), [make](https://www.gnu.org/software/make/), [GTest](https://github.com/google/googletest) and [Git](https://git-scm.com/), we can follow these steps:

1. Download the project and moves into the root directory

   ```
   git clone https://github.com/imns1ght/vector && cd vector/
   ```

2. Create build files

   ```
   cmake -B build/
   ```

3. Start the compiling process.

   ```
   make install -C build/
   ```

   After that, the library (`libvector.a`) it's located in `lib/`.

4. Create a symlink (shortcut) for the executable.
   ```
   ln -sf build/run_tests .
   ```

Finally, we have an executable inside the `build` directory that tests the library functions.
Also, we will have a library `libvector.a` in which the functions are compiled.

## TODO

- [ ] Fix insert functions

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

## License

[GPL 3](https://choosealicense.com/licenses/gpl-3.0/)
