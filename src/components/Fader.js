import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Fader = ({text,visible, textIndex, setTextIndex}) =>{

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in'
    });

    const [currentText, setCurrentText] = useState(text);

    useEffect(()=>{
                
                setTimeout(()=>{
                    setCurrentText(text);
                    setFadeProp({
                        fade: 'fade-in'
                    });
                },800)
                
        
        return()=>{}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])

    return(
        <div className={"column"}>
            {/* {currentTextIndex!==0&&
        <Button onClick={()=>{setFadeProp({
                    fade:'fade-out'
                });setTextIndex(textIndex-1);}}> {"<<<"} </Button>} */}
        <h1 onClick={()=>{setFadeProp({
                    fade:'fade-out'
                });setTextIndex(textIndex+1);}} className={fadeProp.fade}>
        {currentText}
        </h1>
        <p style={{fontWeight:"initial"}}>(Nyalain audionya ya. Terus klik kalimatnya untuk baca lebih lanjut.)</p>
        {/* <Button onClick={()=>{setFadeProp({
                    fade:'fade-out'
                });setTextIndex(textIndex+1);}}>{">>>"}</Button> */}
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