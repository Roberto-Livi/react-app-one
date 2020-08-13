import React from 'react';
import SeasonDisplay from './components/SeasonDisplay'
import Loader from './components/Loader'

// function getTime(){
//   return (new Date()).toLocaleTimeString()
// }

class App extends React.Component {

  state = {lat: null, errorMessage: ''}

  componentDidUpdate(){
    console.log("updated")
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
    console.log("mounted")
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <SeasonDisplay err={this.state.err}/>
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Loader message={"Please accept location request"}/>
  }


  render() {
    return(
    <div className="border red">{this.renderContent()}</div>
    )
  }

}

export default App;
