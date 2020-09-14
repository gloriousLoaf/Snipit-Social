// MESSAGE - Single messages
import React from 'react';
import ReactEmoji from 'react-emoji';
import './style.css';

// NEW!!
import '../../../../pages/Framework/css/style.css';
import '../../../../pages/Framework/css/framework.css';
import '../../../../pages/Framework/css/icons.css';
import '../../../../pages/Framework/css/night-mode.css';

const Message = ({ message: { text, user }, name }) => {

    // getting names corresponding to who sent the message
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    // ternary to make user's own messages look different
    return (
        isSentByCurrentUser
            ? (
                <div className="message-content-inner">

                    {/* <!-- Time Sign --> */}
                    <div className="message-time-sign">
                        <span>28 June, 2018 - oh shit, timestamps...</span>
                    </div>

                    <div className="message-bubble me">
                        <div className="message-bubble-inner">
                            <div className="message-avatar"><img
                                src="assets/images/avatars/avatar-1.jpg" alt="" />
                            </div>
                            <div className="message-text">
                                <p>{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                        <div className="uk-clearfix"></div>
                        <p className="sentText justifyEnd">{trimmedName}</p>
                    </div>

                </div>
            ) : (
                <div className="message-content-inner">
                    <div className="message-bubble">
                        <div className="message-bubble-inner">
                            <div className="message-avatar"><img
                                src="assets/images/avatars/avatar-2.jpg" alt="" />
                            </div>
                            <div className="message-text">
                                <p>{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                        <div className="uk-clearfix"></div>
                        <p className="sentText paddingleft">{user}</p>
                    </div>
                </div>
            )
    )


    // OLD LAYOUT - might need chunks
    // for if, ternary to make user's own messages look different
    // let isSentByCurrentUser = false;
    // const trimmedName = name.trim().toLowerCase();

    // if (user === trimmedName) {
    //     isSentByCurrentUser = true;
    // }

    // return (
    //     isSentByCurrentUser
    //         ? (
    //             <div className="messageContainerC">
    //                 <p className="sentText paddingRight">{trimmedName}</p>
    //                 <div className="messageBox backgroundBlue">
    //                     <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
    //                 </div>
    //             </div>
    //         )
    //         : (
    //             <div className="messageContainer justifyStart">
    //                 <div className="messageBox backgroundLight">
    //                     <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
    //                 </div>
    //                 <p className="sentText paddingLeft ">{user}</p>
    //             </div>
    //         )
    // );
}

export default Message;