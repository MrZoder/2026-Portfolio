import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const {
        threshold = 0.15,
        rootMargin = '0px 0px -60px 0px',
        once = true,
    } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(element);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, isVisible];
}

export function useStaggerReveal(count, baseDelay = 100) {
    const [ref, isVisible] = useScrollReveal();

    const getDelay = (index) => ({
        transitionDelay: `${index * baseDelay}ms`,
    });

    return [ref, isVisible, getDelay];
}
