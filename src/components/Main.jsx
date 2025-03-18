import contentArray from "../data.js";

export default function Main() {
  return (
    <main>
      <h1 id="back">
        Welcome to <span>[Our company]</span>
      </h1>
      {contentArray.map((text) => (
        <p>{text}</p>
      ))}
      <a href="#back">Go back </a>
    </main>
  );
}
