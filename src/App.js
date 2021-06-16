import './assets/styles/main.css'
import './assets/styles/nav.css'
import Navbar from './components/Nav'
import Hero from './components/Hero'
import React from 'react'


class App extends React.Component {

   // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1000)) // 2 seconds
  }

  componentDidMount(){
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000)
      }
    })
  }
  render() {
      return (
        <div className="App">
          <Navbar />
          <Hero />
          
        </div>
      );
  }
}

export default App;
