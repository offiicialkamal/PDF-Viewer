"use strict";
(() => {
  const editorManager = acode.require("editorMnager");
  const sideBarApps = acode.require("sidebarApps");
  const SideButton = acode.require("sideButton");

  var e = {
    id: "offiicialkamal.pdfViewer",
  };

  class managerFunctions {
    #currentFile() {
      return editorManager.activeFile;
    }
  }

  class eventsHandler {}

  class pdfViewer {
    constructor() {}
    async init() {
      editorManager.on("switch-file", () => {});
    }

    async destroy() {}
  }

  if (window.acode) {
    let i = new pdfViewer();
    acode.setPluginInit(
      e.id,
      async (n, o, { cacheFileUrl: s, cacheFile: d }) => {
        n.endsWith("/") || (n += "/");
        i.baseUrl = n;
        await i.init(o, d, s);
      }
    );
    acode.setPluginUnmount(e.id, () => {
      i.destroy();
    });
  }
})();
