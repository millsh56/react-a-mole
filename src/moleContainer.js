import { useState } from 'react';
import Mole from './mole.js'
import EmptySlot from './emptySlot.js'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(true)

    const hitMole= () => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = () => {
    theMole 
    ? <Mole setScore={props.setScore} toggle={setTheMole} hitMole={hitMole}/> 
    : <EmptySlot toggle={setTheMole}/>
    }

    return (
            <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {
                theMole 
                ? <Mole setTheMole={setTheMole} setScore={props.setScore} toggle={setTheMole} hitMole={hitMole}/> 
                : <EmptySlot toggle={setTheMole}/> 
            }
        </div>
    )
}

export default MoleContainer
 