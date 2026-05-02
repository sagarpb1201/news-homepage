import HeroSideBar from '../components/HeroSideBar';
import HeroMain from '../components/HeroMain';
export default function () {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <HeroMain/>
        <HeroSideBar/>
      </div>
    </main>
  );
}
