import { Sponsors, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Sponsors).values([
		{ name: "Tekna", url: "https://www.tekna.no/" },
    {
      name: "Nasjonalt senter for realfagsrekruttering",
      url: "https://www.realfagsrekruttering.no/",
    },
    { name: "NTNU IV", url: "https://www.ntnu.no/iv" },
    { name: "NTNU IE", url: "https://www.ntnu.no/ie" },
    { name: "NTNU IMF", url: "https://www.ntnu.no/imf" },
    { name: "Samarbeidsforum", url: "https://www.ntnu.no/nv/sf" },
    { name: "Abelprisen", url: "https://www.abelprisen.no/" },
    { name: "VisionTech", url: "https://www.visiontech.no/" },
    {
      name: "Kulturstyret i Bergen",
      url: "https://www.vtvest.no/kulturstyret/",
    },
    {
      name: "MN-faktultetet ved UiB",
      url: "https://www.uib.no/matnat",
    },
	])
}
