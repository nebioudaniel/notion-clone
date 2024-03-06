import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = ({ errorMessage }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return ( 
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.png"
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/error-dark.png"
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        Something went wrong!
      </h2>
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}
      <div className="flex space-x-4">
        <Button onClick={refreshPage}>Refresh</Button>
        <Button asChild>
          <Link href="/documents">
            Go back
          </Link>
        </Button>
      </div>
    </div>
  );
}
 
export default Error;
