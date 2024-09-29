// create a react component , name it as Maincontent and have it return a simple h1 tag saying "i'm learning React!"

function  Maincontent() {
    return (
        <h1>I'm learning React!</h1>)
}

ReactDOM.render(
    Maincontent()
,document.getElementById("main")
)
