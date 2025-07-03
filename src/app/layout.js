
export const metadata = {
  title: 'Digicrédito',
  description: 'Financeira ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
     
        {children}
      </body>
    </html>
  );
}