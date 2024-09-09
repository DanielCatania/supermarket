import Text from "@/components/Text";
import React from "react";
import productsJSON from "@/data/products.json";
import Link from "next/link";

export interface IProduct {
  id: string;
  name: string;
  value: number;
  image: string;
  reviews: number;
  stars: number;
}

interface IHomeProps {
  products: IProduct[];
}

export function getServerSideProps(ctx) {
  const products: IProduct[] = productsJSON;

  return {
    props: {
      products,
    } satisfies IHomeProps,
  };
}

export default function HomeScreen({ products }: IHomeProps) {
  return (
    <>
      <Text as="h1">Supermarket</Text>
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id}>
            <img src={product.image} alt={product.name} />
            <Text>{product.name}</Text>
            <Text>({product.reviews}) Reviews</Text>
            <Text>({product.stars}) stars</Text>
          </Link>
        );
      })}
    </>
  );
}
