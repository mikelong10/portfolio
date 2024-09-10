import Link from "next/link";

import { H3, H4 } from "@lib/typography";
import { Card } from "@components/ui/card";
import { Separator } from "@components/ui/separator";

type ResumeBullet = { key: string | number; bullet: React.ReactNode };

export default function Resume() {
  return (
    <Card className="bg-background w-full max-w-4xl">
      <div className="flex flex-col gap-4 p-8 text-sm">
        <ResumeHeader />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </Card>
  );
}

function ResumeHeader() {
  return (
    <div className="flex flex-col justify-between gap-2 md:flex-row">
      <div className="flex flex-col">
        <H3 className="text-foreground">{"Michael Long"}</H3>
        <p className="italic">{"Availabile starting May 2025"}</p>
      </div>
      <div className="flex flex-col gap-2 md:items-end">
        <div className="flex flex-col items-start md:items-end lg:flex-row lg:items-center lg:gap-2">
          <Link href={"mailto:long.mich@northeastern.edu"}>
            {"long.mich@northeastern.edu"}
          </Link>
          <Separator
            orientation="vertical"
            className="bg-foreground hidden h-4 lg:block"
          />
          <Link href={"tel:+18574889299"}>{"(857) 488-9299"}</Link>
        </div>
        <div className="flex flex-col items-start gap-1 md:items-end lg:flex-row lg:items-center lg:gap-2">
          <Link
            href={"https://www.linkedin.com/in/michaeltlong10/"}
            className="text-primary underline underline-offset-4"
          >
            {"www.linkedin.com/in/michaeltlong10"}
          </Link>
          <Separator
            orientation="vertical"
            className="bg-foreground hidden h-4 lg:block "
          />
          <Link
            href={"https://github.com/mikelong10/"}
            className="text-primary underline underline-offset-4"
          >
            {"github.com/mikelong10"}
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            href={"https://www.mikelong.world/"}
            className="text-primary underline underline-offset-4"
          >
            {"www.mikelong.world"}
          </Link>
        </div>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="flex flex-col gap-2">
      <H4 className="text-tertiary">{"Education"}</H4>
      <Separator className="h-1 rounded-full" />
      <div className="flex flex-col gap-1 sm:gap-0">
        <div className="flex flex-col justify-between sm:flex-row">
          <p>
            <span className="text-foreground font-extrabold">
              {"Northeastern University"}
            </span>
            {", Boston, MA"}
          </p>
          <p className="italic">{"Sep 2021 — May 2025"}</p>
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
          <p>
            <span className="text-foreground italic">
              {"B.S. in Computer Science and Business Administration"}
            </span>
          </p>
          <p>{"GPA: 3.9 / 4.0"}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-foreground font-extrabold">{"Coursework"}</span>
          {
            ": Algorithms & Data Structures, Object-Oriented Design, Networks & Distributed Systems, Database Design, Discrete Mathematics, Software Engineering, Data Science, Calculus 3"
          }
        </p>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="flex flex-col gap-2">
      <H4 className="text-tertiary">{"Skills"}</H4>
      <Separator className="h-1 rounded-full" />
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            {"Languages"}
          </span>
          {": TypeScript / JavaScript, Python, Java, HTML, CSS, SQL, Swift"}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            {"Tools"}
          </span>
          {
            ": React, Django, Next.js, Node, Express, Tailwind CSS, SwiftUI, GraphQL, MySQL, PostgreSQL, Docker, AWS, Jenkins"
          }
        </p>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="flex flex-col gap-2">
      <H4 className="text-tertiary">{"Experience"}</H4>
      <Separator className="h-1 rounded-full" />
      <ExperienceBlock
        company="Hometap"
        start="Jan 2024"
        end="Jun 2024"
        title="Full-Stack Engineering Co-op"
        bullets={hometapBullets}
      />
      <Separator />
      <ExperienceBlock
        company="Wood Mackenzie"
        start="Jan 2023"
        end="Aug 2023"
        title="Software Engineering Co-op"
        bullets={powerAdvocateBullets}
      />
      <Separator />
      <ExperienceBlock
        company="Wayland Student-Athlete"
        start="May 2020"
        end="Present"
        title="Co-Founder"
        bullets={wsaBullets}
      />
    </div>
  );
}

