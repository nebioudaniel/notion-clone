import { Navbar } from "./_components/navbar";
import Footer from "./_components/footer"; // Import the Footer component

const MarketingLayout = ({ children, title, description }: { children: React.ReactNode; title: string; description?: string }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">
        <header>
          {/* Add your header content here, based on title and description */}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </header>
        {children} // Your content goes here
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
