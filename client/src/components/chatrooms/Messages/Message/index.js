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

    // IMPORTANT - I think I can fix this for GitHub
    // avatars in chat, which would be super cool
    // only errors we had was avatar URL, fix it later? 
    const { state } = useContext(AuthContext);
    const { avatarUrl } = state.user;


    // getting names corresponding to who sent the message
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    console.log(state)

    // ternary to make user's own messages look different
    return (
        isSentByCurrentUser
            ? (
                <div className="message-content-inner">

                    <div className="message-bubble me">
                        <div className="message-bubble-inner">
                            <div className="message-avatar">
                                {/* ternary to display GH avatar or placeholder */}
                                {!state.avatarUrl ? (
                                    <img className="lilAvatar" src={avatarUrl} alt="Avatar" />
                                ) : (
                                        <i className="lilAvatar fas fa-user-circle" alt="Avatar"></i>
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
                                {/* {!state.avatar_url ? ( */}
                                <i className="lilAvatar fas fa-user-circle" alt="Avatar"></i>
                                {/* ) : (
                                        <img className="avatar" src={avatar_url} alt="Avatar" />
                                    )
                                } */}
                            </div>
                            <div className="message-text">
                                <p>{ReactEmoji.emojify(text)}</p>
                            </div>
                        </div>
                        <div className="uk-clearfix"></div>
                        <p className="sentText paddingLeft">{user}</p>
                        <span className="sentText paddingLeft"> {new Date().toLocaleString()} </span>
                    </div>
                </div>
            )
    )
}

export default Message;