function ExperienceBlock({
  company,
  start,
  end,
  title,
  bullets,
}: {
  company: string;
  start: string;
  end: string;
  title: string;
  bullets: ResumeBullet[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="xs:flex-row xs:gap-2 xs:items-center flex flex-col items-start">
            <p className="text-accent-foreground font-extrabold">{company}</p>
            <Separator
              orientation="vertical"
              className="xs:block hidden h-4 w-[2px] rounded-full"
            />
            <p className="font-extrabold italic">{title}</p>
          </div>
          <p className="italic">{`${start} — ${end}`}</p>
        </div>
        <ul className="ml-6 flex flex-col gap-2">
          {bullets.map((bullet) => (
            <li key={bullet.key} className="list-disc">
              {bullet.bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const hometapBullets = [
  {
    key: 1,
    bullet: (
      <p>
        {"Revived database obfuscation package to "}
        <span className="font-extrabold">{"protect thousands of rows"}</span>
        {
          " of sensitive PII, financial information, and property details across "
        }
        <span className="font-extrabold">{"hundreds of db tables"}</span>
        {" by fixing "}
        <span className="font-extrabold">{"PostgreSQL"}</span>
        {" JSON serialization mismatch"}
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Developed website maintenance mode functionality "}
        <span className="font-extrabold">
          {"now used every sprint during deployment"}
        </span>
        {" by creating a dedicated "}
        <span className="font-extrabold">{"REST endpoint"}</span>
        {" and "}
        <span className="font-extrabold">{"WebSocket channel"}</span>
        {" between "}
        <span className="font-extrabold">{"Django"}</span>
        {" backend and "}
        <span className="font-extrabold">{"React"}</span>
        {" frontend"}
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {
          "Created management workflow to handle ordering, tracking, and canceling of "
        }
        <span className="font-extrabold">
          {"hundreds of home appraisals each day"}
        </span>
        {" by building "}
        <span className="font-extrabold">
          {"integration with 3rd-party API"}
        </span>
        {" hooked up to "}
        <span className="font-extrabold">{"React"}</span>
        {" tables/forms and "}
        <span className="font-extrabold">{"GraphQL"}</span>
        {" endpoints"}
      </p>
    ),
  },
];

export const powerAdvocateBullets: ResumeBullet[] = [
  {
    key: 1,
    bullet: (
      <p>
        {"Built new data curation app and deployed to "}
        <span className="font-extrabold">{"production"}</span>
        {" from start to finish by spearheading development of "}
        <span className="font-extrabold">{"React"}</span>
        {" UI and "}
        <span className="font-extrabold">{"Node"}</span>
        {" API, generating "}
        <span className="font-extrabold">{"Jenkins"}</span>
        {" pipelines, and constructing "}
        <span className="font-extrabold">{"AWS"}</span>
        {" CDK stacks with ECS and Route 53"}
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Reduced page load times "}
        <span className="font-extrabold">{"from ~15s to ~3s"}</span>
        {" by designing new optimized endpoints for "}
        <span className="font-extrabold">{"Python"}</span>
        {
          " data microservice and writing Jira tickets to lead our data team in rebuilding them"
        }
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {"Streamlined code "}
        <span className="font-extrabold">{"~20%"}</span>
        {
          " by implementing “react-hook-form” library after convincing senior engineers of benefits"
        }
      </p>
    ),
  },
  {
    key: 4,
    bullet: (
      <p>
        {"Ensured code reliability by writing "}
        <span className="font-extrabold">{"90+ Jest tests"}</span>
        {" covering rendering, routing, events, and API requests/responses"}
      </p>
    ),
  },
];

export const wsaBullets: ResumeBullet[] = [
  {
    key: 1,
    bullet: (
      <p>
        {"Founded local odd jobs business "}
        <span className="font-extrabold">{"generating $62,000+ revenue"}</span>
        {" and "}
        <span className="font-extrabold">{"donating $2,000+"}</span>
        {" to non-profit orgs to date"}
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {
          "Created website with job request form, email notification system, and full admin dashboard using "
        }
        <span className="font-extrabold">
          {"TypeScript, Next.js, React, Tailwind CSS, SQLite"}
        </span>
        {" to facilitate "}
        <span className="font-extrabold">{"800+ completed jobs"}</span>
        {" and "}
        <span className="font-extrabold">{"200+ served users"}</span>
        {" across "}
        <span className="font-extrabold">{"800+ completed jobs"}</span>
        {" 8+ towns"}
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {"Scaled business by "}
        <span className="font-extrabold">{"leading team of 7 classmates"}</span>
        {" in communicating with clients and fulfilling job requests"}
      </p>
    ),
  },
  {
    key: 4,
    bullet: (
      <p>
        <span className="font-extrabold">{"Sold business"}</span>
        {
          " to younger group of high school students and mentored them for further growth"
        }
      </p>
    ),
  },
];

function ProjectsSection() {
  return (
    <div className="flex flex-col gap-2">
      <H4 className="text-tertiary">{"Projects"}</H4>
      <Separator className="h-1 rounded-full" />
      <ProjectBlock name="Shoots" bullets={shootsBullets} />
      <Separator />
      <ProjectBlock name="Big City Diner" bullets={bigCityDinerBullets} />
      <Separator />
      <ProjectBlock
        name="MikMike Photoshop"
        bullets={mikMikePhotoshopBullets}
      />
    </div>
  );
}

function ProjectBlock({
  name,
  bullets,
}: {
  name: string;
  bullets: ResumeBullet[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 md:flex-row">
        <p className="text-accent-foreground font-extrabold md:w-24">{name}</p>
        <ul className="ml-6 flex flex-1 flex-col gap-2">
          {bullets.map((bullet) => (
            <li key={bullet.key} className="list-disc">
              {bullet.bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const shootsBullets = [
  {
    key: 1,
    bullet: (
      <p>
        <span className="font-extrabold">{"Invented mobile app"}</span>
        {
          " designed to motivate users and provide accountability in reducing screen time through friendly competition and potential rewards"
        }
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Developed "}
        <span className="font-extrabold">{"SwiftUI (Swift)"}</span>
        {" iOS frontend designed with "}
        <span className="font-extrabold">{"Figma"}</span>
        {" on top of "}
        <span className="font-extrabold">{"FastAPI (Python)"}</span>
        {" backend"}
      </p>
    ),
  },
];

const bigCityDinerBullets = [
  {
    key: 1,
    bullet: (
      <p>
        <span className="font-extrabold">{"Rebuilt website"}</span>
        {" for local Hawaiian restaurant chain with "}
        <span className="font-extrabold">
          {"TypeScript, Next.js, React, and Tailwind"}
        </span>
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Leveraged "}
        <span className="font-extrabold">
          {"GraphQL-based content management system"}
        </span>
        {
          " to allow restaurant managers to add menu items, update location operating hours, and more on no-code platform"
        }
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {"Designed "}
        <span className="font-extrabold">
          {"color palette, typography, wireframes, and mockups"}
        </span>
        {" for site’s UI/UX with "}
        <span className="font-extrabold">{"Figma"}</span>
      </p>
    ),
  },
];

const mikMikePhotoshopBullets = [
  {
    key: 1,
    bullet: (
      <p>
        {"Designed "}
        <span className="font-extrabold">{"Java"}</span>
        {" photoshop program interactable through a "}
        <span className="font-extrabold">{"CLI"}</span>
        {" and "}
        <span className="font-extrabold">{"Java Swing GUI"}</span>
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Built "}
        <span className="font-extrabold">{"15+ color filters"}</span>
        {" and "}
        <span className="font-extrabold">
          {"blur, sharpen, brighten, and darken"}
        </span>
        {" operations on user image files"}
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {"Provided support for loading and saving "}
        <span className="font-extrabold">{"5+ image file types"}</span>
        {"  (JPG, PNG, GIF, BMP, PPM)"}
      </p>
    ),
  },
];
