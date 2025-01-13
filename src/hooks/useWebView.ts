export default function useWebView() {
  const isWebView = !!window.ReactNativeWebView;

  const isiOS =
    window.navigator.userAgent.match('iPad') ||
    window.navigator.userAgent.match('iPhone') ||
    window.navigator.userAgent.match('iPod');

  const isAndroid = window.navigator.userAgent.match('Android');

  const sendMessage = (type: string, params?: any) => {
    if (!window.ReactNativeWebView) return;

    window.ReactNativeWebView.postMessage(JSON.stringify({ type, params }));
  };

  return { isWebView, isiOS: !!isiOS, isAndroid: !!isAndroid, sendMessage };
}
