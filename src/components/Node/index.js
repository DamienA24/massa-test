import Data from "./components/Data";

function Node({ dataNode }) {
  return (
    <div className="container-node">
      {dataNode.length ? <p>{JSON.stringify(dataNode)}</p> : <p>No data</p>}
    </div>
  );
}

export default Node;
