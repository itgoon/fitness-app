// import { AxiosRequestConfig, AxiosResponse } from "axios";

// import useApi from "@/hooks/useApi";
// import {
//   AuthApiAuthFirebaseCustomTokenPostRequest,
//   AuthFirebaseCustomTokenPostRequest,
//   AuthLoginPostRequest,
//   AuthSocialLoginPostRequest
// } from "@/api";
// import { ApiResponse, Response } from "@/global";
// import Config from "env/Config";
// import { auth as fauth } from "@/fbase";
// import { signOut } from "firebase/auth";

// // import { ApiResponse, Response } from "@/global";

// /**
//  * social 로그인
//  */
// export const socialLogin = async (
//   params: AuthSocialLoginPostRequest,
//   options?: AxiosRequestConfig
// ): Promise<any> => {
//   const api = useApi();

//   const res = await api.auth.authSocialLoginPost(
//     { authSocialLoginPostRequest: params },
//     options
//   );

//   console.log({ res });

//   if (res.status !== 200) throw new Error("Error");

//   return res.data;
// };

// export interface ILogin {
//   userId: string;
// }
// /**
//  * 로그인
//  * @param params
//  * @param options
//  * @returns
//  */
// export const login = async (
//   params: AuthLoginPostRequest,
//   options?: AxiosRequestConfig
// ): Promise<any> => {
//   const api = useApi();

//   const res = await api.auth.authLoginPost(
//     { authLoginPostRequest: params },
//     options
//   );

//   console.log({ res });

//   if (res.status !== 200) throw new Error("Error");

//   return res.data;
// };

// /**
//  *  Firebase Custom Token 생성 (naver)
//  * @param params
//  * @param options
//  * @returns
//  */
// export const authFirebaseCustomTokenPost = async (
//   params: AuthFirebaseCustomTokenPostRequest,
//   options?: AxiosRequestConfig
// ): Promise<any> => {
//   const api = useApi();

//   const res = await api.auth.authFirebaseCustomTokenPost(
//     { authFirebaseCustomTokenPostRequest: params },
//     options
//   );

//   console.log({ res });

//   if (res.status !== 200) throw new Error("Error");

//   return res.data;
// };

// /**
//  * 로그아웃
//  */
// export const logout = () => {
//   localStorage.clear();
//   signOut(fauth);
//   window.location.href = ["", Config.publicBasePath, "campus"].join("/");
// };
