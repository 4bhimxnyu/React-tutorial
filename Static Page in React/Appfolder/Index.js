import Heading from  './Appfolder/Heading';
import Footer from   './Appfolder/Footer';
import Body from './Appfolder/Body';



function  App(){
    return(
        <div>
            <Heading />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("contain"))