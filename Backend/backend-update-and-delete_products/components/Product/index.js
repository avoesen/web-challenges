import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";
import { StyledButton } from "../Button/Button.styled";
import styled from "styled-components";

export default function Product() {
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }
  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (response.ok) {
      router.push("/");
    }
    if (!response.ok) {
      response.status(400).json({ error: "error" });
    }
  }
  return (
    <>
      <ProductCard>
        <h2>{data.name}</h2>
        <p>Description: {data.description}</p>
        <p>
          Price: {data.price} {data.currency}
        </p>
        {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
        <StyledDiv>
          <StyledLink href="/">Back to all</StyledLink>
          <StyledButton
            type="button"
            $editMode={editMode}
            onClick={() => setEditMode(!editMode)}
          >
            ✏️
          </StyledButton>
          <StyledButton type="button" onClick={() => handleDeleteProduct()}>
            ❌
          </StyledButton>
        </StyledDiv>
      </ProductCard>
      {editMode && <ProductForm onSubmit={handleEditProduct} id={id} />}
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
