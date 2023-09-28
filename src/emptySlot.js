import { useEffect } from 'react'
import MoleHill from './molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let randomTime = Math.ceil(Math.random()* 4000)
        let timer = setTimeout(() => {
            props.setMole(true)}, randomTime)
        return () => clearTimeout(timer)
        },[])

return (
    <div>
        <img style= {{'width': '30vw'}} src= {MoleHill} alt={'Empty Mole Hill'}/>
    </div>
)
}

export default EmptySlot