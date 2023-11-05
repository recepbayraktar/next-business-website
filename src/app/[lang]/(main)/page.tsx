import Hero from "@/components/layout/Hero";
import { useTranslation } from '../../i18n'
export default async  function Home({ params: { lang } }: { params: { lang: string } }) {
  const { t } = await useTranslation(lang)
  return (
    <div className="flex  flex-col items-center justify-between ">
     <Hero/>
    </div>
  );
}
