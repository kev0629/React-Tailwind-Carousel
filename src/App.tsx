import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import Card from './components/Card'
import Carousel from './components/Carousel'

function App() {
  const lst = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  

  return (
    <div className="App">
      <Carousel>
      {lst.map((number) => {
              return (
                <Card num={number} key={number}/>
              )
            })}
      </Carousel>
    </div>
  )
}

export default App
