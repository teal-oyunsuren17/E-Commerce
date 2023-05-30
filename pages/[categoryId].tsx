import NavbarPage from "@/components/navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClothesPage() {
  const router = useRouter();
  const { categoryId } = router.query;

  const [clothes, setClothes] = useState<any>([]);
  async function fetchdata() {
    const response = await axios.get(
      `http://localhost:1337/api/blogs?populate[0]=category&filters[category][id][$eq]=${Number(
        categoryId
      )}`
    );
    const data = await response.data.data;
    setClothes(data);

    // axios
    //   .get(
    //     `http://localhost:1337/api/blogs?populate[0]=category&filters[category][id][$eq]=${Number(
    //       categoryId
    //     )}`
    //   )
    //   .then((res) => {
    //     setClothes(res.data.data);
    //   });
  }
  useEffect(() => {
    if (categoryId && router.isReady) {
      fetchdata();
    }
  }, [categoryId]);
  console.log(clothes);

  return (
    <div>
      <NavbarPage />
      {clothes?.map((clothe: any) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
