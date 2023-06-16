import { useState } from "react";
const Searchbar = () => {
  const [country, setCountry] = useState("");

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div className="searchbar">
      <p>Country: </p>
      <input
        type="text"
        name="country"
        defaultValue={country}
        onChange={handleCountry}
      />
    </div>
  );
};

export default Searchbar;
