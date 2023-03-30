import './globals.css';
import Footer from "@/components/Footer";

export const metadata = {
  title: "Miku AI",
  description: "Miku-AI - Use Chat-GPT on your WhatsApp!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
