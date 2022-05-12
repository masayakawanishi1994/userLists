// import { useContext } from "react";
import styled from "styled-components";
// import { UserContext } from "../../providers/UserProvider";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
// サンプルデータの作成
const users = [...Array(10).keys()].map((val) => {
  return {
    // 受け取る値をプロパティで準備
    id: val,
    name: `サンプル${val}`,
    image: "https://source.unsplash.com/R5scocnOOdM",
    email: "#",
    phone: "000",
    company: {
      name: "aaa"
    },
    website: "eee.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickChange = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickChange}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
