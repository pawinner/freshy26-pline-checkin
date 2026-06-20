import "./styles.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "MDCU Freshy Camp 2026 - P-line Check-in",
  description: "P-line check-in portal for MDCU Freshy Camp 2026",
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

