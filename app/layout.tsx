import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@/src/components/QueryClientProvider/QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-do List",
  description: "To-do list created with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider>
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full`}>
          <div className="h-full bg-gradient-to-r from-[#352432] to-[#241722] p-[5%]">
            {children}
          </div>
        </body>
      </html>
    </QueryClientProvider>
  );
}
