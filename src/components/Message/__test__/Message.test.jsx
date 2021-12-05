import { render } from "@testing-library/react";
import { Message } from "../index.js";

describe("Тестирование компонента Message", () => {
    it("Визуализация сообщения", () => {
      const message = render(<Message msg={{ text: "Текст сообщения", author: "author" }} />);
      const msgText = message.getByText("Текст сообщения");
      const authorText = message.getByText("author");
      expect(msgText).toBeInTheDocument();
      expect(authorText).toBeInTheDocument();
    });
  
    it("Тест по снимку с автором", () => {
      const message = render(<Message msg={{ text: "messagetext", author: "author" }} />);
      expect(message).toMatchSnapshot();
    });

    it("Тест по снимку без автора", () => {
      const message = render(<Message msg={{ text: "messagetext", author: "" }} />);
      expect(message).toMatchSnapshot();
    });
  });