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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Badge
} from "reactstrap";

class UserProfile extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Editar Perfil</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Código Alumno (prox)</label>
                          <Input
                            // defaultValue="109260"
                            disabled
                            placeholder="109260"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      {/* <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="michael23"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col> */}
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">Correo</label>
                          <Input
                            placeholder="leandro.morocho@tecsup.edu.pe"
                            disabled
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="12">
                        <FormGroup>
                          <label>Nombre Completo</label>
                          <Input
                            // defaultValue="Mike"
                            placeholder="Leandro Gabriel Morocho Soca"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Carrera</label>
                          <Input
                            // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="select"
                          >
                            <option className="texto-negro">
                              Diseño de Software e Integración de Sistemas
                            </option>
                            <option className="texto-negro">
                              Diseño y Desarrollo de videojuegos
                            </option>
                            <option className="texto-negro">
                              Mineria y Procesos Metalúrgicos
                            </option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Ciclo</label>
                          <Input
                            // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="select"
                          >
                            <option className="texto-negro">
                              Primer Ciclo
                            </option>
                            <option className="texto-negro">
                              Segundo Ciclo
                            </option>
                            <option className="texto-negro">
                              Tercer Ciclo
                            </option>
                            <option className="texto-negro">
                              Cuarto Ciclo
                            </option>
                            <option className="texto-negro" selected>
                              Quinto Ciclo
                            </option>
                            <option className="texto-negro">Sexto Ciclo</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Celular</label>
                          <Input
                            defaultValue="934840020"
                            placeholder="Celular"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Facebook URL (opcional)</label>
                          <Input placeholder="www.example.com" type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Acerca de mí</label>
                          <Input
                            cols="80"
                            defaultValue="Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is..."
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Guardar
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <p className="title">Este es el perfil que los demás verán</p>
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={
                          "https://lh3.googleusercontent.com/a-/AAuE7mBCUYsHwSbb2YTpCXP_5j-JuHwZO558PGKlYrmc"
                        }
                      />
                      <h5 className="text-danger title">Diseño de Software e Integración de Sistemas</h5>
                    </a>
                    <h6 className="title">Quinto Ciclo</h6>
                    <p className="description">Leandro Gabriel Morocho Soca</p>
                    <p tag="h6" className="text-info">leandro.morocho@tecsup.edu.pe</p>
                    <Badge href="#" color="default"><h3 className="normal">68 puntos</h3></Badge>
                  </div>
                  <div className="card-description text-warning">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </div>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </CardBody>
                <hr/>
                <CardFooter>
                  <div className="text-center">
                    <p>Codigo de verificación para la asesoría</p>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"}/>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
