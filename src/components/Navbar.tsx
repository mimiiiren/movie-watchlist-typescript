

export default function Navbar() {
  return (
    <nav className="flex justify-between mx-1 items-center my-4 py-4 border-b-3 border-white">
      <h1 className="text-yellow-400 text-4xl font-bold">MovieManiac</h1>
      <div className="flex justify-end gap-4">
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>
    </nav>
  );
}
