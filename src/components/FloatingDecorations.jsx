import { useEffect, useState } from 'react';
import './FloatingDecorations.css';

const decorations = [
    { type: 'heart', emoji: '❤️', delay: 0 },
    { type: 'ring', emoji: '💍', delay: 2 },
    { type: 'flower', emoji: '🌸', delay: 4 },
    { type: 'sparkle', emoji: '✨', delay: 1 },
    { type: 'dove', emoji: '🕊️', delay: 3 },
    { type: 'star', emoji: '⭐', delay: 5 },
];

export const FloatingDecorations = () => {
    const [visibleDecorations, setVisibleDecorations] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleDecorations(prev => {
                const newDecorations = [...prev];
                if (newDecorations.length < decorations.length) {
                    newDecorations.push(decorations[newDecorations.length]);
                }
                return newDecorations;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-decorations">
            {visibleDecorations.map((decoration, index) => (
                <div
                    key={`${decoration.type}-${index}`}
                    className={`floating-decor ${decoration.type}`}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${decoration.delay}s`,
                    }}
                >
                    {decoration.emoji}
                </div>
            ))}
        </div>
    );
}; 