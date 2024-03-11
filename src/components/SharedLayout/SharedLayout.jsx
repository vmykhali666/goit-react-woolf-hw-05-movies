import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    );
};