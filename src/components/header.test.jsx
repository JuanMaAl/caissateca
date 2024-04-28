import {render, screen} from "@testing-library/react"
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'


describe("Componente cabecera", () => {

    it("Debe renderizar correctamente el componente cabezera", () => {
      render(
    <BrowserRouter>
          <Header />
    </BrowserRouter>

    );
      const elementH3 = screen.getByRole("heading");
      expect(elementH3).toBeInTheDocument();
      const elementBotonHome = screen.queryByText("Home");
      expect(elementBotonHome).toBeInTheDocument();
      const elementBotonAnadir = screen.queryByText("Añadir");
      expect(elementBotonAnadir).toBeInTheDocument();
      const elementBotonSalir = screen.queryByText("Salir");
      expect(elementBotonSalir).toBeInTheDocument();

    });


  });