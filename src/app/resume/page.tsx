import Link from "next/link";
import { FileDown } from "lucide-react";

import Container from "@components/structure/Container";
import { Button } from "@components/ui/button";
import Resume from "./Resume";

export default function ResumePage() {
  return (
    <Container className="min-h-screen py-32" noisy>
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <Resume />
        <Button
          asChild
          className="hover:shadow-secondary flex gap-4 transition-all duration-500 hover:shadow-lg"
          size={"lg"}
        >
          <Link
            href={"./Michael_Long_Resume.pdf"}
            download={"Michael_Long_Resume.pdf"}
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
