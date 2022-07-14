import { useState, useEffect } from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Node from "./components/Node";
function App() {
  const [valueToSearch, setValueToSearch] = useState("");
  const [dataNode, setDataNode] = useState([]);

  async function getDataMassaNode() {
    const response = await fetch("https://test.massa.net/api/v2/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "get_addresses",
        params: [[`${valueToSearch}`]],
        id: 0,
      }),
    });
    const data = await response.json();
    const checkData = data.result ?? [];
    setDataNode(checkData);
  }

  function submitData() {
    return valueToSearch ? getDataMassaNode() : null;
  }
  return (
    <div className="container-app">
      <Header />
      <SearchBar setValueToSearch={setValueToSearch} submitData={submitData} />
      <Node dataNode={dataNode} />
    </div>
  );
}

export default App;
