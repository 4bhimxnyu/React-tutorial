
/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for what you're trying to build.
We'll be adding styling to it later.
Hints:
* The React logo is a file in the project tree, so you can access it by using `src="./react-logo.png" in your image element
* You can also set the 'width` attribute of the image element just like in HTML. In the slide, I have it set to 40px
*/

const page = (
    <div>
            <img src="./reactlogo.png" width="40px"></img>
        
        
            <h1><b>Fun Facts about React</b></h1>
           
            <ul>
                <li>Was first deployed in 2013</li>
                <li>Has over 100k GitHub stars</li>
                <li>was originally created by Jordan Walke</li>  
                <li>Is maintained by Facebook</li>  
                <li>Power thousands of enterprises apps</li>
            </ul>
            
        
    </div>
)

ReactDOM.render(page,document.getElementById("root"))