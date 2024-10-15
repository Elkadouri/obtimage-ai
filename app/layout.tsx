import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "OptiMage AI - AI-Powered Image Generation & Editing",
  description:
    "OptiMage AI offers cutting-edge tools to generate, edit, and enhance images using advanced artificial intelligence technology.",
  keywords:
    "AI image generation, AI image editing, OptiMage AI, image processing, AI tools, artificial intelligence, image enhancement, creative AI, photo editing, image manipulation",
  icons: {
    icon: "/assets/icons/favicon.ico", // Make sure this path is correct and the favicon is in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </ClerkProvider>
  );
}
