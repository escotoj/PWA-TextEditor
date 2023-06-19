# Text Editor (PWA)

## Description

Text editor that runs in the browser. Single-page application that meets the PWA criteria.
- Uses IndexedDB to create an object store and includes both GET and PUT methods
- The application works without an internet connection
- Automatically saves content inside the text editor when the DOM window is unfocused
- Bundled with webpack
- Create a service worker with workbox that Caches static assets

## Table of Contents

- [License](#License)
- [Future](#Future)
- [Credits](#Credits)
- [Contact](#Contact)

## License

License: MIT License

## Credits

Jose Escoto, Full Stack Development Student, University of Berkeley.

## Contact

For more questions please contact below:
Email: j.escoto@gmail.com
GitHub: [escotoj](https://github.com/escotoj)


### TODO

- jate header not showing anymore 
- two console log errors while db is online
- Double CHECK indexedDB has created database 
- Double CHECK cache storing 


### DONE

- working and storing data offline
- add logic to the database.js (reaon for the 2 terminal errors)
- logic for install.js
- Implement asset caching by adding code to the the src-sw 
- Add and configure workbox plugins for a service worker and manifest file in webpack
- Add CSS loaders and babel to webpack.

npx create-react-app 