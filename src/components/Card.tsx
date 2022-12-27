import React from 'react'

type Props = {
  num: number,
}

const Card = (props: Props) => {
  return (
    <div className="min-w-fit m-5 bg-slate-200 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-10">
            <div className="font-bold text-xl text-center mb-2">{props.num}</div>
        </div>
        </div>
  )
}
export default Card