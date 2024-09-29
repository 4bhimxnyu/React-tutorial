// this is to learn the first syntax of React!

// creating an unordered list which contains two li items inside with the help of React

const element = ( 
    <div>
            <h1 className= "header">This is the declarative way</h1>
            <p>This is how jsx woorks</p>
    </div>
)
//console.log(element);

//ReactDOM.render(element, document.getElementById("root"))



/* challenge 2 # recreate above lines in vanilla js by creating and appending an h1 tag in div#root 

-- create a new h1
-- give it some text content
-- give it a class name Header
-- append it as a child of div#root


const h1 = document.createElement("h1");
h1.textContent = "this is some text content";
h1.className = "header";

document.getElementsById("root").append(h1);*/

/*
Create a navbar in JSX:
Use the semantic `nav` element as the parent wrapper - Have an h1 element with the brand name of your "website" Insert an unordered list for the other nav elements
Inside the `ul`, have three `li`s for "Pricing",
"About", and "Contact"
Don't worry about styling yet it'll just be plain-looking HTML for now
*/




const  navbar = (
    <nav>
    <h1>BubbleDart Openware</h1>

<ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
</ul>
</nav>

)

ReactDOM.render(navbar,document.getElementById("root"))


