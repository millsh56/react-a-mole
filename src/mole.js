import { useEffect } from 'react'
import molePic from './mole.png'

function Mole(props) {

    useEffect(() => {
        let randomTime = Math.ceil(Math.random()* 4000)
    
        let timer = setTimeout(() => {
            props.setMole(false)}, randomTime)
        return () => clearTimeout(timer)
        },[])
        console.log('props', props)
   return (
    <div>
        <img style= {{'width': '30vw'}} src= {molePic} onClick={props.hitMole} alt={'Mole'}/>
    </div>
)
}


export default Mole