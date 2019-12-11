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
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
            <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="category">Here is a subtitle for this table</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-center">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                  {/* <div className="typography-line">
                    <h1>
                      <span>Header 1</span>
                      The Life of Black Dashboard React
                    </h1>
                  </div>
                  <div className="typography-line">
                    <h2>
                      <span>Header 2</span>
                      The Life of Black Dashboard React
                    </h2>
                  </div>
                  <div className="typography-line">
                    <h3>
                      <span>Header 3</span>
                      The Life of Black Dashboard React
                    </h3>
                  </div>
                  <div className="typography-line">
                    <h4>
                      <span>Header 4</span>
                      The Life of Black Dashboard React
                    </h4>
                  </div>
                  <div className="typography-line">
                    <h5>
                      <span>Header 5</span>
                      The Life of Black Dashboard React
                    </h5>
                  </div>
                  <div className="typography-line">
                    <h6>
                      <span>Header 6</span>
                      The Life of Black Dashboard React
                    </h6>
                  </div>
                  <div className="typography-line">
                    <p>
                      <span>Paragraph</span>
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at.
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Quote</span>
                    <blockquote>
                      <p className="blockquote blockquote-primary">
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at."{" "}
                        <br />
                        <br />
                        <small>- Noaa</small>
                      </p>
                    </blockquote>
                  </div>
                  <div className="typography-line">
                    <span>Muted Text</span>
                    <p className="text-muted">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Primary Text</span>
                    <p className="text-primary">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Info Text</span>
                    <p className="text-info">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Success Text</span>
                    <p className="text-success">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Warning Text</span>
                    <p className="text-warning">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <span>Danger Text</span>
                    <p className="text-danger">
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers...
                    </p>
                  </div>
                  <div className="typography-line">
                    <h2>
                      <span>Small Tag</span>
                      Header with small subtitle <br />
                      <small>Use "small" tag for the headers</small>
                    </h2>
                  </div>
                  <div className="typography-line">
                    <span>Lists</span>
                    <Row>
                      <Col md="3">
                        <h5>Unordered List</h5>
                        <ul>
                          <li>List Item</li>
                          <li>List Item</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>List Item</li>
                              <li>List Item</li>
                              <li>List Item</li>
                            </ul>
                          </li>
                          <li>List Item</li>
                        </ul>
                      </Col>
                      <Col md="3">
                        <h5>Ordered List</h5>
                        <ol>
                          <li>List Item</li>
                          <li>List Item</li>
                          <li>List item</li>
                          <li>List Item</li>
                        </ol>
                      </Col>
                      <Col md="3">
                        <h5>Unstyled List</h5>
                        <ul className="list-unstyled">
                          <li>List Item</li>
                          <li>List Item</li>
                          <li>List item</li>
                          <li>List Item</li>
                        </ul>
                      </Col>
                      <Col md="3">
                        <h5>Inline List</h5>
                        <ul className="list-inline">
                          <li className="list-inline-item">List1</li>
                          <li className="list-inline-item">List2</li>
                          <li className="list-inline-item">List3</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                  <div className="typography-line">
                    <span>Code</span>
                    <p>
                      This is <code>.css-class-as-code</code>
                      , an example of an inline code element. Wrap inline code
                      within a <code>{`<code>...</code>`}</code>
                      tag.
                    </p>
                    <pre>
                      1. #This is an example of preformatted text.<br />
                      2. #Here is another line of code
                    </pre>
                  </div> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Typography;
