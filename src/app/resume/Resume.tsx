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
      </div>
      <div className="flex flex-col gap-2 md:items-end">
        <div className="flex flex-col items-start md:items-end lg:flex-row lg:items-center lg:gap-2">
          <Link href={"mailto:michaeltlong10@gmail.com"}>
            {"michaeltlong10@gmail.com"}
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
            target="_blank"
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
            target="_blank"
          >
            {"github.com/mikelong10"}
          </Link>
        </div>
        <div className="flex gap-2">
          <Link
            href={"https://www.mikelong.world/"}
            className="text-primary underline underline-offset-4"
            target="_blank"
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
          <p className="italic">{"September 2021 — April 2025"}</p>
        </div>
        <div className="flex flex-col justify-between sm:flex-row">
          <p>
            <span className="text-foreground italic">
              {"B.S. in Computer Science and Business Administration"}
            </span>
          </p>
          <p className="font-extrabold">{"GPA: 3.9 / 4.0"}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-foreground font-extrabold">
            {"Relevant Coursework"}
          </span>
          {
            ": Algorithms and Data Structures, Object-Oriented Design, Networks and Distributed Systems, Database Design, Data Science, Machine Learning, Artificial Intelligence, Software Engineering, Mobile Development"
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
          {
            ": TypeScript, JavaScript, Python, Java, Kotlin, Swift, HTML, CSS, SQL"
          }
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p>
          <span className="text-accent-foreground font-extrabold">
            {"Tools"}
          </span>
          {
            ": React, Node.js, Next.js, Express.js, Django, Tailwind CSS, GraphQL, MySQL, PostgreSQL, SQLite, MongoDB, Jetpack Compose, SwiftUI, Amazon Web Services (EC2, S3, Route 53), Docker, Jenkins, Git, Figma, Jira, Scrum, Agile"
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
        title="Software Engineering Intern"
        highlight={
          <p className="italic">
            {"Python, Django, JavaScript, React, GraphQL, Postgres"}
          </p>
        }
        start="January 2024"
        end="June 2024"
        location="Boston, MA"
        bullets={hometapBullets}
      />
      <Separator />
      <ExperienceBlock
        company="Wood Mackenzie"
        title="Software Engineering Intern"
        highlight={
          <p className="italic">{"TypeScript, React, Node.js, Python, AWS"}</p>
        }
        start="January 2023"
        end="August 2023"
        location="Boston, MA"
        bullets={powerAdvocateBullets}
      />
      <Separator />
      <ExperienceBlock
        company="Wayland Student-Athlete"
        title="Co-Founder, Technical Lead"
        highlight={
          <Link
            href={"https://www.waylandstudentathlete.com"}
            className="text-primary hover:underline hover:underline-offset-2"
            target="_blank"
          >
            {"www.waylandstudentathlete.com"}
          </Link>
        }
        start="May 2020"
        end="September 2021"
        location="Wayland, MA"
        bullets={wsaBullets}
      />
    </div>
  );
}

function ExperienceBlock({
  company,
  title,
  highlight,
  start,
  end,
  location,
  bullets,
}: {
  company: string;
  title: string;
  highlight: React.ReactNode;
  start: string;
  end: string;
  location: string;
  bullets: ResumeBullet[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-between gap-1 lg:hidden">
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
            <p className="text-accent-foreground font-extrabold">{company}</p>
            <Separator
              orientation="vertical"
              className="hidden h-4 w-[2px] rounded-full sm:block"
            />
            {highlight}
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <p className="italic">{title}</p>
            <div className="flex flex-col sm:items-end">
              <p className="font-extrabold">{`${start} — ${end}`}</p>
              <p className="italic sm:hidden">{location}</p>
              <p className="hidden italic sm:block">{location}</p>
            </div>
          </div>
        </div>
        <div className="hidden flex-col justify-between gap-1 lg:flex">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-2">
                <p className="text-accent-foreground font-extrabold">
                  {company}
                </p>
                <Separator
                  orientation="vertical"
                  className="hidden h-4 w-[2px] rounded-full sm:block"
                />
                {highlight}
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="italic">{title}</p>
              </div>
            </div>
            <div className="flex flex-col sm:items-end">
              <p className="font-extrabold">{`${start} — ${end}`}</p>
              <p className="italic sm:hidden">{location}</p>
              <p className="hidden italic sm:block">{location}</p>
            </div>
          </div>
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
        {"Built workflow used by "}
        <span className="font-extrabold">{"35+ Hometap staff"}</span>
        {" to order, track, and cancel "}
        <span className="font-extrabold">{"100+ home appraisals"}</span>
        {" per day, developing "}
        <span className="font-extrabold">{"third-party API integration"}</span>
        {" using "}
        <span className="font-extrabold">{"GraphQL"}</span>
        {" queries & mutations connected to "}
        <span className="font-extrabold">{"React"}</span>
        {" forms & tables"}
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Fixed internal database obfuscation tool by resolving "}
        <span className="font-extrabold">{"Postgres"}</span>
        {" to "}
        <span className="font-extrabold">{"pandas"}</span>
        {" JSON serialization issues in "}
        <span className="font-extrabold">{"Python"}</span>
        {" scripts, securing "}
        <span className="font-extrabold">{"240,000+ rows"}</span>
        {" of sensitive PII, financial data, and property details for "}
        <span className="font-extrabold">{"60,000+ homeowners"}</span>
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {"Developed maintenance mode system "}
        <span className="font-extrabold">{"now used each sprint"}</span>
        {", creating "}
        <span className="font-extrabold">{"WebSocket channel"}</span>
        {" and "}
        <span className="font-extrabold">{"REST endpoint"}</span>
        {" to enable "}
        <span className="font-extrabold">{"Django"}</span>
        {" backend to trigger "}
        <span className="font-extrabold">{"React"}</span>
        {" overlay component on user screens during deployment downtime"}
      </p>
    ),
  },
];

