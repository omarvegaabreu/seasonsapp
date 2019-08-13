import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //THE ONLY TIME YOU DO DIRECT ASSIGMENT TO SET STATE
    //IS WHEN YOU FIRST CALL IT IN THE CONSTRUCTOR APP
    this.state = {
      lat: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //SET STATE FUNCTION IS TO UPDATE STATE
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
