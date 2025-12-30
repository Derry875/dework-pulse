import Header from './components/Header';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Alerts from './components/Alerts';

export default function App() {
  return (
    <div className="text-white font-body">
      <Header />
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <Hero />
        <div className="grid lg:grid-cols-[1fr_360px] gap-6 mt-10">
          <Platforms />
          <Alerts />
        </div>
      </main>
    </div>
  );
}
