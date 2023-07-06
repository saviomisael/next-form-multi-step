import { AppStoreProvider } from '@/store/AppStoreProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next com Form Multi Step',
  description: 'Um exemplo de form multi step',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppStoreProvider>{children}</AppStoreProvider>
      </body>
    </html>
  );
}
