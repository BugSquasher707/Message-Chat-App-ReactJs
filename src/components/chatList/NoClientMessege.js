import React, { Component } from 'react'

export default class NoClientMessege extends Component {
    render() {
        return (
            <>

                <div
                    style={{ animationDelay: `0.${this.props.animationDelay}s` }}
                    className='chatlist__item clientList__item'
                >

                    <div className="userMeta ">
                    <p>There is no message</p>
                    </div>

                </div>
                
            </>
        )
    }
}
