import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      {/* 画面の出し分けをSwitch配下で行う */}
      <Switch>
        <Route exact path="/">
          <DefaultLayout />
          <Top />
        </Route>
        <Route path="/users">
          <HeaderOnly />
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
