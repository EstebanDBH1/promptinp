import { initializePaddle, Paddle } from '@paddle/paddle-js';

let paddleInstance: Paddle | undefined;

export const getPaddle = async () => {
    if (paddleInstance) return paddleInstance;

    paddleInstance = await initializePaddle({
        environment: (import.meta.env.VITE_PADDLE_ENV as 'sandbox' | 'production') || 'sandbox',
        token: import.meta.env.VITE_PADDLE_CLIENT_TOKEN,
    });

    return paddleInstance;
};
