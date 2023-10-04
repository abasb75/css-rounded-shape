export default function Input({name,value,setValue,placehoder=''}){
    return (<div className="flex flex-col gap-2 w-full">
        <label className="text-xs dark:text-pink-400">shape {name} :</label>
        <input 
            className="border-2 px-4 border-slate-300 dark:bg-slate-600 dark:text-gray-100 rounded-md w-full h-10"
            id={name}
            name={name}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            type="number" 
            placeholder={placehoder}
        />
    </div>)
}
