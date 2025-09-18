import { useState } from "react";

function App5(){

    var [data , setData] = useState(1000)

    function add()
    {
        setData(data + 25)
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={add}> ADD </button>
        </div>
    )
}

export default App5;