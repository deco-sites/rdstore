import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 558,
  site: "rdstore",
  domains: ["rdstore.deco.site"],
});