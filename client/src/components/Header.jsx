import { useEffect, useState } from "react";

function Header() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      });

      setTime(formatter.format(now));
    };

    updateTime(); // initial
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full h-16 px-20 flex items-center justify-between text-gray-700 text-xs tracking-wide tracking-wide
        transition-all duration-300 z-50
        ${
          scrolled
            ? "fixed top-0 bg-pink-50 backdrop-blur-md shadow-sm"
            : "absolute top-0 bg-transparent"
        }`}
    >
      {/* LEFT */}
      <div className="flex items-center gap-8 font-serif">
        <span className="font-medium text-black">J / K</span>
        <span className="uppercase opacity-80">{`Nepal, ${time}`}</span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6 font-serif">
        <span className="cursor-pointer hover:opacity-60">PROJECTS</span>
        <span className="opacity-40">/</span>
        <span className="cursor-pointer hover:opacity-60">ABOUT</span>
      </div>
    </div>
  );
}

export default Header;
