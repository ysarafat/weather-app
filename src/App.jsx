import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import FavoriteProvider from "./provider/FavoriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

export default function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <div className="grid place-items-center h-screen">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      </FavoriteProvider>
    </WeatherProvider>
  );
}
