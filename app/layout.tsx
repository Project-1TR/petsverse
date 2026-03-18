// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'PetsVerse',
  description: 'A platform for pet lovers to connect and share their experiences',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}