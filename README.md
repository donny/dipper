# dipper

Dipper is a Star Wars Trivia Generator written using [React](https://facebook.github.io/react/) and deployed on [Netlify](https://www.netlify.com).

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [React](https://facebook.github.io/react/), [Netlify](https://www.netlify.com), and [SWAPI](https://swapi.co).

I have developed front-end apps using AngularJS and Ember. But I skipped the React bandwagon and went to learn Elm. Through this project I hope to learn and use React for a small app.

### Project

Dipper uses the the [Star Wars API](https://swapi.co) (SWAPI) to generate trivia or random bits of information about the films, people, planets, species, starships, and vehicles of the Star Wars universe. It has a very simple interface with just one button to generate random Star Wars trivia. The screenshot of the app:

![Screenshot](https://raw.githubusercontent.com/donny/dipper/master/screenshot.png)

### Implementation

Dipper is implemented using [React](https://facebook.github.io/react/) which is a JavaScript library for building user interfaces. There are many [tutorials](https://github.com/enaqx/awesome-react) on React, but it’s best to start from the [basic](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/) of React itself. Using React and the modern web development workflow tools require a lot of configuration. Thus, usually we start with a boilerplate code. Two of the [many](https://risingstars2016.js.org/#react-template) React boilerplates are: [Create React App](https://github.com/facebookincubator/create-react-app) and [React Boilerplate](http://reactboilerplate.com/). This project is started using the Create React App boilerplate.

Dipper is deployed on [Netlify](https://www.netlify.com) which is a new service for quickly rolling out static websites. It supports custom domains, SSL, built-in form submissions, API Proxy, etc. Netlify has GitHub integration that allows us to connect a GitHub repository to a Netlify site. And whenever we push to GitHub, Netlify will run the build command and deploy the result.

SWAPI unfortunately [doesn't support](https://github.com/phalt/swapi/issues/60) CORS. Thus, the API must be proxied through [CORS Anywhere](https://github.com/donny/cors-anywhere) which is a NodeJS reverse proxy which adds CORS headers to the proxied request. The CORS Anywhere app for Dipper is hosted on [Heroku](https://www.heroku.com). Thus, we have a Netlify site (Dipper) that communicates with a Heroku app (CORS Anywhere) to use the Star Wars API (SWAPI).

The Dipper app itself is very simple:

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Gallery/>
      </div>
    );
  }
}
```

The [Gallery](https://github.com/donny/dipper/blob/master/src/Gallery.js) component uses the [React Masonry Component](https://github.com/eiriklv/react-masonry-component) to display the trivia cards in Pinterest style column layout. The `render()` call for the Gallery component is displayed below:

```javascript
render() {
  return (
    <div className="Gallery">
      <NewTrivia addNewTrivia={this.addNewTrivia}/>
      <Masonry>
        {this.renderTrivias()}
      </Masonry>
    </div>
  );
}

renderTrivias() {
  return this.state.trivias.map(trivia => this.renderTrivia(trivia));
}
```

The trivia cards are implemented by six components: [Film.js](https://github.com/donny/dipper/blob/master/src/entities/Film.js), [Person.js](https://github.com/donny/dipper/blob/master/src/entities/Person.js), [Planet.js](https://github.com/donny/dipper/blob/master/src/entities/Planet.js), [Species.js](https://github.com/donny/dipper/blob/master/src/entities/Species.js), [Starship.js](https://github.com/donny/dipper/blob/master/src/entities/Starship.js), and [Vehicle.js](https://github.com/donny/dipper/blob/master/src/entities/Vehicle.js)

### Conclusion

I have to say that developing a front-end app using React is like a breath of fresh air. I quite like [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and the fact that we divide up the app into [small components](https://github.com/brillout/awesome-react-components) and compose them into larger parts. This project doesn't use any application architecture or state management and I'm looking forward to try [Flux](https://facebook.github.io/flux/) and [Redux](http://redux.js.org) in future projects. And definitely I also want to try and play with [React Native](https://facebook.github.io/react-native/).
