import Image from "next/image";

import Container from "@components/structure/Container";
import H1 from "@components/typography/h1";
import avatar from "../../public/avatar.svg";
import profileFull from "../../public/profile-toledo-full.png";

export default function Home() {
  return (
    <Container className="min-h-screen py-32">
      <div className="relative w-full">
        <div className="animate-blob animation-delay-1000 absolute right-12 top-0 -z-20 h-96 w-96 rounded-full bg-sky-300 opacity-70 mix-blend-darken blur-3xl ease-linear dark:bg-sky-600 dark:opacity-30 dark:mix-blend-lighten" />
        <div className="animate-blob absolute -right-12 top-24 -z-20 h-96 w-96 rounded-full bg-blue-300 opacity-70 mix-blend-darken blur-3xl ease-linear dark:bg-blue-600 dark:opacity-30 dark:mix-blend-lighten" />
        <div className="animate-blob animation-delay-2000 absolute right-36 top-24 -z-20 h-96 w-96 rounded-full bg-indigo-300 opacity-70 mix-blend-darken blur-3xl ease-linear dark:bg-indigo-600 dark:opacity-30 dark:mix-blend-lighten" />
        <div className="animate-blob animation-delay-3000 absolute right-12 top-48 -z-20 h-96 w-96 rounded-full bg-violet-300 opacity-70 mix-blend-darken blur-3xl ease-linear dark:bg-violet-600 dark:opacity-30 dark:mix-blend-lighten" />
      </div>
      <div className="flex flex-col justify-between gap-16 sm:flex-row">
        <div className="flex w-full flex-col gap-8">
          <Image
            src={avatar}
            alt="Picture of the author"
            width={160}
            height={160}
            className="bg-muted border-border rounded-full border p-2"
          />
          <div className="flex flex-col gap-2">
            <H1>{"hi, i'm michael."}</H1>
            <p className="text-accent-foreground">
              {
                "i'm a third-year student at northeastern university pursuing a computer science and business combined degree with a strong passion for entrepreneurship and innovation in tech."
              }
            </p>
          </div>
        </div>
        <Image
          src={profileFull}
          alt="Full body picture of Michael"
          className="max-w-96 rounded-2xl sm:w-64 md:w-72 lg:w-80 xl:w-96"
        />
      </div>
    </Container>
  );
}
