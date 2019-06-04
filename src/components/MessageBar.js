import React from 'react'
import './Styling/Messages.css'
import { connect } from 'react-redux'
import { addMessage } from '../actions/messageActions'
import Message from './Message';
import MessageList from './MessageList'

class MessageBar extends React.Component {

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
    }

    render() {
        return (
            <div className="addMessage">

                <form onSubmit={this.handleSubmit}>
                    <label className="label">Add new message:</label>
                    <input className="input" type="text" onChange={this.handleChange} value={this.props.content} />
                    <input className="button1" type="submit"/>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => dispatch(addMessage(message))
    }
}
// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.message_id;
//     return {
//       message: state.messages.find(message => message.id == id)
//     }
//  }



export default connect(null, mapDispatchToProps)(MessageBar)