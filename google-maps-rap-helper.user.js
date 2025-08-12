// ==UserScript==
// @name         Google Maps RAP Helper
// @namespace    https://github.com/gncnpk/google-maps-rap-helper
// @version      0.0.1
// @description  Provides enhancements to the Report a Problem workflow on Google Maps.
// @author       Gavin Canon-Phratsachack (https://github.com/gncnpk)
// @match        https://www.google.com/local/place/rap/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com/maps
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
    .bXBVC {
      width: auto !important;
    }
    .VrVhlb {
      padding: 5px 0 !important;
    }
    .oUMFGb {
      padding-bottom: 0 !important;
    }
  `;
    document.head.appendChild(style);

    function removeClutteredElements() {
        Array.from(document.getElementsByClassName("oUMFGb")[0].children).slice(0,2).forEach((e) => {e.style = "display:none;"})
        document.getElementsByClassName("oUMFGb")[3].children[0].style = "display: none;"
        document.getElementsByClassName("oUMFGb")[4].children[0].style = "display: none;"
    }
})();
