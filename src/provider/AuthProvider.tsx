import { useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * 인증 여부 체크
 *
 */
const AuthProvider = ({ children }: { children: any }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return children;
};

export default AuthProvider;
