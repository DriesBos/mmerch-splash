import Subscribe from './components/subscribe';

export default function Home() {
  return (
    <div>
      <main>
        <div className="logo">
          <img src="/logo.svg" alt="mmERCH logo" />
        </div>
      </main>
      <footer className="footer">
        <div className="footer-Column">
          <Subscribe />
        </div>
        <div className="footer-Column">
          <div className="footer-Column_Title">
            <h1>IG</h1>
          </div>
          <div className="footer-Column_Content">
            <a
              href="https://www.instagram.com/mmerch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mmerch
            </a>
          </div>
        </div>
        <div className="footer-Column">
          <div className="footer-Column_Title">
            <h1>X</h1>
          </div>
          <div className="footer-Column_Content">
            <a
              href="https://twitter.com/mmerch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mmerch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
