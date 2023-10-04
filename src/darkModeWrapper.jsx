import { useSelector } from "react-redux";

export default function DarkModeWrapper({children}){
    const darkMode = useSelector(s=>s.conf.darkMode);
    return (<div className={`${darkMode?'dark':'light'}`}>
        {children}
    </div>);
}