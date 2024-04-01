import { createClient } from "@sanity/client";
import { fetchQuery } from "./utils/supports";

const client = createClient({
  projectId: "qty2ahjp",
  dataset: "production",
  apiVersion: "2024-04-01",
  useCdn: true,
});

export const fetchFeeds = async () => {
  let data = await client.fetch(fetchQuery).then((feeds) => {
    return feeds;
  });
  return data;
};
