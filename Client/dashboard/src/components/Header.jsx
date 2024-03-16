import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>
            <Navbar   style={{ marginBottom: '20px', padding: '10px',backgroundColor: '#800080' }}>
                <Container>
                    <Navbar.Brand style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffff' }}>Data Virtualization Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}


export default Header