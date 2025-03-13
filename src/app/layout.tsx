import type { Metadata } from "next";
import { dmSans } from "@/assets/fonts/font";
import "./globals.css";
import ReduxProvider from "@/store/provider";
import { Text, Container } from "@/components/common";

export const metadata: Metadata = {
  title: "Toneop Eats CRM",
  description: "Toneop Eats CRM",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`antialiased`}>
        <ReduxProvider>
          <Container maxWidth="full" padding="none">
            {children}
            <Text variant="p">main</Text>
          </Container>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
