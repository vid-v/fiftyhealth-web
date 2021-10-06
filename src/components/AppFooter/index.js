import * as React from 'react';
import { Button, Container } from 'react-bootstrap';
class AppFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Button>Footer Button</Button>
                </Container>
            </footer>
        );
    }
}

export default AppFooter;
