import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PageContainer from '../PageContainer';
describe('ContentContainer', () => {
    const dummyData = "Test";
    afterEach(() => { 
        cleanup() 
    });
    test("success | expect to pass data successfully", () => {
        render(<PageContainer>{ dummyData }</PageContainer>);
        const pageContainerElement =  screen.getByText(dummyData);
        expect(pageContainerElement.textContent).toBe(dummyData);
    })
})