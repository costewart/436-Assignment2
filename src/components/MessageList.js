import React from 'react'
import Message from './Message'

class MessageList extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th> Messages </th>
                        {' '}
                        <th> Action </th>
                        {' '}
                        <th> Update </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.messages.length > 0 && this.props.messages.map((message,index)=> <Message key={index} message={message} {...this.props}/> )}
                </tbody>
            </table>
        );
    }
}

export default MessageList