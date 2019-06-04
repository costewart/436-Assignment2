import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Styling/Messages.css'
import MessageBar from './MessageBar';
import MessageList from './MessageList'
// import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Home extends React.Component {

    render() {
        const { messages } = this.props;
        const messageList = messages.length ? (
            messages.map(message => {
                return (
                    <div className="messages-collection" message={message} key={message.id}>
                        
                        <div>
                            <Link style = {{ textDecoration: 'none'}} to={'/'+ message.id}>
                            <h4 className="collection-item">
                                {message.content}
                            </h4>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
            <div> No messages yet </div>
        )
    return (
        <div className = "container">
            <h1 className = "center"> What's on your mind today? </h1>
               {messageList}
               <MessageBar />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

// export default compose(
    export default 
    connect(mapStateToProps)
    // firestoreConnect([
    //     { colleciton: 'messages' }
    // ])
(Home)