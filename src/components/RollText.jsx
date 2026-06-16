import { SlotText } from 'slot-text/react';

const defaultOptions = {
    direction: 'up',
    duration: 360,
    stagger: 12,
    exitOffset: 55,
    bounce: 0.22,
    interrupt: false,
};

function getReserveText(text, reserveText, reserveTexts) {
    const candidates = [text, reserveText, ...(reserveTexts || [])].filter(Boolean);
    return candidates.reduce((longest, candidate) => (
        candidate.length > longest.length ? candidate : longest
    ), '');
}

export default function RollText({ text, direction = 'up', reserveText, reserveTexts, className = '' }) {
    const sizerText = getReserveText(text, reserveText, reserveTexts);

    return (
        <span className={`roll-label-frame ${className}`}>
            <span className="roll-label-sizer" aria-hidden="true">{sizerText}</span>
            <SlotText
                className="roll-label"
                text={text}
                options={{ ...defaultOptions, direction }}
            />
        </span>
    );
}
