
import Filtering from "@/src/components/Modules/found-Items/Filtering";
import Post from "@/src/components/Post";
import Container from "@/src/components/UI/Container";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TPost } from "@/src/types";

export default async function FoundItems({
  searchParams,
}: {
  searchParams: any;
}) {
  const params = new URLSearchParams(searchParams);

  const { data } = await axiosInstance.get(`/items`, {
    params: {
      searchTerm: params.get("query"),
      category: params.get("category"),
    },
  });

  return (
    <Container>
      <Filtering />
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: TPost) => (
          <Post key={post?._id} post={post} />
        ))}
      </div>
    </Container>
  );
}
