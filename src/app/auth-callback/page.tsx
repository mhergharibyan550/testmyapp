"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/");
  };
  return <div onClick={() => handleRedirect()}>Go Back</div>;
};

export default Page;
