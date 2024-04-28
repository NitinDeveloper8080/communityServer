import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return <>
    <div>

    <h1 className="text-center font-bold text-black">Community Server welcomes you to explore its new features </h1>
<UserButton
afterSignOutUrl="/"
/>
<div className="flex justify-end align-items-start"> 

<ModeToggle />
</div>
    </div>
  </>
}
