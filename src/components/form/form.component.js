import React, {useEffect, useState} from 'react';
import './form.style.scss';
import {useDispatch} from 'react-redux';
import {formConstants} from '../../store/_constants/form.constats';
import {formActions} from '../../store/_actions/form.actions';

const Form = (props) => {
    const [inputs, setInputs] = useState({
        article: 'Dear WebSite,'
    });
    const [submitted, setSubmitted] = useState(false);
    const {article} = inputs;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: formConstants.CLEAR_FORM});
    }, []);

    const speech = () => {

    };

    function handleChange(e) {

        const {name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (article && article !== 'Dear WebSite,') {

            // console.log({article:article,type:'crazy'});
            dispatch(formActions.postArticle({article: article, type: 'crazy'}));
            props.handleTimer();
            console.log(e.target);
            setInputs({article: 'Dear WebSite,'});

        }
    }

    return (
        <div id='form'>
            <div className=" ">
                {/*<h1>Form</h1>*/}
                <form id='article-text' name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <textarea className='note' id='article-text' name="article" value={article}
                                  onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
