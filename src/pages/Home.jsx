import { IoHomeSharp } from "react-icons/io5";

const styles = {
  title: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 40,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#5CD3A8",
    marginTop: "60px",
    marginBottom: "60px",
  },
};

const Home = () => {
  return (
    <div>
      <h1 style={styles.title}>
        welcome to tweets app{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <IoHomeSharp size="250" color="#5735a3" />
    </div>
  );
};

export default Home;
