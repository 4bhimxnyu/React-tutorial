/*
Part 2:
Add a header` element with a nested `nav` element. Inside the `nav`, include a `img` element with the image of the React logo inside (src="./react-logo.png") and make sure to set the width to something more manageable so it doesn't take up the whole screen
Add an `h1` with some text describing the page. (E.g. "Reasons
I'm excited to learn React"). Place it above the ordered list. Add a footer' after the list that says:
"20xx <last name here> development. All rights reserved."
*/

function  App() {
    return (
        <div> 
            <HeadIng/>
            <Section/>
            <Footer/>
        </div>
    )
}

function Section(){
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
                <ul className="list">
                    <li>declarative</li>
                    <li>Components</li>
                    <li>Easy</li>
                    <li>fast</li>
                </ul>
         </div>
    )
}

function HeadIng(){
    return (
        <div>
            <img src="reactlogo.png" ></img>
            
         </div>
    )
}

function Footer(){
    return (
        <footer>
            <h3><small>2024 4bhimxnyu development. All rights reserved.</small></h3>
        </footer>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))
