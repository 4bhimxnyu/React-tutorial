
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM
1. Create a sample page in JSX (≥ 4 elements) and save them in a variable 2. Select the div with the ID of "root" and use `.append()` to append your JSX
3. See if you can guess what will show up in the browser before running the code
4. See if you can explain what actually shows up in the browser
*/

const samplePage = (
    <div>
        <h1>
            this is our jsx web page
        </h1>
        <p>This is to show how our JSX Web Page works</p>
        <table>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>COlumn 3</th>
            </tr>
            <tr>
                <td>Abhi</td>
                <td>Learns</td>
                <td>React</td>
            </tr>
        </table>
        <ol>
            <li>    I </li>
            <li>    love</li>
            <li>    React</li>
        </ol>
    </div>
)
/*
this will give the output as [object , object] because of missing jsx and json extension
document.getElementById("root").append(samplePage)
*/

ReactDOM.render(samplePage,document.getElementById("root"))