import type { Metadata } from "next";
import { ToastContainer, Bounce } from "react-toastify"

import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import localfont from "next/font/local";

const lato = localfont({
  src: [
    {
      path: "../../public/fonts/Lato-Regular.ttf",
    },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Forex Trading Platform | GTA",
  description:
    "Trade forex with confidence on GTA, your trusted forex trading platform. Access real-time market data, advanced trading tools, and expert insights.",
  icons: {
    icon: "/assets/favicon.ico", // Path to your favicon
  },
  // openGraph: {
  //   title: "Forex Trading Platform | GTA",
  //   description:
  //     "Trade forex with confidence on GTA, your trusted forex trading platform. Access real-time market data, advanced trading tools, and expert insights.",
  //   url: "https://your-forex-website.com", // Replace with your website URL
  //   siteName: "GTA Forex Trading",
  //   images: [
  //     {
  //       url: "/assets/og-image.jpg", // Path to your Open Graph image
  //       width: 1200,
  //       height: 630,
  //       alt: "GTA Forex Trading Platform",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Forex Trading Platform | GTA",
  //   description:
  //     "Trade forex with confidence on GTA, your trusted forex trading platform. Access real-time market data, advanced trading tools, and expert insights.",
  //   images: ["/assets/twitter-image.jpg"], // Path to your Twitter image
  // },
  keywords: [
    "forex trading",
    "forex platform",
    "currency trading",
    "forex market",
    "GTA forex",
    "real-time forex data",
    "forex tools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.variable} bg-white dark:bg-[#0a0a0a]`}>
        {/* ThemeProvider ensures consistent theme rendering */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
          <div className="  ">
            <div className=" ">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
