import './globals.css';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Pokémon App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-black text-white p-4 ml-[10px]">
          {children}
        </main>
      </body>
    </html>
  );
}
