import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  FormText,
  Input,
  Row,
  Col,
  Badge,
  NavLink,
  Nav,
  Container,
  Modal
} from "reactstrap";

import "../../assets/css/newAdvisory.css";

class NewAdvisory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalNewAdvisory: false
    };
  }

  toggleModalSearch = () => {
    console.log(this.state.modalNewAdvisory);
    this.setState({
      modalNewAdvisory: !this.state.modalNewAdvisory
    });
  };

  render() {
    return (
      <div>
        <button
          style={{
            position: "fixed",
            width: "60px",
            height: "60px",
            bottom: "40px",
            right: "40px",
            background: "#0C9",
            borderRadius: "200px",
            border: "none",
            color: "#FFF",
            outline: 0
          }}
          data-target="#AdvisoryModal"
          data-toggle="AdvisoryModal"
          onClick={this.toggleModalSearch}
        >
          <i className="tim-icons icon-simple-add" />
        </button>
        <Modal
          modalClassName="modal fade"
          isOpen={this.state.modalNewAdvisory}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            <h4 class="modal-title" id="exampleModalLongTitle">
              Generar Nueva Aseoria
            </h4>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="AdvisoryModal"
              type="button"
              onClick={this.toggleModalSearch}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
          <div className="modal-body texto-negro">
            <form>
              <div class="form-group texto-negro">
                <label for="exampleInputEmail1">Titulo</label>
                <Input
                  className="texto-negro"
                  type="text"
                  id="exampleInputEmail1"
                  placeholder="Ingrese titulo"
                />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Descripción</label>
                <textarea
                  class="form-control texto-negro"
                  id="exampleInputPassword1"
                  placeholder="Descripción de la asesoría"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Fecha y Hora</label>
                <Row>
                  <Col>
                    <Input
                      className="texto-negro"
                      type="date"
                      id="exampleInputEmail1"
                      placeholder="Ingrese titulo"
                    />
                  </Col>
                  <Col>
                    <Input
                      className="texto-negro"
                      type="time"
                      id="exampleInputEmail1"
                      placeholder="Ingrese titulo"
                    />
                  </Col>
                </Row>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Ubicación</label>
                <Input
                  className="texto-negro"
                  type="search"
                  id="exampleInputEmail1"
                  placeholder="Ingrese lugar"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Etiquetas</label>
                <Input
                  className="texto-negro"
                  type="search"
                  id="exampleInputEmail1"
                  placeholder="Ingrese lugar"
                />
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" value="" />
                  Asesoría privada
                  <span class="form-check-sign">
                    <span class="check"></span>
                  </span>
                </label>
                {/* <Badge href="#" color="primary">
                  Primary
                </Badge> */}
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewAdvisory;
