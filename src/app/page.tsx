import Footer from './components/Footer';
import { EmailForm } from './components/EmailForm';

export default function Home() {
  return (
    <div>
      <main>
        <div className="logo">
          <img src="/logo.svg" alt="mmERCH logo" />
          <EmailForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
