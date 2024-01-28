import Link from "next/link";

import H1 from "@components/typography/h1";
import H2 from "@components/typography/h2";
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
        <H1>Michael Long</H1>
        <p className="italic">Availability: May 2024 — Sep 2024</p>
      </div>
      <div className="flex flex-col gap-2 md:items-end">
        <div className="flex flex-col items-start gap-2 md:items-end lg:flex-row lg:items-center">
          <Link href={"mailto:long.mich@northeastern.edu"}>
            long.mich@northeastern.edu
          </Link>
          <Separator
            orientation="vertical"
            className="bg-foreground hidden h-4 lg:block"
          />
          <Link href={"tel:+18574889299"}>{"(857) 488-9299"}</Link>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end lg:flex-row lg:items-center">
          <Link
            href={"https://www.linkedin.com/in/michaeltlong10/"}
            className="text-primary underline underline-offset-4"
          >
            www.linkedin.com/in/michaeltlong10
          </Link>
          <Separator
            orientation="vertical"
            className="bg-foreground hidden h-4 lg:block "
          />
          <Link
            href={"https://github.com/mikelong10/"}
            className="text-primary underline underline-offset-4"
          >
            github.com/mikelong10
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            href={"https://www.mikelong.world/"}
            className="text-primary underline underline-offset-4"
          >
            www.mikelong.world
          </Link>
        </div>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <div className="flex flex-col gap-2">
      <H2>Education</H2>
      <Separator className="h-1 rounded-full" />
      <div className="flex flex-col justify-between sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            Northeastern University
          </span>
          , Boston, MA
        </p>
        <p>Sep 2021 — May 2025</p>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            B.S. in Computer Science and Business Administration
          </span>
        </p>
        <p>GPA: 3.9 / 4.0</p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            Coursework
          </span>
          : Algorithms & Data Structures, Object-Oriented Design, Networks &
          Distributed Systems, Database Design, Software Engineering, Data
          Science, Discrete Mathematics, Calculus 3
        </p>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="flex flex-col gap-2">
      <H2>Skills</H2>
      <Separator className="h-1 rounded-full" />
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            Languages
          </span>
          : TypeScript / JavaScript, Python, Java, HTML, CSS, SQL, Swift
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">Tools</span>:
          React, Node.js, Express.js, Next.js, Django, SwiftUI, MySQL,
          PostgreSQL, MongoDB, AWS (ECS+Fargate, S3, CDK), Git, Jenkins, Docker,
          GraphQL, NumPy, Pandas, Matplotlib, Scikit-Learn, BeautifulSoup
        </p>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <div className="flex flex-col gap-2">
      <H2>Experience</H2>
      <Separator className="h-1 rounded-full" />
      <ExperienceBlock
        company="Hometap"
        location="Boston, MA"
        start="Jan 2024"
        end="May 2024"
        title="Full-Stack Engineering Co-op"
        bullets={hometapBullets}
      />
      <Separator />
      <ExperienceBlock
        company="Wood Mackenzie"
        location="Boston, MA"
        start="Jan 2023"
        end="Aug 2023"
        title="Software Engineering Co-op"
        bullets={powerAdvocateBullets}
      />
      <Separator />
      <ExperienceBlock
        company="Wayland Student-Athlete"
        location="Wayland, MA"
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
  location,
  start,
  end,
  title,
  bullets,
}: {
  company: string;
  location: string;
  start: string;
  end: string;
  title: string;
  bullets: ResumeBullet[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-between md:flex-row">
          <p>
            <span className="text-accent-foreground font-extrabold">
              {company}
            </span>
            , {location}
          </p>
          <p className="italic">
            {start} — {end}
          </p>
        </div>
        <p className="italic">{title}</p>
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
        Developing <span className="font-extrabold">React (JavaScript)</span>{" "}
        frontends for client and staff portals to facilitate home equity
        investments
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        Building <span className="font-extrabold">REST + GraphQL APIs</span>{" "}
        with <span className="font-extrabold">Django (Python)</span> backend run
        with <span className="font-extrabold">Docker</span> to handle business
        logic and perform interactions with{" "}
        <span className="font-extrabold">PostgreSQL</span> database
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        Implementing <span className="font-extrabold">integrations</span> with{" "}
        <span className="font-extrabold">external tools</span> including
        Salesforce, HouseCanary, Segment, Experian, and more
      </p>
    ),
  },
];

