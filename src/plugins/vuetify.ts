import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";

export default createVuetify({
    theme: {
        defaultTheme: "light",
        themes: {
            light: {
                colors: {
                    primary: "#9c27b0",
                    secondary: "#ff5722",
                    accent: "#009688",
                    error: "#f44336",
                    warning: "#ff9800",
                    info: "#2196f3",
                    success: "#4caf50",
                },
            },
        },
    },
    icons: {
        defaultSet: "mdi",
    },
});
