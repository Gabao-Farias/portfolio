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
