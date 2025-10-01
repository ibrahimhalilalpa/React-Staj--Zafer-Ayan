import BottomNavigation from "./components/BottomNavigation";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularRecipes from "./components/PopularRecipes";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="flex gap-4 flex-col">
      <Header />
      <Hero />
      <SearchBar />
      <Categories />
      <PopularRecipes />
      <BottomNavigation />
    </div>
  );
};

export default App;