// MESSAGE - Single messages
import React, { useContext } from "react";
import ReactEmoji from 'react-emoji';
import { AuthContext } from "../../../../App";
import './style.css';

// NEW!!
import '../../../../pages/Framework/css/style.css';
import '../../../../pages/Framework/css/framework.css';
import '../../../../pages/Framework/css/icons.css';
import '../../../../pages/Framework/css/night-mode.css';

const Message = ({ message: { text, user }, name }) => {

    const { state } = useContext(AuthContext);
    const { avatar_url } = state.user;


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

                    <div className="message-bubble me">
                        <div className="message-bubble-inner">
                            <div className="message-avatar">
                                {/* ternary to display GH avatar or placeholder */}
                                {!state.avatar_url ? (
                                    <img className="lilAvatar" src={avatar_url} alt="Avatar" />
                                ) : (
                                        <i className="fas fa-user-circle" alt="Avatar"></i>
                                    )
                                }
                            </div>
                            <div className="message-text">
                                <p>{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                        <div className="uk-clearfix"></div>
                        <p className="sentText justifyEnd">{trimmedName}</p>
                        <span className="sentText justifyEnd"> {new Date().toLocaleString()} </span>
                    </div>
                </div>
            ) : (
                <div className="message-content-inner">
                    <div className="message-bubble">
                        <div className="message-bubble-inner">
                            <div className="message-avatar">
                                {/* ternary to display GH avatar or placeholder */}
                                {!state.avatar_url ? (
                                    <i className="lilAvatar fas fa-user-circle" alt="Avatar"></i>
                                ) : (
                                        <img className="avatar" src={avatar_url} alt="Avatar" />
                                    )
                                }
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