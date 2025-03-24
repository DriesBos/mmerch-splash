import Subscribe from './subscribe';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-Column">
        <Subscribe />
      </div>
      <div className="footer-Column desktop">
        <a
          href="https://www.instagram.com/mmerch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a>
      </div>
      <div className="footer-Column desktop">
        <a
          href="https://discord.gg/mmerch"
          target="_blank"
          rel="noopener noreferrer"
        >
          DISCORD
        </a>
      </div>
      <div className="footer-Column desktop">
        <a
          href="https://twitter.com/mmerch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>

      <div className="footer-Column footer-Column_Social mobile">
        <a
          href="https://www.instagram.com/mmerch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a>
        <a
          href="https://twitter.com/mmerch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DISCORD
        </a>
        <a
          href="https://discord.gg/mmerch"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </footer>
  );
}
