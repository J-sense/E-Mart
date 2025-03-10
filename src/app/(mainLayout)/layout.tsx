import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navabr";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
