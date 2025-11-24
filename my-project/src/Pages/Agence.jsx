import React from 'react'
import UpperPortion from '../Component/Agence/UpperPortion'
import LowerPortion from '../Component/Agence/LowerPortion'

const Agence = () => {
  return (
    <div> 
    <div >
      <UpperPortion/>
    </div>
    <div className='mt-[210vh] '>
<LowerPortion/>
    </div>
    </div>
  )
}

export default Agence