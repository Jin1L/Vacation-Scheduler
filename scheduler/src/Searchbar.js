const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="location">
        <p>Location</p>
        <input type="text" placeholder="Where are you going?"></input>
      </div>
      <div className="start_date">
        <p>Start Date</p>
        <input type="text" placeholder="Start Date"></input>
      </div>
      <div className="end_date">
        <p>End Date</p>
        <input type="text" placeholder="End Date"></input>
      </div>
      <div className="people">
        <p>People</p>
        <input type="text" placeholder="How many people?"></input>
      </div>
    </div>
  );
};

export default Searchbar;
