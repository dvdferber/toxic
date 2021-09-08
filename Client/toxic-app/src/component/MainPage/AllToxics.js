import { useEffect, useState } from "react";
import Toxic from "./toxic";


export default function AllToxics(props){
 
    const [AllToxics, setAllToxics] = useState([123, 123, 123])


    useEffect(()=>{
        let unmount = true
        const getToxics = async()=>{
            let data  = props.toxics
            unmount && setAllToxics(data)
        }
        unmount && getToxics()
        return ()=>{
            unmount = false
        }
    },[props.toxics])

    let toxicToRrender = AllToxics.map(toxic => {
        let id = toxic._id
        return (
            toxic && <div key={id}><Toxic  toxic={toxic}/></div>
        )
    })
    
    return (
        <div className='all-toxic'>
            <h1>all Toxics</h1>
            {toxicToRrender}
        </div>
    )
}