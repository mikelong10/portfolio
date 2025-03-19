import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@components/ui/button";

export default function SocialButtons() {
  return (
    <>
      <Button asChild variant={"ghost"} size={"icon"}>
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/michaeltlong10/"}
        >
          <Linkedin />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} size={"icon"}>
        <Link target="_blank" href={"https://github.com/mikelong10/"}>
          <Github />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} size={"icon"}>
        <Link target="_blank" href={"https://x.com/mikelong107/"}>
          <Twitter />
        </Link>
      </Button>
      <Button asChild variant={"ghost"} size={"icon"}>
        <Link target="_blank" href={"mailto:michaeltlong10@gmail.com"}>
          <Mail />
        </Link>
      </Button>
    </>
  );
}
