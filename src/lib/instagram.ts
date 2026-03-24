import "server-only";

export type InstagramMedia = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | string;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
};

export async function fetchInstagramMedia(limit = 9): Promise<InstagramMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) return [];

  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=${limit}&access_token=${token}`,
    { next: { revalidate: 3600 } },
  );

  if (!res.ok) return [];

  const data = (await res.json()) as { data?: InstagramMedia[] };
  return data.data ?? [];
}

