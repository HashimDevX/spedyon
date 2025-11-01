import "./globals.css";

export const metadata = {
  title: "Spedyon - Web & Mobile Solutions Agency",
  description:
    "Professional web and mobile development agency specializing in custom solutions",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
