import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return <>
    <div>

    <h1 className="text-center font-bold text-green-900">Community Server welcomes you to explore its new features </h1>
<UserButton
afterSignOutUrl="/"
/>
    </div>
  </>
}
