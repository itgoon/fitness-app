import { ConfigContext } from "contexts/ConfigContext";
import { useContext } from "react";

// ==============================|| CONFIG - HOOKS ||============================== //

export default function useConfig() {
  return useContext(ConfigContext);
}
