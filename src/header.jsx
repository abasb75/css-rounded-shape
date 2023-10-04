import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./store/conf";

export default function Header(){

    return (<div className="w-full h-16 overflow-hidden bg-white dark:bg-slate-800 shadow-sm relative flex justify-between px-4">
        <div className="flex items-center h-full px-4 gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-[59%_41%_/_62%_44%_56%_38%]"></div>
            <div>
                <h1 className="text-pink-800 dark:text-pink-600 font-bold">CSS-ROUNDED-SHAPE</h1>
                <p className="text-gray-600 dark:text-pink-100 text-xs opacity-70">rounded shape generator</p>
            </div>
        </div>
        <div className="flex px-4 items-center">
            <ul className="flex gap-4 dark:text-yellow-100">
                <li>
                    <DarkMode />
                </li>
                <li>
                    <a href="https://github.com/abasb75" target="_blank">
                         <span className="icon-github  w-5 h-6 leading-6 text-2xl"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>);
}


function DarkMode(){
    const darkMode = useSelector(s=>s.conf.darkMode);
    const dispatch = useDispatch();
    return (
        <span 
        className={`icon-${darkMode?'sun':'moon-o'} w-5 h-6 leading-6 text-2xl cursor-pointer`}
        onClick={()=>dispatch(toggleDarkMode())}
        ></span>
    );
}