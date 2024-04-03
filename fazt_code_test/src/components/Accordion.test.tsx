
import { beforeEach, describe, expect, test } from "vitest";
import Accordion from "./Accordion";
import { fireEvent, render, screen } from '@testing-library/react'

describe('Accordion', () => {
    beforeEach(() => {
        render(
            <Accordion title="Testing">
                <h4>Content</h4>
            </Accordion>
        );
    });


    test('Should the show the title for according', () => {
        expect(screen.getByText('Testing')).toBeDefined()
    })
    test('Should not show contents according', () => {
        expect(screen.queryByText(/content/i)).toBeNull()
    })

    test('should show the content when the title is clicked', () => {
        const button = screen.getByText(/Open/i);
        fireEvent.click(button);
        expect(screen.getByText(/Content/i)).toBeDefined();
    });
    test('should hide the content when the title is clicked twice', () => {
        const button = screen.getByText(/Open/i);
        fireEvent.click(button);
        fireEvent.click(button);
        expect(screen.queryByText(/Content/i)).toBeNull();
    });
})