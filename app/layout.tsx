import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen bg-slate-50">
          <Sidebar />

          <main className="ml-72 flex-1 p-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}