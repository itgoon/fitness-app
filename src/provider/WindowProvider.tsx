import CP from "@/components";
import { routes } from "@/route";
import { RouteProps } from "@/route/routes";
import Store from "@/store";
import { CustomRouteProps } from "@/store/layoutStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

function WindowProvider() {
  const location = useLocation();
  const [modal, setModal] = useRecoilState(Store.Layout.windowState); 
  const [layout, setLayout] = useRecoilState(Store.Layout.layoutState);
  const [routeList, setRouteList] = useRecoilState(Store.Layout.routeState);

  useEffect(() => {
    if (!location?.pathname) return;

    let _route: CustomRouteProps[] = routeList ? [...routeList] : [];

    if (_route?.length === 0) {
      _route = settingRouteState(routes, _route);

      console.log({_route});
      setRouteList(_route ? _route : []);
      if (!_route) return;
    }

    const pathItem = _route?.find((item) => item.path === location.pathname);

    if (!pathItem) return;

    setLayout({
      header: pathItem?.isHeader === false ? false : true,
      bottom: pathItem?.isBottom === false ? false : true
    });


  }, [routes, location]);


  const settingRouteState = (
    _routes: RouteProps[],
    list: CustomRouteProps[]
  ): CustomRouteProps[] => {
    // if (!_routes) return [];

    let _list = list ? list : [];

    if (_routes && _routes?.length > 0) {
      _routes?.map((item) => {
        if (!item) return;

        const { children, element, ...params } = item;

        _list.push(params);

        if (item?.children) return settingRouteState(item?.children, _list);
      });
    }
    return _list;
  };


  

  return <></>;
}

export default WindowProvider;
