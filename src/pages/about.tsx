import { createStyles } from "@mantine/core";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Background from "./images/wallpaper.jpg"

const useStyle = createStyles(() => ({
    main: {
        height: "100vh",
        textAlign: "center",
        backgroundImage: `url(${Background})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      },
      
    content: {
        padding: 0,
    } 
  }));

function About() {
  const { classes } = useStyle();
  return (
    <div className={classes.main}>
      <Navbar />
      <div className={classes.content}>
        <h2>About page working...</h2>
        {/* <Home></Home> */}
      </div>
    </div>
  );
}

export default About;