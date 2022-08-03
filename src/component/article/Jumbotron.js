import { Carousel } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <Carousel style={{ margin: "30px 30px 0 30px" }}>
      <Carousel.Item>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "250px",
            margin: 0,
            padding: 0,
          }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>{" "}
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "250px",
            margin: 0,
            padding: 0,
          }}
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Jumbotron;
