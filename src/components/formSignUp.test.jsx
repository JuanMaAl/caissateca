import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormSignUp from './FormSignUp'
import { BrowserRouter } from 'react-router-dom'


describe("Componente de Registro", () => {
    it("Debe renderizar el componente de formulario de registro correctamente", () => {
      render(
    <BrowserRouter>
          <FormSignUp />
    </BrowserRouter>

    );
      const elementH2 = screen.getByRole("heading");
      expect(elementH2).toBeInTheDocument();
      const elementBotonEnviar = screen.getByRole("button");
      expect(elementBotonEnviar).toBeInTheDocument();
      userEvent.click(elementBotonEnviar);
      const elementInputs = screen.getAllByRole("textbox");
      expect (elementInputs).toBeInTheDocument;
      const elementLink = screen.getByRole("link");
      expect (elementLink).toBeInTheDocument;
    });
  });