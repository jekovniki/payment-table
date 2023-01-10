import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MainButton from '../MainButton';

describe('Dropdown', () => {
    const buttonText = 'Button';
    afterEach(() => { 
        cleanup() 
    });
    
    test("success | expect to have content", () => {
        render(<MainButton>{ buttonText }</MainButton>);
        const buttonElement =  screen.getByText(buttonText);
        expect(buttonElement).toHaveTextContent(buttonText);
    });
})