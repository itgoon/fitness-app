import CP from "@/components";
import { routes } from "@/route";
import { RouteProps } from "@/route/routes";
import Store from "@/store";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

function WindowProvider() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log({ location });

    if (location?.pathname !== "/") return;

    navigate("/trainer/main");
  }, [location]);

  return <></>;
}

export default WindowProvider;
