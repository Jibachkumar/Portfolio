import TourWebsite from "../../public/exploreNepal.png";
import BikeManagementSystem from "../../public/bikeManagementSystem.png";
import BandingPage from "../../public/landing.png";
import Portfolio from "../../public/portfolio.png";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  // display the Map
  function Map({ mapId, w = "100%", h = "100%" }) {
    const [lat, lng] = [27.7172, 85.324];

    useEffect(() => {
      // prevent map duplication
      const container = L.DomUtil.get(mapId);
      if (container != null) {
        container._leaflet_id = null;
      }

      const map = L.map(mapId, {
        zoomControl: false,
        attributionControl: false,
      }).setView([lat, lng], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      L.marker([lat, lng]).addTo(map).bindPopup("Kathmandu").openPopup();

      return () => {
        map.remove();
      };
    }, [mapId]);

    return (
      <div
        id={mapId}
        style={{
          width: w,
          height: h,
          borderRadius: "1rem",
          zIndex: 1,
        }}
        onClick={() => openGoogleMap(lat, lng)}
      />
    );
  }

  const openGoogleMap = (lat, lng) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-28 py-10">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-68">
        {/* LEFT PROFILE SECTION */}
        <div className="lg:col-span-1">
          <div className="flex flex-col items-start">
            <img
              src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg"
              alt="Profile"
              className="h-44 w-44 rounded-full object-cover"
            />

            <h1 className="mt-6 text-3xl font-serif font-bold text-gray-900">
              Jibachh Kumar
            </h1>

            <p className="mt-2 text-gray-600">Hello! 👋</p>

            <p className="mt-4 w-116 font-serif font-medium text-xl text-gray-600 leading-relaxed">
              I am a UI/UX designer with 3+ years of experience designing user
              interfaces and user experience, UX Research, redesigning projects,
              and Usability Testing. I want to stay up-to-date with the latest
              trends in my field.
            </p>

            <Link to={"/login"}>
              <button
                aria-label="Accessibility options"
                title="Accessibility options"
                className="fixed bottom-20 left-28 text-black/50 font-serif hover:bg-slate-200 p-2 rounded-md cursor-pointer"
              >
                <i className="fa-solid fa-arrow-right-to-bracket "></i>
                <span className="ml-2">Log in</span>
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* MAP CARD */}
          <div className="rounded-2xl overflow-hidden bg-white shadow">
            <Map mapId={`map`} />
          </div>

          <div className="flex flex-col gap-y-10">
            {/* LINKEDIN CARD */}
            <div className="rounded-2xl bg-[#e4e3e3] shadow p-5 flex items-center justify-center gap-14">
              <div
                className="font-serif cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jibachh-kumar-078bba2a2/",
                    "_blank",
                  )
                }
              >
                <div className="h-10 w-10 text-xl rounded-lg bg-blue-800 flex items-center justify-center text-white font-bold">
                  in
                </div>
                <div>
                  <p className="font-medium ">Let’s Connect</p>
                  <p className="text-sm text-gray-500">linkedin.com</p>
                </div>
              </div>
              <div className="bg-[#454749] h-32 w-40 rounded-md flex items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/036/418/387/small/boy-facial-expression-png.png"
                  alt="Profile"
                  className="h-28 w-28 mx-auto object-cover overflow-hidden"
                />
              </div>
            </div>

            {/* QUOTE CARD */}
            <div className="rounded-2xl text-center bg-white shadow py-12 md:col-span-2">
              <p className="text-xl font-medium font-serif text-gray-800">
                Crafting visuals with purpose, <br />
                designing experiences with heart 🔥
              </p>
            </div>
          </div>

          {/* website CARD */}
          <div className="rounded-2xl flex gap-6 bg-white shadow p-5">
            <div className="flex flex-col justify-center gap-3">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center">
                <img
                  src="https://www.freeiconspng.com/thumbs/website-icon/website-icon-25.png"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <p className="font-medium font-serif">My Websites</p>
              <button
                
                className="mt-2 rounded-lg w-28 bg-blue-800 px-2 py-2 text-sm text-white font-medium font-serif cursor-pointer transition duration-200 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
              >
                Follow me
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-gray-200 w-28 h-24 rounded-xl">
                <img
                  onClick={() =>
                    window.open(
                      "https://bike-management-system-8mgi.vercel.app/",
                      "_blank",
                    )
                  }
                  src={BikeManagementSystem}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="bg-gray-200 w-28 h-24 rounded-xl">
                <img
                  src={TourWebsite}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="bg-gray-200 w-28 h-24 rounded-xl">
                <img
                  src={BandingPage}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="bg-gray-200 w-28 h-24 rounded-xl">
                <img
                  src={Portfolio}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* social media */}
          <div className="rounded-2xl bg-[#ffffff] shadow p-5">
            <div className="flex items-center justify-between">
              <p className="font-semibold font-mono">Connect with me</p>
              <button className="rounded-full bg-white px-4 py-1 text-sm shadow">
                Follow
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div  onClick={() => window.open(
                    "https://www.facebook.com/zadan.smith.58",
                    "_blank",
                  ) 
                  } className="h-24 rounded-lg bg-gray-300"><img src="" alt="" /></div>
              <div onClick={() =>
                  window.open(
                    "https://www.instagram.com/kuwarjeebacha/",
                    "_blank",
                  )
                } className="h-24 rounded-lg bg-gray-300"><img src="" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
