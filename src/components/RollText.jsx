import { SlotText } from 'slot-text/react';

const defaultOptions = {
    direction: 'up',
    duration: 240,
    stagger: 18,
    exitOffset: 35,
    bounce: 0.45,
};

export default function RollText({ text, direction = 'up', className = '' }) {
    return (
        <SlotText
            className={`roll-label ${className}`}
            text={text}
            options={{ ...defaultOptions, direction }}
        />
    );
}
