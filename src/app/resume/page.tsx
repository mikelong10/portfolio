import Container from "@components/structure/Container";
import Resume from "./Resume";

export default function ResumePage() {
  return (
    <Container className="min-h-screen py-32">
      <div className="flex w-full justify-center">
        <Resume />
      </div>
    </Container>
  );
}
