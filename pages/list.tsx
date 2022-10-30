import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const List: NextPage = () => {
  const { data } = useQuery(["posts"], () =>
    axios.get("https://koreanjson.com/posts")
  );

  console.log(data?.data);
  return (
    <div className="w-screen h-screen bg-black text-white">
      <ul>
        {data?.data.slice(0, 30).map((item: { title: string }) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
