
import React from "react";
import './../styles/App.css';
import Tab from "./Tab"

let tabs = [{title:"Tab",content:"1"},{title:"Tab",content:"2"},{title:"Tab",content:"3"}];
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tab tabs={tabs} />
    </div>
  )
}

export default App
