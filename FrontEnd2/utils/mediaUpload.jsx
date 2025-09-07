import { createClient } from "@supabase/supabase-js";

const supaBase = createClient(import.meta.env.VITE_SUPABASE_URL,import.meta.env.VITE_ANON_KEY);

export default function mediaUpload(file){
    return new Promise(
        (resolve,reject)=>{
            
            if(file ==null){
                reject("No file selected");
                
            }else{
                const timeStamp = new Date().getTime();
                const fileName = timeStamp+file.name;
                supaBase.storage.from("images").upload(fileName,file,{
                    upsert:false,
                    cacheControl:'3600'
                }).then(()=>{
                    const publicUrl = supaBase.storage.from('images').getPublicUrl(fileName).data.publicUrl;
                    console.log(publicUrl);
                    resolve(publicUrl);
                }).catch((err)=>{
                    reject(err);
                });

            }

        }
    );



}

