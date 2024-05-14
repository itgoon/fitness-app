import Store from "@/store";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import CP from "@/components";
import CustomHeader from "./CustomHeader";
import CustomBottom from "./CustomBottom";

const CustomLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [color, setColor] = useRecoilState(Store.Layout.colorState);

  const [layout, setLayout] = useRecoilState(Store.Layout.layoutState);
  return (
    <CP.Styled.Layout
      // style={{ background: "linear-gradient(#e664651A, #9198e51A)" }}
      // style={{ background: `${color}0D` }}
      isHeader={layout?.header ? layout.header : true}
      isBottom={layout?.bottom ? layout.bottom : true}
    >
      {layout.header && <CustomHeader />}
      <Outlet />
      {layout.bottom && <CustomBottom />}
    </CP.Styled.Layout>
  );
};

export default CustomLayout;
