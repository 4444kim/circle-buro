import { setRequestLocale } from "next-intl/server";
import ProdHero from "@/app/components/shared/showCases/prod/prodHero/prodHero";
import ProdBlocks from "@/app/components/shared/showCases/prod/prodBlocks/prodBlocks";

type Props = { params: Promise<{ locale: string }> };

export default async function ProdPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProdHero />
      <ProdBlocks />
    </>
  );
}
