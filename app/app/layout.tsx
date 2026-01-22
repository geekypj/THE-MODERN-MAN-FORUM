import "./globals.css";

export const metadata = {
  title: "The Modern Man Forum",
  description: "A calm, supportive, bold space for men to grow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
