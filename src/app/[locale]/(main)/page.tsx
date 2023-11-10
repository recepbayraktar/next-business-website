import Hero from "@/components/layout/Hero";
export default async  function Home({ params: { lang } }: { params: { lang: string } }) {

  return (
    <div className="flex  flex-col items-center justify-between ">
     <Hero/>
    </div>
  );
}
