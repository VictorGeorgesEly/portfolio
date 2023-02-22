import Typewriter from "../components/Typewriter";

export default function Home(): JSX.Element {
  const texts = ["an Engineer", "a Developer", "Victor ELY"];
  return (
      <h1>
        <Typewriter text={texts} />
      </h1>
  );
}
