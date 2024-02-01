import Link from "next/link";
import { FileDown } from "lucide-react";

import Container from "@components/structure/Container";
import { Button } from "@components/ui/button";
import Resume from "./Resume";

export default function ResumePage() {
  return (
    <Container className="min-h-screen py-32" noisy bgColorNoisy="accent">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <Resume />
        <Button asChild className="flex gap-4" size={"lg"}>
          <Link
            href={"./Michael-Long-SWE-Resume-2024.pdf"}
            download={"Michael-Long-Resume.pdf"}
            target="_blank"
          >
            <FileDown />
            <p className="font-extrabold">Download</p>
          </Link>
        </Button>
      </div>
    </Container>
  );
}
