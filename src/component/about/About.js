import { useSelector } from "react-redux";

const About = () => {
  const { auth } = useSelector((state) => state.authentication);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img src={auth.user?.photoURL} />
      <h1> Hello my name is {auth.user?.displayName}</h1>
    </div>
  );
};

export default About;
