
import music from './public/autumnmelody.mp3';
import gl from './public/good luck.jpg';
import './App.css';
import React, {useState} from "react";
import Fader from './components/Fader';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-color: black;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  flex:0;
`;

function App() {

  const [visibility, setVisibility] = useState(false
  );

  const [buttonClicked, setButtonClicked] = useState(false);
  const [textIndex,setTextIndex]= useState(0);

  const sentences =[
    "Oops...",
    "Hallo Ita,... ",
    "I hope everything's going well...",
    "Berhubung kamu bakal ujian (terakhir..?),",
    "aku mau bilang...",
    "Semangat ya 🍀",
    "Sori ya, aku nggak bisa bantuin kali ini. 😅",
    "Tapi aku yakin kamu pasti bisa. 😉",
    "I have not met a women as smart, resilient and determined as you.",
    "Lebay ya, gini doang pake bikin website.",
    "Ya tapi gimana lagi,... ",
    "Aku nggak sejago kamu bikin postcard. 🤷‍♂️",
    "Gitu aja sih,... ",
    "Doaku bersamamu Ta, ditunggu kabarnya setelah ujian.",
    "Nanti kalo mau curhat dan ngomel2in juga boleh...",
    "Salam dari 🐻lin,",
    "Arya ❤️"
  ]

  return (
    <div>
    {buttonClicked&&<body>
    <div  className='App fill-height'>
    {textIndex<sentences.length&&<Fader setTextIndex={setTextIndex} textIndex={textIndex} visible={visibility} text={sentences[textIndex]}/>}
    {textIndex>=sentences.length&&<div className='fade-in'  style={{alignItems:"center",}}><img alt="Stuff" height={166} width={709} src={gl}/></div>}
    </div>
    </body>}
    
    {!buttonClicked&& <body className='App fill-height'> <Button style={{margin:"30%"}}  onClick={()=>{setVisibility(!visibility); new Audio(music).play();setButtonClicked(true)}}>Klausur_SoSe2022_Lösung.pdf</Button></body>}
    </div>
  );
}

export default App;
