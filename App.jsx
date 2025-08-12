import React, { StrictMode } from "react";
import { render } from "react-dom";
import ecsstatic from "ecsstatic";

const styles = ecsstatic.css`
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
  }
  a {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  body {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .row {
    position: relative;
    height: 10vh;
    width: 100%;
    background-color: red;
    --color: linear-gradient(90deg, #fbba00, #ff8714);
    background: linear-gradient(90deg, #fbba00, #ff8714);
  }
  .row::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 5px;
    background-image: linear-gradient(to right, #fff 70%, #fbba00 70%);
    background-size: 120px;
    animation: moveline 0.5s infinite;
  }
  .row:nth-child(even) {
    --end: 120px;
  }
  .row:nth-child(odd) {
    --end: -120px;
  }
  @keyframes moveline {
    0% {
      background-position: 0;
    }
    100% {
      background-position: var(--end);
    }
  }
`;

function App() {
  return (
    <>
      {[...Array(50)].map((_, i) => (
        <aside key={i} className={styles.row} />
      ))}
    </>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);

export default App;
