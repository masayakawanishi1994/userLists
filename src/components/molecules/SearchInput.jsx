import { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";

// memo-->propsに変更がない限り再レンダリングされない
export const SearchInput = memo(() => {
  return (
    <SContainar>
      <input placeholder="検索条件を入力" />

      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainar>
  );
});

const SContainar = styled.div`
  display: flex;
  align-items: s center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
