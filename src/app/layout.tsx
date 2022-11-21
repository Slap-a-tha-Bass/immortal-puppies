import "../styles/globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <title>Immortal Puppies</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
