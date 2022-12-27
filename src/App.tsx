import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import Card from './components/Card'

function App() {
  const lst = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
  const [ width, setwidth] = useState<number>(0)
  const carousel = useRef<any>()
  const next = useRef<any>()
  const [itemsCount, setItemsCount] = useState<number>(0)
  const [scroll, setScroll] = useState<number>(0)
  
  useEffect(() => {
    setwidth(carousel.current.scrollWidth-carousel.current.offsetWidth + 20)
  }, [])

  const toggleNext = () => {
    if (carousel.current.scrollWidth != carousel.current.offsetWidth){

      setScroll(x => x-100)
      setItemsCount(itemsCount-1) 
    }
  }


  const togglePrevious = () => {
    if (carousel.current.scrollWidth < 1986){
      setScroll(x => x+100)
      setItemsCount(itemsCount-1) 
    }
  }

  return (
    <div className='m-20 flex flex-row items-center'>
      <button className='pointer-events-auto mr-2' onClick={()=>togglePrevious()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      < motion.div ref={carousel} className='carousel cursor-grab overflow-hidden '>
        <motion.div drag="x" dragConstraints={{right:0,left:-width}} className='inner-carousel flex flex-row ' animate={{x:scroll}}>
            {lst.map((number) => {
              return (
                <Card num={number} key={number}/>
              )
            })} 
        </motion.div>
      </motion.div>
      <button className=' ml-2 pointer-events-auto' onClick={()=>toggleNext()} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  )
}

export default App
