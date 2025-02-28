// src/app/[...url]/page.tsx

import { Component } from "react";
import { ragChat } from "../../lib/rag-chat";

interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}
function recontructedURL({ url }: { url: string[] }) {
  const decocdedComponents = url.map((Component) => decodeURIComponent(Component))
  return decocdedComponents.join("/");
}

const Page = async ({ params }: PageProps) => {
  const recontructedURL({ url: params.url as string[] })
  const isAlreadyIndexed = await redis.sismember("indexed-urls", recontructedURL)
  

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: recontructedURL,
      config: { chunkOverlap: 50, chunkSize: 200 },
    })
    
    await redis.sadd("indexed-urls", recontructedURL)
  }
  console.log(params)

  return (
   <ChatWrapper sessionId = {}/>
  );
};

export default Page;
