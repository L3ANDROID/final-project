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
  Table,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "../assets/css/avatar.css";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "4"
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Alumnos destacados</CardTitle>
                  <p>
                    Esta es la lista de alumnos con mayores puntajes acumulados
                    de asesoramiento, participación o publicación del tema
                  </p>
                  <br />
                  <Nav tabs className="justify-content-end">
                    <NavItem>
                      <NavLink
                        className={this.state.activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        Asesoramiento
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        Participación
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          this.toggle("3");
                        }}
                      >
                        Publicación
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={this.state.activeTab === "4" ? "active" : ""}
                        onClick={() => {
                          this.toggle("4");
                        }}
                      >
                        Total
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>#</th>
                        <th>Alumno</th>
                        <th>Correo</th>
                        <th>Carrera</th>
                        <th className="text-center">Puntaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <img
                            class="miniavatar-img"
                            alt="Image placeholder"
                            src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/mujer-feliz-gorro-tatuaje.jpg"
                          />
                          &nbsp;&nbsp;&nbsp;Sabrina Pomajulca
                        </td>
                        <td>sabrina.pomajulca@</td>
                        <td>Avionica y Mecanica Aeronautica</td>
                        <td className="text-center">210</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <img
                            class="miniavatar-img"
                            alt="Image placeholder"
                            src="https://demos.creative-tim.com/vue-argon-dashboard-pro//img/theme/team-4.jpg"
                          />
                          &nbsp;&nbsp;&nbsp;Pamela Loyola
                        </td>
                        <td>pamela.loyola@</td>
                        <td>Diseño y Desarrollo de Software</td>
                        <td className="text-center">195</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <img
                            class="miniavatar-img"
                            alt="Image placeholder"
                            src="https://www.psicoactiva.com/blog/wp-content/uploads/2017/07/hombre-soltero-feliz.jpg"
                          />
                          &nbsp;&nbsp;&nbsp;Paul Ponce
                        </td>
                        <td>paul.ponce@</td>
                        <td>Diseño y Desarrollo de Software</td>
                        <td className="text-center">188</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>
                          <img
                            class="miniavatar-img"
                            alt="Image placeholder"
                            src="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                          />
                          &nbsp;&nbsp;&nbsp;Leonid Cubas
                        </td>
                        <td>leonid.cubas@</td>
                        <td>Administración de Redes y Comunicaciones</td>
                        <td className="text-center">134</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <img
                            class="miniavatar-img"
                            alt="Image placeholder"
                            src="https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-persona-positiva.png"
                          />
                          &nbsp;&nbsp;&nbsp;Yenifer Santiago
                        </td>
                        <td>yenifer.santiago@</td>
                        <td>Diseño y desarrollo de Videojuegos</td>
                        <td className="text-center">129</td>
                      </tr>
                      {/* <tr>
                        <th scope="row">6</th>
                        <td>&nbsp;&nbsp;&nbsp;Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr> */}
                      <tr>
                        <th scope="row">56</th>
                        <td>
                          <img
                            class="miniavatar-img"
                            alt="Image placeholder"
                            src="https://lh3.googleusercontent.com/a-/AAuE7mBCUYsHwSbb2YTpCXP_5j-JuHwZO558PGKlYrmc"
                          />
                          &nbsp;&nbsp;&nbsp;Leandro Morocho
                        </td>
                        <td>leandro.morocho@</td>
                        <td>Diseño y Desarrollo de Software</td>
                        <td className="text-center">68</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col md="12"></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
