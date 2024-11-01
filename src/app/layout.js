import "@/app/globals.css";
import { AppContextProvider } from "@/app/contexts/AppContexts";
import Header from "@/app/components/Header/Header";

export const metadata = {
  title: "Lorusso Inmobiliaria",
  description:
    "Somos una inmobiliaria familiar ubicada en el pintoresco barrio de Catalinas Sur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body>
          <Header/>
          {children}
        </body>
      </AppContextProvider>
    </html>
  );
}
