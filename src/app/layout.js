import localFont from "next/font/local";
import "./globals.css";
import ToastProvider from "@/lib/toastify/ToastProvider";
import { StoreProvider } from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Phim vip",
  description: "Trang chủ phimvip.com",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/images/favicon.ico" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <ToastProvider>
              {children}
            </ToastProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
