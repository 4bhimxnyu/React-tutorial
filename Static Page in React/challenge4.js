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
             <header>
                <nav className="nav-bar">
                    <img src="reactlogo.png" ></img>
                    <h1 id="heading">Reasons I'm excited to learn React</h1>
                </nav>
            </header>
            <section >
                <ul className="list">
                    <li>declarative</li>
                    <li>Components</li>
                    <li>Easy</li>
                    <li>fast</li>
                </ul>
            </section>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))
