import NavbarPage from "@/components/navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClothesPage() {
  const router = useRouter();
  const { categoryId } = router.query;

  const [clothes, setClothes] = useState<any>([]);

  useEffect(() => {
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
    fetchdata();
  }, []);
  console.log(clothes);

  return (
    <div>
      <NavbarPage />
      {clothes?.map((clothe: any) => {
        return <p>{clothe.id}</p>;
      })}
    </div>
  );
}
