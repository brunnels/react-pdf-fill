import { Form, Button, Row, Col } from "react-bootstrap";
import { PDFDocument } from "pdf-lib";

fillForm = async (e) => {
  e.preventDefault();
  const formUrl = "blob:https://github.com/777deb97-82c4-48bb-87a4-0b4fac2811f0";
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  console.log("loaded");
  const form = pdfDoc.getForm();
  const fields = form.getFields();
  fields.forEach((field) => {
    const type = field.constructor.name;
    const name = field.getName();
    console.log(`${type}: ${name}`);
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={this.fillForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="company-customer">
              <Form.Label>Email</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="contact-partner-customer">
              <Form.Label>Contact partner (customer)</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="post-code">
              <Form.Label>Post code</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="town">
              <Form.Label>Town</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="phone-number">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="email">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="job-number">
              <Form.Label>Job number</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="device-serial-number">
              <Form.Label>Device serial</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="serial-number-oil-wagon">
              <Form.Label>Serial number oil wagon</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="company-technician">
              <Form.Label>Company (technician)</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="name-technician">
              <Form.Label>Name (technician)</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="date-installation">
              <Form.Label>Date installation</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="date-comissioning">
              <Form.Label>Date comissioning</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label as={Col}>Test seal intact?</Form.Label>

            <Form.Group as={Col} controlId="seal-intact-yes">
              <Form.Check type="checkbox" label="Yes" />
            </Form.Group>

            <Form.Group as={Col} controlId="seal-intact-no">
              <Form.Check type="checkbox" label="No" />
            </Form.Group>

            <Form.Label as={Col}>Comment</Form.Label>
            <Form.Group as={Col} controlId="seal-intact-comment">
              <Form.Control />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
