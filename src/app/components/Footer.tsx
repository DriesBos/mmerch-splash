import Subscribe from './subscribe';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-Column">
        <Subscribe />
      </div>
      <div className="footer-Column">
        <a
          href="https://www.instagram.com/mmerch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a>
      </div>
      <div className="footer-Column">
        <a
          href="https://twitter.com/mmerch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </footer>
  );
}
