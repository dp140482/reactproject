import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store";
import Profile from "../index.js";
import { initialState } from "../../../store/profile/reducer";

describe("Тестирование компонента Profile", () => {
    it("Визуализация профиля", () => {
        const profile = render(<Provider store={store}><Profile/></Provider>);
        const header = profile.getByText("Профиль");
        const signOutButton = profile.getByText("SIGN OUT");
        expect(header).toBeInTheDocument();
        expect(signOutButton).toBeInTheDocument();
    });
    it("Название переключателя", () => {
        const profile = render(<Provider store={store}><Profile/></Provider>);
        const label = profile.getByText(initialState.name);
        expect(label).toBeInTheDocument();
    });
    it("Визуализация переключателя", () => {
        const profile = render(<Provider store={store}><Profile/></Provider>);
        const checkbox = profile.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.checked).toBe(false);
    });
    it("Переключение переключателя", () => {
        const profile = render(<Provider store={store}><Profile/></Provider>);
        const checkbox = profile.getByRole("checkbox");
        checkbox.click();
        expect(checkbox.checked).toBe(true);
    });
});