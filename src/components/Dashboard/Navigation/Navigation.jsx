import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { AllServiceContext } from "../../../context/AuthProvider";

const Navigation = ({ handleShow }) => {
  const { auth } = useContext(AllServiceContext);
  const { panel } = useParams();

  return (
    <div>
      <Navbar className="mb-2" style={{ boxShadow: "20px 20px 26px #ddd" }}>
        <Container>
          <Navbar.Brand href="#home">
            <AiOutlineMenu style={{ fontSize: "35px" }} onClick={handleShow} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <h5 className="pl-5 ml-5 text-center">{panel.split(" ")}</h5>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="nav-img">
                <img
                  className="img-fluid"
                  src={auth.image}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
