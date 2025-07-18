import "./bootstrap";
import "../css/app.css";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import MainLayout from "./Ui/Layouts/MainLayout";

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Ui/Pages/**/*.jsx", { eager: true });
        let page = pages[`./Ui/Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <MainLayout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
