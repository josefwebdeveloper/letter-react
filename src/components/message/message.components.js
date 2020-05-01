import React, {useEffect, useState} from 'react';
import './message.style.scss';
import {useDispatch, useSelector} from 'react-redux';
import {articleActions} from '../../store/_actions/article.actions';
import {voiceAction} from '../../store/_actions/voice.action';

const Message = (props) => {
    const msg = new SpeechSynthesisUtterance();
    const voices = speechSynthesis.getVoices();
    const [show, setShow] = useState(false);
    let showSound = false;
    console.log(showSound);
    // let voices = [];
    const randomArticleVoice = useSelector(state => state.article);
    const voiceV = useSelector(state => state.voice);
    const dispatch = useDispatch();
    let voicesDropdown;
    useEffect(() => {
        dispatch(articleActions.random());
        voicesDropdown = document.querySelector('[name="voice"]');
        // speechSynthesis.addEventListener('voiceschanged', populateVoices);
        // voicesDropdown.addEventListener('change', setVoice);
        // msg.text = document.querySelector('[name="text"]').value;
        // console.log(document.getElementById('message'));
    }, []);
    const nextHandle = (e) => {
        if (!e) {
            dispatch(articleActions.random());
        }
        const name = e;
        // const name = 'Rishi';
        msg.voice = voices.find(voice =>
            voice.name === name
        );
        setTimeout(() => {
            console.log(document.getElementById('tsx').innerHTML);
            msg.text = document.getElementById('tsx').innerHTML;
            speechSynthesis.speak(msg);
        }, 2000);
    };


    const soundHandle = () => {
        console.log(showSound);
        showSound = !showSound;
        console.log(showSound);

    };

    // function populateVoices() {
    //     voices = this.getVoices();
    //     console.log(voices, 'v1');
    //
    //
    //     voicesDropdown.innerHTML = voices
    //         // .filter(voice => voice.lang.includes('en'))
    //         .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    //         .join('');
    // }


    function toggle(startOver = true) {
        speechSynthesis.cancel();
        if (startOver) {
            console.log(msg);
            // dispatch(voiceAction.successVoice(msg));

            speechSynthesis.speak(msg);
        }
    }

    function setOption() {
        console.log(this.name, this.value);
        msg[this.name] = this.value;
        // toggle();
    }

    debugger
    return (
        <div id='message' className=' '>

            <div>
                <button className="btn btn-primary" onClick={() => {
                    setShow(!show);
                }}>
                    Voice
                </button>
            </div>
            <div className={show ? 'show' : 'none'}>
                <button className="btn btn-primary" onClick={() => nextHandle('Daniel')}>
                    English
                </button>

                <button className="btn btn-primary" onClick={() => nextHandle('Carmit')}>
                    Hebrew
                </button>
            </div>
            <div className="border border-1 child-borders note  ">
                <div id='tttt' className="">
                    {randomArticleVoice.loading && <em>Loading random-article...</em>}
                    {randomArticleVoice.error && <span className="text-danger">ERROR: {randomArticleVoice.error}</span>}
                    {randomArticleVoice.randomArticle &&
                    <div id='tsx' className='note'
                    >{randomArticleVoice.randomArticle.article}</div>
                    }
                </div>

            </div>
            <button className="btn btn-primary" onClick={nextHandle}>
                Next
            </button>
        </div>
    );
};

export default Message;
