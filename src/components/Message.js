import React from 'react'
import './Styling/Messages.css'
import { connect } from 'react-redux'
import { deleteMessage } from '../actions/messageActions'

class Message extends React.Component {
    handleClick = () => {
        this.props.deleteMessage(this.props.message.id)
        this.props.history.push('/')
    }
    render() {
        const message = this.props.message ? (
            <div className ="collection-item">
                <h4>
                    {this.props.message.content}
                </h4>
                <div>
                    <button className="button1" onClick={this.handleClick}>
                        Delete Message
                        </button>
                </div>
            </div>
        ) : ( 
            <div> Loading message ... </div>
        )
        
    return (
        <div className="container">
            { message }
            </div>
    )
}
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.message_id;
    return {
      message: state.messages.find(message => message.id == id)
    }
 }

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMessage: (id) => { dispatch(deleteMessage(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)