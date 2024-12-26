import './globals.css';
import '/uno.css';
import { ModalRender } from '@/components/Modal';

export const metadata = {
  title: 'Custome UI',
  description: 'react component library by Ricy'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-100vh">
        <ModalRender />
        {children}
      </body>
    </html>
  );
}
