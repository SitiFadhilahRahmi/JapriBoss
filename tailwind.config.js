import preset from "./vendor/filament/support/tailwind.config.preset";

export default {
    presets: [preset],
    content: [
        "./app/Filament/**/*.php",
        "./resources/views/filament/**/*.blade.php",
        "./resources/**/*.jsx",
        "./vendor/filament/**/*.blade.php",
        "./vendor/awcodes/filament-curator/resources/**/*.blade.php",
    ],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            screens: {
                "2xl": "1280px",
            },
            colors: {
                primary: "#FFCC00",
            },
            fontFamily: {
                popins: ["Poppins", "serif"],

                inter: ["Inter", "sans-serif"],
                firaCode: ["Fira Code", "serif"],
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(1rem)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
        },
    },
};
