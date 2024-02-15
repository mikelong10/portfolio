import Container from "@components/structure/Container";
import Content from "@components/structure/Content";
import H1 from "@components/typography/h1";

export default function ProjectsPage() {
  return (
    <Container
      className="flex min-h-screen items-center justify-center py-32"
      noisy
    >
      <Content>
        <div className="flex flex-col items-center gap-8">
          <H1>projects</H1>
          <p>coming soon...</p>
        </div>
      </Content>
    </Container>
  );
}
