import { useEffect, useState } from "react";
import Toxic from "./toxic";


export default function AllToxics(props){
 
    const [AllToxics, setAllToxics] = useState([123, 123, 123])


    useEffect(()=>{
        let unmount = true
        const getToxics = async()=>{
            let data  = await props.toxics
            unmount && setAllToxics(data)
        }
        unmount && getToxics()
        return ()=>{
            unmount = false
        }
    },[props.toxics])

    let toxicToRrender = AllToxics.map(toxic => {
        return (
            toxic && <Toxic key={toxic._id} toxic={toxic}/>
        )
    })
    
    return (
        <div className='all-toxic'>
            <h1>all Toxics</h1>
            {toxicToRrender}
        </div>
    )
}