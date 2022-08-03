import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ marginTop: "4em" }}>
      <Navbar
        className="justify-content-center border"
        fixed="bottom"
        bg="white"
      >
        <span>created by irvan</span>
      </Navbar>
    </div>
  );
};

export default Footer;
