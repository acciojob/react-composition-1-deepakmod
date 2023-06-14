import React,{useState} from 'react';

function Tab({tabs}){

    const [activeTab,setActiveTab] = useState("");

    return (

    <div>

        <ul>
        {
            tabs.map((tab)=>(
                <li onClick={()=>{setActiveTab(tab.content)}} >
                    {tab.title} {tab.content}
                </li>
            ))
        }
        </ul>
        
        <p>This is the content for Tab {activeTab}.</p>
    </div>

    )
}

export default Tab;