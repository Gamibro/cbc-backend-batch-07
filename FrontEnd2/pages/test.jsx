import { useState } from "react"
import mediaUpload from "../utils/mediaUpload";


export default function Test(){
    const [file,setFile] = useState(null);
    async function uploadImage(){
        const link = await mediaUpload(file);
        console.log(link);
        

    }
    return(
        <div className="w-full h-full flex justify-center items-center">
            <input type="file" onChange={(e) => 
                {
                    setFile(e.target.files[0]);
                }
            } />
            <button onClick={uploadImage} className="bg-accent text-white px-4 py-2 rounded">Upload</button>

        </div>
    )
}