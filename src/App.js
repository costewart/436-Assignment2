import React from 'react';
import './App.css';
import Message from './components/Message'
import MessageBar from './components/MessageBar'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import MessagePage from './components/MessagePage'
import Switch from 'react'


class App extends React.Component {

  // deleteMessage = (id) => {
  //   const messages = messages.filter(message => {
  //     return message.id !== id
  //   });
  //   this.setState( {
  //     messages: messages
  //   })
  // }

  // addMessage = (message) => {
  //   message.id = Math.random();
  //   let messages = [...messages, message];
  //   this.setState({
  //     messages: messages
  //   }
  //   )
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
            <Navbar />
           
            <Route exact path='/' component={Home}/>
            <Route path='/messages' component={MessagePage}/>
            <Route path='/about' component={About}/>
            
            <Route path="/:message_id" component={Message}/>
            
            {/* <h1 className="title"> How are you feeling today?</h1>
            <div className="message-container"> */}
            
            {/* <Messages messages = {this.state} deleteMessage={this.deleteMessage} />
            <AddMessage addMessage={this.addMessage} /> */}
          </div>
        {/* </BrowserRouter></div> */}
      </BrowserRouter>
  );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     messages: state.messages
//   }
// }
// export default connect(mapStateToProps)(App)
export default App

