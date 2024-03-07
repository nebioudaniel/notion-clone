import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Layout } from "./_components/layout"; // Import the Layout component

const MarketingPage = () => {
  // Pass title and description props to Layout for customization
  const title = "Your Marketing Page Title";
  const description = "A compelling description of your marketing page.";

  return (
    <Layout title={title} description={description}>
      {/* Rest of your content goes here */}
    </Layout>
  );
};

export default MarketingPage;
