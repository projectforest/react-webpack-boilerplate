import React from "react"; //ES6 syntax to import a package
require('./css/bootstrap.css')

React.render(
  React.createElement('ul', {}, [ //element type, options, content
    React.createElement('li', {}, 'Team SoloMid'),
    React.createElement('li', {}, 'Counter Logic Gaming'),
    React.createElement('li', {}, 'Cloud 9')
    ]),
  document.body
);




