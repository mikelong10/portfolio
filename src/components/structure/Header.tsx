import Container from "@components/structure/Container";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center py-8 transition-all">
      <Container>
        <MobileHeader />
        <DesktopHeader />
      </Container>
    </header>
  );
}
