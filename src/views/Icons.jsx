/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  CardImgOverlay,
  CardText,
  CardFooter,
  Row,
  Button,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Popover,
  PopoverHeader,
  PopoverBody,
  UncontrolledTooltip
} from "reactstrap";

import "../assets/css/switch.css";

import "../assets/css/avatar.css";

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalTooltips: false,
      popover: false
    };
    this.toggleModalTooltips = this.toggleModalTooltips.bind(this);
  }
  toggleModalTooltips() {
    this.setState({
      modalTooltips: !this.state.modalTooltips
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <h3 className="title">ASESORIAS DISPONIBLES</h3>
                  <p className="h5">
                    Aquí puedes ver la lista de consultas que todos necesitan.
                    Puedes asesorarlas si crees conocer el tema o participar en
                    alguna que te interese y esté libre. Por una comunidad
                    unida!
                  </p>
                </CardHeader>
                <CardBody>
                  <Card>
                    <Row>
                      <Col className="pr-md-1" md="3">
                        <CardImg
                          src={
                            "https://ak6.picdn.net/shutterstock/videos/1027713866/thumb/10.jpg"
                          }
                          style={{ height: "100%" }}
                        ></CardImg>
                        <CardImgOverlay>
                          <Container>
                            <CardTitle>Lugar de Prueba</CardTitle>
                          </Container>
                        </CardImgOverlay>
                      </Col>
                      <Col>
                        <CardHeader color="warning">
                          <Row>
                            <Col>
                              <CardTitle tag="h4">
                                Titulo de Asesoria 1
                              </CardTitle>
                            </Col>
                            <Col xs="auto" className="text-right">
                              <div className="vacio">
                                Publicada por:&nbsp;&nbsp;{"Alicia Smith"}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                              </div>
                              <a href="#">
                                <img
                                  className="avatar-img"
                                  alt="Image placeholder"
                                  src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                                />
                              </a>
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <CardText>
                            Descripcion de la asoria, hola hola probando..
                            Torimee. Hola meluuu, Saludos de Perú. Qué más puedo
                            agregar? No sé. Some quick example text to build on
                            the card title and make up the bulk of the card's
                            content.
                          </CardText>
                        </CardBody>
                        <CardFooter>
                          <Row>
                            <Col xs="auto">
                              Asesor(a):&nbsp;&nbsp;
                              <img
                                className="miniavatar-img"
                                alt="Image placeholder"
                                src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/mujer-feliz-gorro-tatuaje.jpg"
                              />
                            </Col>
                            <Col xs="auto">
                              participantes:&nbsp;&nbsp;
                              <img
                                className="miniavatar-img"
                                alt="Image placeholder"
                                src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/hombre-soltero-feliz.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
                              />
                            </Col>
                            <Col xs="auto">
                              <p tag="h5">
                                Fecha y Hora: 23/12/19 &nbsp;&nbsp; 10:00 AM
                              </p>
                            </Col>
                            <Col className="text-right">
                              <Button
                                className="btn-round btn-icon"
                                color="primary"
                                onClick={this.toggleModalTooltips}
                              >
                                <i className="tim-icons icon-check-2" />
                              </Button>
                            </Col>
                          </Row>
                        </CardFooter>
                      </Col>
                    </Row>
                  </Card>

                  <Card>
                    <Row>
                      <Col className="pr-md-1" md="3">
                        <CardImg
                          src={
                            "https://www.fablabs.io/media/W1siZiIsIjIwMTcvMDEvMjgvMTMvNTAvMDgvOTc2YjJjZTAtOWI4OS00YjM1LTllMzUtNDdiNzI3ZGIwMTI5L0ZhYiBMYWIgVGVjc3VwIGkrRGUuanBnIl0sWyJwIiwidGh1bWIiLCI4MDB4Il1d/Fab%20Lab%20Tecsup%20i%2BDe.jpg?sha=546252f6f6d4fdf5"
                          }
                          style={{ height: "100%" }}
                        ></CardImg>
                        <CardImgOverlay>
                          <Container>
                            <CardTitle>Laboratio FaTLab</CardTitle>
                          </Container>
                        </CardImgOverlay>
                      </Col>
                      <Col>
                        <CardHeader color="warning">
                          <Row>
                            <Col>
                              <CardTitle tag="h4">
                                Titulo de Asesoria 2
                              </CardTitle>
                            </Col>
                            <Col xs="auto" className="text-right">
                              <div className="vacio">
                                Publicada por:&nbsp;&nbsp;{"Alicia Smith"}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                              </div>
                              <a href="#">
                                <img
                                  className="avatar-img"
                                  alt="Image placeholder"
                                  src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                                />
                              </a>
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <CardText>
                            Descripcion de la asoria, hola hola probando..
                            Torimee. Hola meluuu, Saludos de Perú. Qué más puedo
                            agregar? No sé. Some quick example text to build on
                            the card title and make up the bulk of the card's
                            content.
                          </CardText>
                        </CardBody>
                        <CardFooter>
                          <Row>
                            <Col xs="auto">
                              Asesor(a):&nbsp;&nbsp;N.A
                              {/* <img
                                class="miniavatar-img"
                                alt="Image placeholder"
                                src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/mujer-feliz-gorro-tatuaje.jpg"
                              /> */}
                            </Col>
                            <Col xs="auto">
                              participantes:&nbsp;&nbsp;
                              <img
                                className="miniavatar-img"
                                alt="Image placeholder"
                                src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/hombre-soltero-feliz.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
                              />
                            </Col>
                            <Col xs="auto">
                              <p tag="h5">
                                Fecha y Hora: 23/12/19 &nbsp;&nbsp; 10:00 AM
                              </p>
                            </Col>
                            <Col className="text-right">
                              <Button
                                className="btn-round btn-icon"
                                color="primary"
                              >
                                <i className="tim-icons icon-check-2" />
                              </Button>
                            </Col>
                          </Row>
                        </CardFooter>
                      </Col>
                    </Row>
                  </Card>

                  <Card>
                    <Row>
                      <Col className="pr-md-1" md="3">
                        <CardImg
                          src={
                            "https://app.tecsup.edu.pe/file/uds/pub1888/s.JPG"
                          }
                          style={{ height: "100%" }}
                        ></CardImg>
                        <CardImgOverlay>
                          <Container>
                            <CardTitle>Auditorio</CardTitle>
                          </Container>
                        </CardImgOverlay>
                      </Col>
                      <Col>
                        <CardHeader color="warning">
                          <Row>
                            <Col>
                              <CardTitle tag="h4">
                                Titulo de Asesoria 3
                              </CardTitle>
                            </Col>
                            <Col xs="auto" className="text-right">
                              <div className="vacio">
                                Publicada por:&nbsp;&nbsp;{"Alicia Smith"}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                              </div>
                              <a href="#">
                                <img
                                  className="avatar-img"
                                  alt="Image placeholder"
                                  src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                                />
                              </a>
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <CardText>
                            Descripcion de la asoria, hola hola probando..
                            Torimee. Hola meluuu, Saludos de Perú. Qué más puedo
                            agregar? No sé. Some quick example text to build on
                            the card title and make up the bulk of the card's
                            content.
                          </CardText>
                        </CardBody>
                        <CardFooter>
                          <Row>
                            <Col xs="auto">
                              Asesor(a):&nbsp;&nbsp;
                              <img
                                className="miniavatar-img"
                                alt="Image placeholder"
                                src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/mujer-feliz-gorro-tatuaje.jpg"
                              />
                            </Col>
                            <Col xs="auto">
                              participantes:&nbsp;&nbsp;
                              <img
                                className="miniavatar-img"
                                alt="Image placeholder"
                                src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/hombre-soltero-feliz.jpg"
                              />
                              <img
                                className="miniavatar-img pegadito"
                                alt="Image placeholder"
                                src="https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
                              />
                            </Col>
                            <Col xs="auto">
                              <p tag="h5">
                                Fecha y Hora: 23/12/19 &nbsp;&nbsp; 10:00 AM
                              </p>
                            </Col>
                            <Col className="text-right">
                              <Button
                                className="btn-round btn-icon"
                                color="primary"
                              >
                                <i className="tim-icons icon-check-2" />
                              </Button>
                            </Col>
                          </Row>
                        </CardFooter>
                      </Col>
                    </Row>
                  </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Modal
            isOpen={this.state.modalTooltips}
            toggle={this.toggleModalTooltips}
          >
            <ModalHeader
              className="justify-content-center"
              toggle={this.toggleModalTooltips}
            >
              Titulo de Asesoria 1
            </ModalHeader>
            <ModalBody>
              <h5 className="texto-negro">Como Asesor</h5>
              <label class="switch">
                <a href="/#" id="this">
                  <input type="checkbox" />
                </a>
                <span class="slider round"></span>
              </label>
              <hr />
              <h5 className="texto-negro">Como Participante</h5>
              <p>
                <label class="switch" id="that">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
                <UncontrolledTooltip placement="top" target="this">
                  Esta asesoría ya cuenta con un asesor.
                </UncontrolledTooltip>
                <UncontrolledTooltip placement="top" target="that">
                  Aún queda(n) 4 lugar(res) disponible(s)
                </UncontrolledTooltip>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModalTooltips}>
                Close
              </Button>
              <Button color="primary">Aceptar</Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}

export default Icons;
