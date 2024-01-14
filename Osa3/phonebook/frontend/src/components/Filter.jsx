const Filter = (props) => {

    const setFilter = props.setFilter;

    return (
      <div>
       filter shown with <br></br>
       <input type="text" 
        placeholder="Search..." 
        className="search" 
        onChange={e => setFilter(e.target.value)} />
      </div>
    )
  }

  export default Filter;