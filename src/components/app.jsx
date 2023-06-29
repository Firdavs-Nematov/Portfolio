import { Container } from "@mui/material";
import { About, Contact, Home, Portfolio, Sevrices, Navbar } from ".";

export const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Home />
                <About />
                <Sevrices />
                <Portfolio />
                <Contact />
            </Container>
            ;
        </>
    );
};
