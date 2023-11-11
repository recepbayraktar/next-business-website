import Hero from "@/components/layout/Hero";
export default async function Home() {
  return (
    <div className="flex  flex-col items-center justify-between ">
      <Hero />
      <div className="bg-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        labore officiis non quod consectetur? Possimus harum quidem, deserunt
        repellat tempore quod sapiente aut cum veniam vitae architecto
        exercitationem laborum fuga.
      </div>
    </div>
  );
}
