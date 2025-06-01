import Title from "../components/Title"

import React from 'react'

export default function RandomColorGen() {
    const getColor = ()=>{
        // e.target.style.backgroundColor='yellow'
        let hexa_code = '0123456789ABCDEF';
        let color_code = `#`;
        for(let i=0; i<6; i++){
            color_code += hexa_code[Math.floor(Math.random()*16)]
        }
        console.log(color_code);
        document.body.style.backgroundColor = color_code;
    }
    const randomColorTimer = ()=> {
        let count=0
        while(count <=5){
            setTimeout(() => {
            getColor();
        }, 3000);
        count+=1;
        }
    }
  return (
    <div className="text-center">
      <Title text={'Random Color Gen'}/>

      <div className="mb-3"></div>
      <button className="btn" onClick={randomColorTimer}>Click</button>
    </div>
  )
}
