import Image from "next/image";
import { hometapBullets, powerAdvocateBullets } from "@app/resume/Resume";

import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H1 from "@components/typography/h1";
import H2 from "@components/typography/h2";
import H3 from "@components/typography/h3";
import Monospace from "@components/typography/monospace";
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { Checkbox } from "@components/ui/checkbox";
import { Separator } from "@components/ui/separator";
import hometapInquiry from "../../../public/hometap-inquiry.jpg";

export default function ExperiencePage() {
  return (
    <section className="min-h-screen w-full">
      <Container
        className="flex min-h-screen items-center justify-center py-32"
        noisy
      >
        <Content>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Image
                src={"/neu-seal-red.png"}
                alt="Northeastern University Seal"
                width={400}
                height={400}
                className="size-16"
              />
              <H1>my experience</H1>
            </div>
            <div className="flex max-w-prose flex-col gap-2">
              <p>
                Through 2 amazing co-op opportunities thus far, I have 9 (and
                will graduate with 12+) months of real-world industry software
                development experience.
              </p>
              <p>
                I&apos;m incredibly grateful for the co-op program at
                Northeastern, and I&apos;m excited to see what impact I can make
                with my knowledge and skillset.
              </p>
            </div>
          </div>
        </Content>
      </Container>
      <Container
        id="hometap"
        className="min-h-screen"
        noisy
        bgColorNoisy="border/20"
      >
        <Content className="flex flex-col items-center gap-16 py-32">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src={"/hometap-logo-horizontal.png"}
                alt="Hometap Logo"
                width={450}
                height={174}
                className="bg-background dark:bg-foreground -ml-1 w-28 rounded-full px-2 sm:w-32 md:w-36 lg:w-40"
              />
              <div className="flex flex-col">
                <H2 className="text-foreground hidden sm:block">
                  Full-Stack Engineering Co-op
                </H2>
                <div className="text-foreground flex flex-col sm:hidden">
                  <H2 className="text-foreground">Full-Stack</H2>
                  <H2 className="text-foreground">Engineering Co-op</H2>
                </div>
                <Monospace className="text-muted-foreground">
                  Hometap Equity Partners
                </Monospace>
              </div>
            </div>
            <Alert className="relative flex gap-4">
              <p className="text-2xl">🚀</p>
              <div className="flex flex-col">
                <AlertTitle>Jan 2024 - Present · 1 mo</AlertTitle>
                <AlertDescription>
                  Boston, Massachusetts, United States
                </AlertDescription>
              </div>
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-bl from-blue-300 to-violet-300 blur-lg dark:from-blue-600 dark:to-violet-600" />
            </Alert>
          </div>
          <section className="flex flex-col gap-8 sm:flex-row lg:gap-12 xl:gap-16">
            <div className="flex shrink-0 flex-col gap-4">
              <H3 className="text-tertiary shrink-0 text-nowrap">
                what i&apos;m doing
              </H3>
              <Separator />
              <div className="flex flex-col gap-8">
                <p className="text-muted-foreground font-extrabold">
                  tech stack:
                </p>
                <div className="flex gap-8 sm:flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      front end
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          JavaScript
                          <Image
                            src={"/js-logo.png"}
                            alt="JavaScript logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          React
                          <Image
                            src={"/react-logo.png"}
                            alt="React logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Sass
                          <Image
                            src={"/sass-logo.png"}
                            alt="Sass logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      back end
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Python
                          <Image
                            src={"/python-logo.png"}
                            alt="Python logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Django
                          <Image
                            src={"/django-logo.png"}
                            alt="Django logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-8 sm:flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      database
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          PostgreSQL
                          <Image
                            src={"/postgres-logo.svg"}
                            alt="Postgres logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      infra
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Docker
                          <Image
                            src={"/docker-logo.png"}
                            alt="Docker logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          GitLab
                          <Image
                            src={"/gitlab-logo.svg"}
                            alt="GitLab logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Card className="max-w-prose flex-1">
              <CardContent className="flex flex-col gap-8">
                <Image
                  src={"/HEDHero.webp"}
                  alt={"Hometap HED"}
                  width={1704}
                  height={1248}
                />
                <ul className="ml-6 flex flex-col gap-2">
                  {hometapBullets.map((bullet) => (
                    <li key={bullet.key} className="list-disc">
                      {bullet.bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
          <Image
            src={hometapInquiry}
            alt={"Hometap inquiry page"}
            width={2880}
            height={1750}
            className="w-full max-w-5xl rounded-sm"
          />
          <div className="flex flex-col">
            <blockquote className="border-secondary flex max-w-prose flex-col gap-2 border-l-2 pl-6">
              <p>
                Now on my second co-op, I&apos;m coming into Hometap confident
                in having the skillset to be a strong entry-level engineer
                contributor to my team, the engineering dept, and the company as
                a whole.
              </p>
              <p>
                I want to strive to break through that and take the next step,
                encompassing more responsibilities and initiatives that an
                SE2-level engineer or higher would.
              </p>
            </blockquote>
          </div>
          <GoalsCard />
        </Content>
      </Container>
      <Container
        id="woodmac"
        className="min-h-screen"
        noisy
        bgColorNoisy="input/20"
      >
        <Content className="flex flex-col items-center gap-16 py-32">
          <div className="flex w-full max-w-prose justify-center gap-4">
            <div className="flex w-full flex-col gap-8 sm:w-auto sm:items-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/woodmac-logo-horizontal.png"}
                  alt="WoodMac Logo"
                  width={1232}
                  height={413}
                  className="bg-background dark:bg-foreground -ml-3 w-28 rounded-full px-2 py-1 sm:w-32 md:w-36 lg:w-40"
                />
                <div className="flex flex-col">
                  <H2 className="text-foreground hidden sm:block">
                    Software Engineering Co-op
                  </H2>
                  <div className="flex flex-col sm:hidden">
                    <H2 className="text-foreground">Software</H2>
                    <H2 className="text-foreground">Engineering Co-op</H2>
                  </div>
                  <Monospace className="text-muted-foreground">
                    Wood Mackenzie Limited
                  </Monospace>
                </div>
              </div>
              <Alert className="relative flex gap-4">
                <p className="text-2xl">⚡️</p>
                <div className="flex flex-col">
                  <AlertTitle>Jan 2023 — Aug 2023 · 7 mo</AlertTitle>
                  <AlertDescription>
                    Boston, Massachusetts, United States
                  </AlertDescription>
                </div>
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br from-sky-300 to-indigo-300 blur-lg dark:from-sky-600 dark:to-indigo-600" />
              </Alert>
            </div>
          </div>
          <section className="flex flex-col gap-8 sm:flex-row lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-4">
              <H3 className="text-tertiary shrink-0 text-nowrap">what i did</H3>
              <Separator />
              <div className="flex flex-col gap-8">
                <p className="text-muted-foreground font-extrabold">
                  tech stack:
                </p>
                <div className="flex gap-8 sm:flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      front end
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          TypeScript
                          <Image
                            src={"/ts-logo.png"}
                            alt="TypeScript logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          React
                          <Image
                            src={"/react-logo.png"}
                            alt="React logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Node
                          <Image
                            src={"/node-logo.png"}
                            alt="Node logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      back end
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Python
                          <Image
                            src={"/python-logo.png"}
                            alt="Python logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Django
                          <Image
                            src={"/django-logo.png"}
                            alt="Django logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4 sm:flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <Monospace className="text-accent-foreground">
                      infra
                    </Monospace>
                    <ul className="ml-6 flex flex-col gap-2">
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Jenkins
                          <Image
                            src={"/jenkins-logo.png"}
                            alt="Jenkins logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          AWS
                          <Image
                            src={"/aws-logo.webp"}
                            alt="AWS logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Docker
                          <Image
                            src={"/docker-logo.png"}
                            alt="Docker logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                      <li className="list-disc">
                        <div className="flex items-center gap-2">
                          Bitbucket
                          <Image
                            src={"/bitbucket-logo.svg"}
                            alt="Bitbucket logo"
                            width={96}
                            height={96}
                            className="h-5 w-fit"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Card className="max-w-prose flex-1">
              <CardContent className="flex flex-col gap-8">
                <Image
                  src={"/lens-screenshot.png"}
                  alt={"Lens Screenshot"}
                  width={1600}
                  height={1200}
                  className="mt-8"
                />
                <ul className="ml-6 flex flex-col gap-2">
                  {powerAdvocateBullets.map((bullet) => (
                    <li key={bullet.key} className="list-disc">
                      {bullet.bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
          <Image
            src={"/woodmac-lens-gas-lng.webp"}
            alt={"Lens Gas & LNG"}
            width={1280}
            height={720}
            className="w-full max-w-prose rounded-md"
          />
          <div className="flex flex-col">
            <blockquote className="border-secondary flex max-w-prose flex-col gap-2 border-l-2 pl-6">
              <p>
                At WoodMac, I was blessed with the opportunity to take the lead
                on a new initiative to create a new data curation platform.
                Establishing a role as the application&apos;s point person, I
                communicated project estimates, status updates, and technical
                explanations to product and engineering managers, collaborated
                frequently with our UK-based data team, onboarded new engineers
                onto the codebase, and presented the product to company
                executives and directors.
              </p>
              <p>
                Over my 7 months, I collaborated with a agile scrum team of 8
                engineers to deliver industry-leading software to customers in
                the energy sector, utilizing a Jira board and 2-week sprints.
              </p>
            </blockquote>
          </div>
        </Content>
      </Container>
    </section>
  );
}

function GoalsCard() {
  return (
    <Card className="mb-16 max-w-prose">
      <CardHeader className="flex flex-row items-center gap-4">
        <p className="text-4xl">🎯</p>
        <H3 className="text-tertiary">goals</H3>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Checkbox disabled className="disabled:cursor-default" id="django" />
          <label htmlFor="django" className="-mt-1">
            Master django, graphql, docker technologies
          </label>
        </div>
        <div className="ml-6 flex flex-col gap-2">
          <div className="flex gap-2">
            <Checkbox
              disabled
              className="disabled:cursor-default"
              id="explain"
            />
            <label htmlFor="explain" className="-mt-1">
              be able to explain why these technologies were created (what
              problem they solve)
            </label>
          </div>
          <div className="flex gap-2">
            <Checkbox disabled className="disabled:cursor-default" id="work" />
            <label htmlFor="work" className="-mt-1">
              be able to explain how they work under the hood
            </label>
          </div>
          <div className="flex gap-2">
            <Checkbox disabled className="disabled:cursor-default" id="use" />
            <label htmlFor="use" className="-mt-1">
              be able to explain why someone/some company should use them
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <Checkbox
            disabled
            className="disabled:cursor-default"
            id="team-player"
          />
          <label htmlFor="team-player" className="-mt-1">
            Be more of a team player as a software engineer. In an individual
            contributor role, it is easy for me to focus too primarily on
            burning story points and closing merge requests. I want to still do
            that—but also offer more to the team and the company.
          </label>
        </div>
        <div className="ml-6">
          <div className="flex gap-2">
            <Checkbox
              disabled
              className="disabled:cursor-default"
              id="monitor"
            />
            <label htmlFor="monitor" className="-mt-1">
              monitor logs/alerts/production issues that come up and take
              initiative to bring it up to the team and address it
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <Checkbox
            disabled
            className="disabled:cursor-default"
            id="engineering-projects"
          />
          <label htmlFor="engineering-projects" className="-mt-1">
            Champion engineering projects + create tickets/tasks, working on
            software architecting and project management skills
          </label>
        </div>
        <div className="flex gap-2">
          <Checkbox
            disabled
            className="disabled:cursor-default"
            id="hometap-business"
          />
          <label htmlFor="hometap-business" className="-mt-1">
            Learn and fully understand Hometap as a business, comprehending the
            investment and financial structure of the business model. Practice
            the business half of my major in addition to CS.
          </label>
        </div>
        <div className="flex gap-2">
          <Checkbox
            disabled
            className="disabled:cursor-default"
            id="successful-startup"
          />
          <label htmlFor="successful-startup" className="-mt-1">
            Learn, understand, analyze what makes a successful startup/company
          </label>
        </div>
        <div className="ml-6">
          <div className="flex gap-2">
            <Checkbox
              disabled
              className="disabled:cursor-default"
              id="interview"
            />
            <label htmlFor="interview" className="-mt-1">
              ask/interview people in different functions of the business what
              about the company culture, people, founders, management make
              Hometap great
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
