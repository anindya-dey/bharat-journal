import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../data/site";

export async function GET(context: any) {
  const ideas = await getCollection("ideas");
  const vizs = await getCollection("now");

  const items = [
    ...vizs.map((v) => ({
      title: `Now: ${v.data.title}`,
      description: v.data.description,
      link: `/now/${v.id}/`,
      pubDate: new Date(v.data.updated),
    })),
    ...ideas.map((i) => ({
      title: `Next: ${i.data.title}`,
      description: i.data.description,
      link: `/next/${i.id}/`,
      pubDate: new Date(i.data.updated),
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: `${SITE.title} — ${SITE.tagline}`,
    description: SITE.description,
    site: context.site,
    items,
  });
}
