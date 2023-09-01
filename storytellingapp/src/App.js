import { BrowserRouter,Routes, Route } from "react-router-dom";
import InteractiveStory from "./technicalcomponents/story.component";


function App() {
return(
<BrowserRouter>

  <Routes>
    <Route path="/" element= {<InteractiveStory/>} />
    
  </Routes>

</BrowserRouter>

);
  

}
export default App