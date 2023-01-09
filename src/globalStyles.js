import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --black: #000000;
        --main-bg: #131856;
        --white: #ffffff;
        --footer-bg: #FBFBFF;
        --light-purple: #D9D8FF;
        --content-color: #212529;
        --light-grey: #F6F5FF;
        --table-border: #EFEFEF;
        --main-btn: #F7F9FD;
        --red-btn: #dc3545;
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

    @keyframes slide-bottom {
        from {
            opacity: 0;
            transform: translateY(350px);
        } to {
            opacity: 1;
            transform: translateY(0);

        }
    }

    @keyframes container-show {
        0% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 10% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 20% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 30% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 40% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 50% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 60% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 70% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 80% {
            opacity: 0;
            transform: scale(0.1, 0.1);
        } 100% {
            opacity: 1;
            transform: scale(1, 1);
        }
    }
`;

export default GlobalStyle;