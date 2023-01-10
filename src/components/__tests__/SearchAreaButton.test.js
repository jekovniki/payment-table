import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchAreaButton from '../SearchAreaButton';

describe('Dropdown', () => {
    const buttonText = 'Button';
    afterEach(() => { 
        cleanup() 
    });
    
    test("success | expect to have content", () => {
        render(<SearchAreaButton>{ buttonText }</SearchAreaButton>);
        const buttonElement =  screen.getByText(buttonText);
        expect(buttonElement).toHaveTextContent(buttonText);
    });
})