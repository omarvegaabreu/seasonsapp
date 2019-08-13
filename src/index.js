import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //THE ONLY TIME YOU DO DIRECT ASSIGMENT TO SET STATE
    //IS WHEN YOU FIRST CALL IT IN THE CONSTRUCTOR APP
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);

        //SET STATE FUNCTION IS TO UPDATE STATE
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );

    /***lat=lattitude */
  }

  render() {
    return <div>Latitude:{this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
