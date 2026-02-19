
function ListGroup() {
    const items = [
        "New York",
        "San Francisco",
        "Tokyo",
        "Paris"
    ];
//amikor html-t irunk {}-ba kell rakni a typescriptet hogy le tudjon futtni!!
  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {items.map(items =>(
                <li key={}>{items}</li>
            ))}//map az konvertál és it=> ez egy nyilnak sámít, {}render data dinamticli}
            //key hogy typescrit tudja követni
        </ul>
    </> );
}
export default ListGroup;
