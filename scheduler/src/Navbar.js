const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h1>Vacation Scheduler</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/new_trip">New Trip</a>
          <a href="/trips">Trips</a>
          <a href="/about">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
