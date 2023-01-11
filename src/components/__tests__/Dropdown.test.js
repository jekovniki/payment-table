import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import content from "../../data/content.json";
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
    afterEach(() => { 
        cleanup() 
    });
    
    test("success | expect to have content and to be active", () => {
        render(<Dropdown options={content.dropdown.data} />);
        const dropdownElement =  screen.getByDisplayValue(content.dropdown.data.equal);
        expect(dropdownElement).toHaveTextContent(content.dropdown.data.equal);
        expect(dropdownElement).not.toHaveAttribute('disabled');
    });
    test("success | expect to have content and to be disabled", () => {
        render(<Dropdown isDisabled={true} options={content.dropdown.data} />);
        const dropdownElement =  screen.getByDisplayValue(content.dropdown.data.equal);
        expect(dropdownElement).toHaveTextContent(content.dropdown.data.equal);
        expect(dropdownElement).toHaveAttribute('disabled');
    })
})