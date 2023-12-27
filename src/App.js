import './App.css';
import Header from "./MyComponents/header";
import Carousel from "./MyComponents/carousel";
import Footer from "./MyComponents/footer.js";
function App() {
  return (
    <>
    <Header/>
    <Carousel/>
    <br/><br/><br/>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
    <iframe src='/cards1.html' width={"100%"} height={"620px"} id="scrollspyHeading1"/>
    <br/><br/><br/>
    <iframe src='/cards2.html' width={"100%"} height={"620px"} id="scrollspyHeading2"/>
    <br/><br/><br/>
    <iframe src='/card3.html' width={"100%"} height={"620px"} id="scrollspyHeading3"/>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