export const powerAdvocateBullets: ResumeBullet[] = [
  {
    key: 1,
    bullet: (
      <p>
        {"Built new “C2MD” data curation app "}
        <span className="font-extrabold">
          {"from inception to production deployment"}
        </span>
        {", leading development of "}
        <span className="font-extrabold">{"React"}</span>
        {" UI and "}
        <span className="font-extrabold">{"Node"}</span>
        {" API, automating CI/CD with "}
        <span className="font-extrabold">{"Jenkins"}</span>
        {" pipelines, and provisioning infrastructure using "}
        <span className="font-extrabold">{"AWS CDK"}</span>
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Implemented "}
        <span className="font-extrabold">{"5x API latency reduction"}</span>
        {
          " by identifying over-fetching problem, designing new endpoints with efficient filtering capabilities, and writing "
        }
        <span className="font-extrabold">{"Jira"}</span>
        {" tickets to collaborate with UK-based data team to rewrite endpoints"}
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {
          "Researched and advocated for use of 'react-hook-form' library, presenting use case and convincing architecture and senior engineers, "
        }
        <span className="font-extrabold">
          {"delivering 20% codebase reduction"}
        </span>
        {" after implementation"}
      </p>
    ),
  },
  {
    key: 4,
    bullet: (
      <p>
        {"Ensured "}
        <span className="font-extrabold">{"100% test coverage"}</span>
        {
          " through test suite of unit & automated browser tests with Jest, React Testing Library"
        }
      </p>
    ),
  },
];

export const wsaBullets: ResumeBullet[] = [
  {
    key: 1,
    bullet: (
      <p>
        {
          "Launched business connecting high-school students to families with odd job requests, "
        }
        <span className="font-extrabold">{"leading team of 8"}</span>
        {" in scaling business to generate "}
        <span className="font-extrabold">{"$78,000+ revenue"}</span>
        {" and "}
        <span className="font-extrabold">{"donate $2,000+"}</span>
        {" to non-profit organizations "}
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Facilitated "}
        <span className="font-extrabold">{"900+ jobs"}</span>
        {" and served "}
        <span className="font-extrabold">{"250+ users"}</span>
        {" across "}
        <span className="font-extrabold">{"8+ towns"}</span>
        {
          " by building website with job request form, email notification system, and full admin dashboard using "
        }
        <span className="font-extrabold">
          {"TypeScript, Next.js, React, Tailwind CSS,"}
        </span>
        {" and "}
        <span className="font-extrabold">{"SQLite"}</span>
      </p>
    ),
  },
];

function ProjectsSection() {
  return (
    <div className="flex flex-col gap-2">
      <H4 className="text-tertiary">{"Projects"}</H4>
      <Separator className="h-1 rounded-full" />
      <ProjectBlock name="Soshi" date="November 2024" bullets={soshiBullets} />
      <Separator />
      <ProjectBlock name="Shoots" date="October 2024" bullets={shootsBullets} />
    </div>
  );
}

function ProjectBlock({
  name,
  date,
  bullets,
}: {
  name: string;
  date: string;
  bullets: ResumeBullet[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-accent-foreground font-extrabold">{name}</p>
        <p className="text-accent-foreground font-extrabold">{date}</p>
      </div>
      <div className="flex flex-col gap-2">
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

const soshiBullets = [
  {
    key: 1,
    bullet: (
      <p>
        {"Collaborated with team of 4 to create an "}
        <span className="font-extrabold">{"AI-driven Twitter assistant"}</span>
        {
          " that autonomously browses user feeds and generates replies to highest potential tweets for enhancing audience engagement and follower growth"
        }
      </p>
    ),
  },
  {
    key: 2,
    bullet: (
      <p>
        {"Achieved "}
        <span className="font-extrabold">
          {"Best Overall at Y Combinator x Supabase AI Hackathon"}
        </span>
        {" in SF, competing against 50 teams, 193 people"}
      </p>
    ),
  },
  {
    key: 3,
    bullet: (
      <p>
        {"Built full-stack web application using "}
        <span className="font-extrabold">
          {"TypeScript, Next.js, React, Python, Postgres"}
        </span>
        {", integrating "}
        <span className="font-extrabold">{"Browserbase"}</span>
        {" and "}
        <span className="font-extrabold">{"Playwright"}</span>
        {" for autonomous browsing capabilities and "}
        <span className="font-extrabold">{"Anthropic"}</span>
        {" and "}
        <span className="font-extrabold">{"Twitter APIs"}</span>
        {" for content generation "}
      </p>
    ),
  },
];

const shootsBullets = [
  {
    key: 1,
    bullet: (
      <p>
        {"Developed "}
        <span className="font-extrabold">{"iOS (Swift)"}</span>
        {" and "}
        <span className="font-extrabold">{"Android (Kotlin)"}</span>
        {
          " mobile app allowing users to stake money against friends and bet on themselves for motivation and accountability to reduce screen time"
        }
      </p>
    ),
  },
];
