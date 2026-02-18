import { setRequestLocale } from "next-intl/server";
import WebHero from "@/app/components/shared/showCases/web/WebHeroSection/WebHero";
import WebBlocks from "@/app/components/shared/showCases/web/WebBlocksSection/WebBlocks";

type Props = { params: Promise<{ locale: string }> };

export default async function WebPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <WebHero />
      <WebBlocks />
    </>
  );
}
