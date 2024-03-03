import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description:
    "Find the perfect rental property with Property Pulse. Search for apartments, houses, and condos for rent in your area.",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
