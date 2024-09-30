
/**
Challenge:
Part 1: Create a page of your own using a custom Page component
It should return an ordered list with the reasons why you're excited to be learning React :)
Render your list to the page
*/

function WhyPage(){
    return(
        
        
        <ol>
            <li>it is declarative</li>
            <li>it is efficient</li>
            <li>it is easy to learn</li>
            <li>it uses very less space to run</li>
            <li>fast and impactful</li>
        </ol>
       
    )
}

ReactDOM.render(<WhyPage/>,document.getElementById("root"))