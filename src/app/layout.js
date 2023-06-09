import Header from "./components/Header";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Movie App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={mulish.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