export const powerAdvocateBullets: ResumeBullet[] = [
  {
    key: 1,
    bullet: (
      <p>
        <span className="font-extrabold">
          Spearheaded brand-new data curation web application
        </span>{" "}
        with <span className="font-extrabold">React (TypeScript)</span> frontend
        and <span className="font-extrabold">Node (TypeScript) REST API</span>{" "}
        that served requests and responses to/from shared{" "}
        <span className="font-extrabold">Django (Python)</span> microservice
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        <span className="font-extrabold">Deployed tool</span> to{" "}
        <span className="font-extrabold">production environment</span> by
        writing and running <span className="font-extrabold">Jenkins</span>{" "}
        pipelines and constructing <span className="font-extrabold">AWS</span>{" "}
        CDK stacks using ECS Fargate containers and Route 53 public and private
        zones
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        <span className="font-extrabold">Architected new API endpoints</span>{" "}
        for Python data service that{" "}
        <span className="font-extrabold">reduced page load times</span> from{" "}
        <span className="font-extrabold">~15s</span> to{" "}
        <span className="font-extrabold">~3s</span>
      </p>
    ),
  },
  {
    key: 4,
    bullet: (
      <p>
        <span className="font-extrabold">Streamlined code</span> by{" "}
        <span className="font-extrabold">400+ lines</span> by implementing
        “react-hook-form” library after proposing idea and convincing senior
        engineers of library’s benefits and security
      </p>
    ),
  },
  {
    key: 5,
    bullet: (
      <p>
        <span className="font-extrabold">Ensured code quality</span> by{" "}
        <span className="font-extrabold">writing 90+ Jest tests</span> covering
        rendering, routing, events, requests/responses
      </p>
    ),
  },
];

export const wsaBullets: ResumeBullet[] = [
  {
    key: 1,
    bullet: (
      <p>
        <span className="font-extrabold">
          Envisioned, launched, and managed local odd jobs business
        </span>{" "}
        that completed{" "}
        <span className="font-extrabold">260+ jobs for 140+ clients</span>{" "}
        across 10+ towns{" "}
        <span className="font-extrabold">earning $48,000+ in revenue</span> and
        donating over $1,000+ to charitable foundations
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        <span className="font-extrabold">Developed business website</span> with{" "}
        <span className="font-extrabold">
          TypeScript, Next.js, React, TailwindCSS, and MySQL
        </span>{" "}
        implementing a user request form and admin job dashboard to connect
        families with requests for odd jobs to high school students
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        <span className="font-extrabold">
          Organized, delegated, and personally fulfilled
        </span>{" "}
        job requests to{" "}
        <span className="font-extrabold">grow and lead business</span> with 8
        peers
      </p>
    ),
  },
  {
    key: 4,
    bullet: (
      <p>
        <span className="font-extrabold">Sold business</span> to{" "}
        <span className="font-extrabold">
          new generation of high school students
        </span>{" "}
        to build upon its success
      </p>
    ),
  },
];

function ProjectsSection() {
  return (
    <div className="flex flex-col gap-2">
      <H2>Projects</H2>
      <Separator className="h-1 rounded-full" />
      <ProjectBlock company="Shoots" bullets={shootsBullets} />
      <Separator />
      <ProjectBlock company="Big City Diner" bullets={bigCityDinerBullets} />
    </div>
  );
}

function ProjectBlock({
  company,
  bullets,
}: {
  company: string;
  bullets: ResumeBullet[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 lg:flex-row">
        <p className="text-accent-foreground min-w-24 font-extrabold">
          {company}
        </p>
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

const shootsBullets = [
  {
    key: 1,
    bullet: (
      <p>
        <span className="font-extrabold">Invented mobile app</span> designed to
        motivate users and provide accountability in reducing undesirable screen
        time through friendly competition and potential rewards
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        Developed <span className="font-extrabold">Swift/SwiftUI</span> iOS
        frontend designed with <span className="font-extrabold">Figma</span> on
        top of <span className="font-extrabold">Python FastAPI</span> backend
      </p>
    ),
  },
];

const bigCityDinerBullets = [
  {
    key: 1,
    bullet: (
      <p>
        <span className="font-extrabold">Rebuilt website</span> for local
        Hawaiian restaurant chain with{" "}
        <span className="font-extrabold">
          Next.js, React + TS, and TailwindCSS
        </span>
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        <span className="font-extrabold">
          Leveraged GraphQL-based content management system
        </span>{" "}
        to allow restaurant managers to add menu items, update location
        operating hours, and more on no-code platform
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        <span className="font-extrabold">
          Designed color palette, typography, wireframes, and mockups
        </span>{" "}
        for site’s <span className="font-extrabold">UI/UX</span> with{" "}
        <span className="font-extrabold">Figma</span>
      </p>
    ),
  },
];
