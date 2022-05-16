import { Main } from "src/templates/Main";
import { Process } from "src/templates/Process";
import { Faq } from "src/templates/FAQ";
import { Footer } from "src/templates/Footer";
import { texts } from "src/utils/texts";

export const Home = () => (
  <>
    <Main />
    <Process />
    <Faq />
    <Footer>{texts.footer.contact}</Footer>
  </>
);
