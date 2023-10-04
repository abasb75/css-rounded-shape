import BoxShape from "./boxShape";
import Header from "./header";
import Sidebar from "./sidebar";

function App() {
  
  

  return (<>
    <div className="flex flex-col items-center content-center  h-[100vh] bg-slate-50 dark:bg-slate-950">
          <Header />          
          <div className="flex w-full h-full flex-1">
            <Sidebar />
            <BoxShape />
          </div>


    </div>
    
  </>)
}

export default App
