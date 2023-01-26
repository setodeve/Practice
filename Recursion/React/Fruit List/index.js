let dom = document.getElementById("root");
const { useEffect } = React;
const App = () => {
    useEffect(() => {
            console.log("Processed useEffect");
        })
    return(
        <div>
            <p> CDN only で Reactが使えるか確認中 </p>
        </div>
    );
}
ReactDOM.render(<App />, dom);