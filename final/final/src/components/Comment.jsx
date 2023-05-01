import Avatar1 from '../static/images/user.jpg'
import Avatar2 from '../static/images/user2.jpg'
import Avatar3 from '../static/images/user3.jpg'
import '../static/css/Comment.css'
import { useState, useRef } from 'react';
import LoginDialog from './LoginDialog';

function Comment({isLogin, user, loginFormRef, darkModeClass}) {
    const [isSend, setIsSend] = useState(false);
    const [comment, setComment] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const confirmLoginDialogRef = useRef(null);

    function onSendBtn(event) {
        if(!isLogin){
            confirmLoginDialogRef.current.showModal();
        }else{
            let time = new Date()
            setCurrentTime(time.toLocaleString())
            setIsSend(!isSend);
            event.preventDefault();
        }
    };

    function onInputChange(e) {
        setComment(e.target.value);
        if(isSend){
            setComment("");
        }
        setIsSend(false);
    }

    return (
        <div className={`container ${darkModeClass}`}>
            <div className="comment-send">
                <form className='comment-form'>
                    <span className="comment-avatar" aria-label='Your comment avatar'>
                        <img src={Avatar3} alt="avatar" />
                    </span>
                    <textarea className="comment-send-input" aria-label='The input of the comment' value={comment} onChange={e => onInputChange(e)} name="comment" form="commentForm" cols="80" rows="5" placeholder="Please enter your comment"></textarea>
                    <input className="comment-send-button" aria-label='Send button of the input' type="button" onClick={onSendBtn} value="Send" />
                </form>
            </div>
            <div className="comment-list" id="commentList">
                <div className="comment">
                    <span className="comment-avatar">
                        <img src={Avatar1} alt="avatar" aria-label='The avator of reviewer' />
                    </span>
                    <div className="comment-content">
                        <p className="comment-content-name" aria-label='The username of reviewer'>Daneil</p>
                        <p className="comment-content-article" aria-label='The comment of reviewer'>Nice</p>
                        <p className="comment-content-footer" aria-label='The footer of comment'>
                            <span className="comment-content-footer-timestamp">2023-04-20 11:52</span>
                        </p>
                    </div>
                    <div className="cls"></div>
                </div>
                <div className="comment">
                    <span className="comment-avatar" aria-label='The avator of reviewer'>
                        <img src={Avatar2} alt="avatar" />
                    </span>
                    <div className="comment-content">
                        <p className="comment-content-name" aria-label='The username of reviewer'>Grace</p>
                        <p className="comment-content-article" aria-label='The comment of reviewer'>Thank you!</p>
                        <p className="comment-content-footer" aria-label='The footer of comment'>
                            <span className="comment-content-footer-timestamp">2023-03-15 15:32</span>
                        </p>
                    </div>
                    <div className="cls"></div>
                </div>
                {isSend ? <>
                    <div className="comment">
                        <span className="comment-avatar" aria-label='Your avatar'>
                            <img src={Avatar3} alt="avatar" />
                        </span>
                        <div className="comment-content">
                            <p className="comment-content-name" aria-label='Your username'>{user['username']}</p>
                            <p className="comment-content-article" aria-label='Your comment'>{comment}</p>
                            <p className="comment-content-footer">
                                <span className="comment-content-footer-timestamp">{currentTime}</span>
                            </p>
                        </div>
                        <div className="cls"></div>
                    </div>
                </> : <></>}
            </div>
            <LoginDialog loginFormRef={loginFormRef} confirmLoginDialogRef={confirmLoginDialogRef} />
        </div>
    );
}

export default Comment;