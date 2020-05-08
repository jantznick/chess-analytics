import rough from 'roughjs';

export const roughSquare = ({ squareElement, squareWidth }) => {
    const rc = rough.svg(squareElement);
    const chessSquare = rc.rectangle(0, 0, squareWidth, squareWidth, {
        roughness: 0.9,
        fill: '#b58863',
        bowing: 2
    });
    squareElement.appendChild(chessSquare);
};

