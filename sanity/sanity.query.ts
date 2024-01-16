import { EarlyChildHood } from "@/types/EarlyChildhood";
import { createClient, groq } from "next-sanity";

export async function getEarlyChildhood(): Promise<EarlyChildHood[]> {
  const client = createClient({
    projectId: "s5zezdma",
    dataset: "production",
    apiVersion: "2023-01-11",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == 'earlyChildhoodPage']{
        _id,
        _type,
        "heroImage":heroImage.asset->url,
        'decorationImage':decorationImage.asset->url,
        heroTitle,
        title,
       
        infoParagraph,
        "slug": slug.current
      }`,
    {
      next: {
        revalidate: 62,
      },
    }
  );
}
