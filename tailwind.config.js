
module.exports = {

    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#474E9E",
                secondary: "#FE5B3E",
                primaryText: "#303062",
                divider: "#F4CA5F",
            },
            fontFamily: {
                poppins: ["'Poppins'"],
            },
            animation: {
                "fade-in": "fade-in .7s ease both",
                "fade-in-fwd": "fade-in-fwd .7s ease both",
                "fade-in-bck": "fade-in-bck .7s ease both",
                "fade-in-top": "fade-in-top .7s ease both",
                "fade-in-bottom": "fade-in-bottom .7s ease both",
                "fade-out": "fade-out 1s ease .7s both",
                "fade-out-fwd": "fade-out-fwd 0.7s ease both",
                "fade-out-bck": "fade-out-bck 0.7s ease both",
                "fade-out-top": "fade-out-top 0.7s ease both",
                "fade-out-bottom": "fade-out-bottom 0.7s ease both",
                "rotate-90-vertical-fwd":
                    "rotate-90-vertical-fwd 0.4s ease reverse both",
                "rotate-90-horizontal-fwd":
                    "rotate-90-horizontal-fwd 0.4s ease reverse both",
                "slide-bck-center": "slide-bck-center .5s ease both",
                "slide-fwd-center": "slide-fwd-center 0.45s ease both",
                "kenburns-top": "kenburns-top 20s ease both",
                "kenburns-top-right": "kenburns-top-right 20s ease both",
                "kenburns-right": "kenburns-right 20s ease both",
                "kenburns-bottom-right": "kenburns-bottom-right 20s ease both",
                "kenburns-bottom": "kenburns-bottom 20s ease both",
                "kenburns-bottom-left": "kenburns-bottom-left 20s ease both",
                "kenburns-left": "kenburns-left 20s ease both",
                "kenburns-top-left": "kenburns-top-left 20s ease both",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                "fade-in-fwd": {
                    "0%": {
                        transform: "translateZ(-80px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateZ(0)",
                        opacity: "1",
                    },
                },
                "fade-in-bck": {
                    "0%": {
                        transform: "translateZ(80px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateZ(0)",
                        opacity: "1",
                    },
                },
                "fade-in-top": {
                    "0%": {
                        transform: "translateY(-50px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "fade-in-bottom": {
                    "0%": {
                        transform: "translateY(50px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "fade-out": {
                    "0%": {
                        opacity: "1",
                    },
                    to: {
                        opacity: "0",
                    },
                },
                "fade-out-fwd": {
                    "0%": {
                        transform: "translateZ(0)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateZ(80px)",
                        opacity: "0",
                    },
                },
                "fade-out-bck": {
                    "0%": {
                        transform: "translateZ(0)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateZ(-80px)",
                        opacity: "0",
                    },
                },
                "fade-out-top": {
                    "0%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateY(-50px)",
                        opacity: "0",
                    },
                },
                "fade-out-bottom": {
                    "0%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateY(50px)",
                        opacity: "0",
                    },
                },
                "rotate-90-vertical-fwd": {
                    "0%": {
                        transform: "rotateY(0)",
                    },
                    to: {
                        transform: "rotateY(90deg)",
                    },
                },
                "rotate-90-horizontal-fwd": {
                    "0%": {
                        transform: "rotateX(0)",
                    },
                    to: {
                        transform: "rotateX(90deg)",
                    },
                },
                "slide-bck-center": {
                    "0%": {
                        transform: "translateZ(0)",
                    },
                    to: {
                        transform: "translateZ(-400px)",
                    },
                },
                "slide-fwd-center": {
                    "0%": {
                        transform: "translateZ(0)",
                    },
                    to: {
                        transform: "translateZ(160px)",
                    },
                },
                "kenburns-top": {
                    "0%": {
                        transform: "scale(1) translateY(0)",
                        "transform-origin": "50% 16%",
                    },
                    to: {
                        transform: "scale(1.25) translateY(-15px)",
                        "transform-origin": "top",
                    },
                },
                "kenburns-top-right": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "84% 16%",
                    },
                    to: {
                        transform: "scale(1.25) translate(20px, -15px)",
                        "transform-origin": "right top",
                    },
                },
                "kenburns-right": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "84% 50%",
                    },
                    to: {
                        transform: "scale(1.25) translateX(20px)",
                        "transform-origin": "right",
                    },
                },
                "kenburns-bottom-right": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "84% 84%",
                    },
                    to: {
                        transform: "scale(1.25) translate(20px, 15px)",
                        "transform-origin": "right bottom",
                    },
                },
                "kenburns-bottom": {
                    "0%": {
                        transform: "scale(1) translateY(0)",
                        "transform-origin": "50% 84%",
                    },
                    to: {
                        transform: "scale(1.25) translateY(15px)",
                        "transform-origin": "bottom",
                    },
                },
                "kenburns-bottom-left": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "16% 84%",
                    },
                    to: {
                        transform: "scale(1.25) translate(-20px, 15px)",
                        "transform-origin": "left bottom",
                    },
                },
                "kenburns-left": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "16% 50%",
                    },
                    to: {
                        transform: "scale(1.25) translate(-20px, 15px)",
                        "transform-origin": "left",
                    },
                },
                "kenburns-top-left": {
                    "0%": {
                        transform: "scale(1) translate(0, 0)",
                        "transform-origin": "16% 16%",
                    },
                    to: {
                        transform: "scale(1.25) translate(-20px, -15px)",
                        "transform-origin": "top left",
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
