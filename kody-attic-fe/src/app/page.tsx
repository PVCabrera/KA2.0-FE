import bgImages from "@/app/assets/bgImages/BFP3.png";

export default function Home() {
  return (
    /*Home page Background Image*/
    <div
      className="bg-cover h-screen w-full top-0 left-0 z-0"
      style={{ backgroundImage: `url(${bgImages.src})` }}
    >
      <h1 className="text-white">Hello World!</h1>
    </div>
  );
}
