import Button from "./components/Button";

function SearchBar({ setValueToSearch, submitData }) {
  function handleSearchBar(event) {
    setValueToSearch(event.target.value);
  }
  return (
    <div className="container-search-bar">
      <input
        type="search"
        placeholder="type your node address"
        onChange={handleSearchBar}
      ></input>
      <Button submitData={submitData} />
    </div>
  );
}

export default SearchBar;
