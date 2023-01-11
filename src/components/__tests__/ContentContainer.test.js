import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContentContainer from '../ContentContainer';
describe('ContentContainer', () => {
    const dummyData = "Test";
    afterEach(() => { 
        cleanup() 
    });
    test("success | expect to pass data successfully", () => {
        render(<ContentContainer>{ dummyData }</ContentContainer>);
        const contentContainerElement =  screen.getByText(dummyData);
        expect(contentContainerElement.textContent).toBe(dummyData);
    })
})