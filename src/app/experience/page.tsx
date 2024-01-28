import Image from "next/image";
import { hometapBullets } from "@app/resume/Resume";

import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H1 from "@components/typography/h1";
import H2 from "@components/typography/h2";
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { Checkbox } from "@components/ui/checkbox";

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
                className="h-16 w-16"
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
      <Container id="hometap" className="bg-tertiary/10 min-h-screen" noisy>
        <Content className="flex flex-col items-center gap-16 py-32">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <Image
                src={"/hometap-logo-horizontal.png"}
                alt="Hometap Logo"
                width={180}
                height={255}
                className="-ml-1 h-16 w-fit"
              />
              <div className="flex flex-col">
                <H1 className="hidden sm:block">
                  Full-Stack Engineering Co-op
                </H1>
                <div className="flex flex-col sm:hidden">
                  <H1>Full-Stack</H1>
                  <H1>Engineering Co-op</H1>
                </div>
                <p className="italic">Hometap Equity Partners, LLC</p>
              </div>
            </div>
            <Alert className="flex gap-4">
              <p className="text-2xl">🚀</p>
              <div className="flex flex-col">
                <AlertTitle>Jan 2024 - Present · 1 mo</AlertTitle>
                <AlertDescription>
                  Boston, Massachusetts, United States
                </AlertDescription>
              </div>
            </Alert>
          </div>
          <section className="flex flex-col gap-8 sm:flex-row lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-6">
              <H2 className="w-48">what i&apos;m doing</H2>
              <div className="flex flex-col gap-4">
                <p className="font-extrabold">tech stack:</p>
                <div className="flex gap-4 sm:flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="italic">front end</p>
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
                    <p className="italic">back end</p>
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
                    <p className="italic">database</p>
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
                    <p className="italic">infra / deployment</p>
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
            <Card className="flex-1">
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
            src={"/inquiry.jpeg"}
            alt={"Inquiry page"}
            width={1704}
            height={1248}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <blockquote className="max-w-prose border-l-2 pl-6">
              Now on my second co-op, I&apos;m coming into Hometap confident in
              having the skillset to be a strong entry-level engineer
              contributor to my team, the engineering dept, and the company as a
              whole. I want to strive to break through that and take the next
              step, encompassing more responsibilities and initiatives that an
              SE2-level engineer or higher would.
            </blockquote>
          </div>
          <GoalsCard />
        </Content>
      </Container>
      <Container id="hometap" className="bg-input/20 min-h-screen" noisy>
        <Content className="flex flex-col items-center gap-16 py-32">
          <div className="flex w-full max-w-prose justify-center gap-4">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <Image
                  src={"/woodmac-logo-horizontal.png"}
                  alt="WoodMac Logo"
                  width={180}
                  height={255}
                  className="-ml-4 h-16 w-fit"
                />
                <div className="flex flex-col">
                  <H1 className="hidden sm:block">
                    Software Engineering Co-op
                  </H1>
                  <div className="flex flex-col sm:hidden">
                    <H1>Software</H1>
                    <H1>Engineering Co-op</H1>
                  </div>
                  <p className="italic">Wood Mackenzie Limited</p>
                </div>
              </div>
              <Alert className="flex gap-4">
                <p className="text-2xl">⚡️</p>
                <div className="flex flex-col">
                  <AlertTitle>Jan 2023 — Aug 2023 · 7 mo</AlertTitle>
                  <AlertDescription>
                    Boston, Massachusetts, United States
                  </AlertDescription>
                </div>
              </Alert>
            </div>
          </div>
          <section className="flex flex-col gap-8 sm:flex-row lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-6">
              <H2 className="w-48">what i did</H2>
              <div className="flex flex-col gap-4">
                <p className="font-extrabold">tech stack:</p>
                <div className="flex gap-4 sm:flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <p className="italic">front end</p>
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
                    <p className="italic">back end</p>
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
                    <p className="italic">database</p>
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
                    <p className="italic">infra / deployment</p>
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
            <Card className="flex-1">
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
            src={"/inquiry.jpeg"}
            alt={"Inquiry page"}
            width={1704}
            height={1248}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <blockquote className="max-w-prose border-l-2 pl-6">
              Now on my second co-op, I&apos;m coming into Hometap confident in
              having the skillset to be a strong entry-level engineer
              contributor to my team, the engineering dept, and the company as a
              whole. I want to strive to break through that and take the next
              step, encompassing more responsibilities and initiatives that an
              SE2-level engineer or higher would.
            </blockquote>
          </div>
          <GoalsCard />
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
        <H2>goals</H2>
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
