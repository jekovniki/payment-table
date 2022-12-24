import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --black: #000000;
        --main-bg: #131856;
        --white: #ffffff;
        --mobile-width: 768px;
    }

    /**
     * Animations
     */
     @keyframes quick-fade-up {
        0% {
            opacity: 0;
            transform: translateY(20px);
        } 25% {
            opacity: 0;
            transform: translateY(20px);
        } 50% {
            opacity: 0;
            transform: translateY(20px);
        } 75% {
            opacity: 0;
            transform: translateY(20px);
        } 100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes image-fade-up {
        0% {
            opacity: 0;
            transform: translateY(20px);
        } 20% {
            opacity: 0;
            transform: translateY(20px);
        } 40% {
            opacity: 0;
            transform: translateY(20px);
        } 60% {
            opacity: 0;
            transform: translateY(20px);
        } 80% {
            opacity: 0;
            transform: translateY(20px);
        } 100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide-top {
        from {
            opacity: 0;
            transform: translateY(-300px);
        } to {
            opacity: 1;
            transform: translateY(0);

        }
    }
`;

export default GlobalStyle;