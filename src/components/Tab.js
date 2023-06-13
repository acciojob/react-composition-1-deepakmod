import React,{useState} from 'react';

function Tab({tabs}){

    const [activeTab,setActiveTab] = useState("");
    function showTab(content){
        setActiveTab(content);
    }
    return (

    <div>

        <ul>
        {
            tabs.map((tab)=>(
                <li onClick={()=>{showTab(tab.title)}} >
                    {tab.title}
                </li>
            ))
        }
        </ul>
        
        {activeTab && <p>This is the Content for {activeTab}</p>}
            

    </div>

    )
}

export default Tab;