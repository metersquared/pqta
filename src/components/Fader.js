import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 10px 10px;
  border-radius: 5px;
  border-width: 0px;
  margin: 10px 10px;
  cursor: pointer;
  flex:0;
`;

const Fader = ({text,visible, textIndex, setTextIndex}) =>{

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in'
    });

    const [currentText, setCurrentText] = useState(text);
    const [currentTextIndex, setCurrentTextIndex] = useState(textIndex);

    useEffect(()=>{
                
                setTimeout(()=>{
                    setCurrentTextIndex(textIndex);
                    setCurrentText(text);
                    setFadeProp({
                        fade: 'fade-in'
                    });
                },800)
                
        
        return()=>{}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])

    return(
        <div className={"row "+fadeProp.fade}>
            {currentTextIndex!==0&&
        <Button onClick={()=>{setFadeProp({
                    fade:'fade-out'
                });setTextIndex(textIndex-1);}}> {"<<<"} </Button>}
        <h1 className={fadeProp.fade}>
        {currentText}
        </h1>
        <Button onClick={()=>{setFadeProp({
                    fade:'fade-out'
                });setTextIndex(textIndex+1);}}>{">>>"}</Button>
        </div>
    )
}

Fader.defaultProps={
    text: 'Hello there'
}

Fader.propTypes ={
    text: PropTypes.string,
}

export default Fader