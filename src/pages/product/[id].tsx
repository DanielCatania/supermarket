import Text from "@/components/Text";
import React from "react";
import productsJSON from "@/data/products.json";
import Link from "next/link";
import { IProduct } from "..";

interface IProductProps {
  product: IProduct;
}

export function getServerSideProps(ctx) {
  const { id } = ctx.params;
  const product = productsJSON.find((prod) => prod.id === id);

  return {
    props: {
      product,
    } satisfies IProductProps,
  };
}

export default function HomeScreen({ product }: IProductProps) {
  return (
    <>
      <Link href="/">
        <Text as="h1">Supermarket</Text>
      </Link>
      <img src={product.image} alt={product.name} />
      <Text>{product.name}</Text>
      <Text>({product.reviews}) Reviews</Text>
      <Text>({product.stars}) stars</Text>
    </>
  );
}
