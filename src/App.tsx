import Typewriter from "./components/Typewriter";

export default function App(): JSX.Element {
  const texts = ["an Ingenior", "a Developer", "Victor ELY"];
  return (
      <h1>
        <Typewriter text={texts} />
      </h1>
  );
}
