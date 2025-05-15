export const openInNewTab = (url: string) => {
  if (window) {
    window.open();

    const windowOpened = window.open(url, "_blank");

    if (windowOpened) {
      windowOpened.focus();
    }
  }
};

export const scrollToID = (id: string) => {
  if (document) {
    const idView = document.getElementById(id);

    if (idView) {
      idView.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export const getPlatform = () => {
  const userAgent = navigator.userAgent || String(navigator.vendor);

  if (/windows phone/i.test(userAgent)) return "Windows Phone";
  if (/android/i.test(userAgent)) return "Android";
  if (/iPad|iPhone|iPod/.test(userAgent)) return "iOS";
  if (/Macintosh/.test(userAgent)) return "macOS";
  if (/Windows/.test(userAgent)) return "Windows";
  if (/Linux/.test(userAgent)) return "Linux";

  return "Unknown";
};
