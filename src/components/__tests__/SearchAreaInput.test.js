import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchAreaInput from '../SearchAreaInput';

describe('Dropdown', () => {
    const placeholder = 'Test';
    afterEach(() => { 
        cleanup() 
    });
    
    test("success | expect to have placeholder", () => {
        render(<SearchAreaInput placeholder={placeholder} />);
        const buttonElement =  screen.getByPlaceholderText(placeholder);
        expect(buttonElement).toHaveAttribute('placeholder', placeholder);
        expect(buttonElement).not.toHaveAttribute('disabled');

    });
    test("success | expect to have placeholder and to be disabled", () => {
        render(<SearchAreaInput placeholder={placeholder} disabled={true} />);
        const buttonElement =  screen.getByPlaceholderText(placeholder);
        expect(buttonElement).toHaveAttribute('placeholder', placeholder);
        expect(buttonElement).toHaveAttribute('disabled');

    });
})