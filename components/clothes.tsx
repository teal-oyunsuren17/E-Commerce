import axios from "axios";
import { useEffect } from "react";

export default function ClothesPage() {
  useEffect(() => {
    axios.get("http://localhost:1337/api/blogs?populate=*").then((res) => {
      //   console.log(res.data);
      //   const { data } = res.data;
      //   setCategories(data);
    });
  }, []);
  return <div>hi</div>;
}
