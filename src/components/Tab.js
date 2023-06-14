import React,{useState} from 'react';

function Tab({tabs}){

    const [activeTab,setActiveTab] = useState("");

    return (

    <div>

        <ul>
        {
            tabs.map((tab)=>(
                <li onClick={()=>{setActiveTab(tab.title)}} >
                    {tab.title}
                </li>
            ))
        }
        </ul>
        
        <p>This is the content for {activeTab}.</p>
    </div>

    )
}

export default Tab;