// src/app/layout.tsx
import './globals.css';
import Navbar from './navbar/page';

export const metadata = {
  title: 'Portfolio',
  description: 'Software Engineering Student Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  let currentPage = 'home';
  if (pathname.includes('/about')) currentPage = 'about';
  else if (pathname.includes('/projects')) currentPage = 'projects';
  else if (pathname.includes('/contact')) currentPage = 'contact';
  else if (pathname.includes('/experience')) currentPage = 'experience';

  return (
    <html lang="en">
      <body>
        <Navbar currentPage={currentPage} />
        {children}
      </body>
    </html>
  );
}
