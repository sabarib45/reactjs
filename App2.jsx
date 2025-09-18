import img1 from "./components/assets/image1.jpeg"
import img2 from "./components/assets/image2.jpeg"

function App2()
{
    var name = "Sabari";
    return(
        <div>
        <h1>hello {name}</h1>

        <img src={img1} width={300} height={150}></img>
        <img src={img2} width={500} height={250}></img>
        
 </div>
    )
}
export default App2;