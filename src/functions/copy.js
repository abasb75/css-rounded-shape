import copyToClipbord  from "@abasb75/copy-to-clipboard";
import { toast } from "react-toastify";

function copy(text){
    copyToClipbord(text).then(
        res=>{
            toast.success('Copied!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    ).catch(err=>{
        toast.error();('Error when copy!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    });
    
}

export default  copy;