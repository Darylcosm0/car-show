import { Footer, Navbar } from "@/components";
import "./globals.css";


export const metadata: Metadata = {
  title: "Car site",
  description: "Discover best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
