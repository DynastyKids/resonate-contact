import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { Navbar } from 'react-bootstrap';

export default function TheNavBar() {
    return (
        <Navbar bg="light" expand="lg" display='flex' position='fixed'>
            <Container>
                <Navbar.Brand href="/">Resonate Contact</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}