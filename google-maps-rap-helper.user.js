// ==UserScript==
// @name         Google Maps RAP Helper
// @namespace    https://github.com/gncnpk/google-maps-rap-helper
// @version      0.0.2
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
      min-width: 660px !important;
    }
    .VrVhlb {
      padding: 7px 0 !important;
    }
    .oUMFGb {
      padding-bottom: 0 !important;
    }
    .F1scXd {
      padding-top: 0 !important;
    }
    .Fr7WSc {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }
    .d8o5Xb.PE43zc {
      display: none !important;
    }
    .VfPpkd-LgbsSe.ksBjEc.lKxP2d.LQeN7.nbyAjc {
      min-height: 0 !important;
    }
    .VfPpkd-fmcmS-yrriRe-OWXEXe-INsAgc {
      height: 42px !important;
    }
    .NBJ1Qd {
      margin: auto 15px !important;
    }
    .lY28cc {
      height: 42px !important;
    }
    .VrVhlb.Ia4Txd {
      padding: 0 !important;
    }
    .VrVhlb.aEENkc {
      padding: 0 !important;
      display: inline-flex !important;
    }
    .M4WCbd {
      padding-top: 14px !important;
    }
    .VfPpkd-NLUYnc-V67aGc.VfPpkd-NLUYnc-V67aGc-OWXEXe-TATcMc-KLRBe {
      padding-top: 5px !important;
    }
    .VfPpkd-fmcmS-yrriRe-W0vJo-fmcmS.VfPpkd-fmcmS-yrriRe-W0vJo-fmcmS-OWXEXe-Rfh2Tc-EglORb {
      margin-top: -5px;
      margin-bottom: 6px;
    }
  `;
    document.head.appendChild(style);

    function removeClutteredElements() {
        Array.from(document.getElementsByClassName("oUMFGb")[0].children).slice(0, 2).forEach((e) => {
            e.style = "display:none;"
        });
        Array.from(document.getElementsByClassName("oUMFGb")).slice(3, 6).forEach((e) => {
            e.children[0].style = "display:none;"
        });
        Array.from(document.getElementsByClassName("oUMFGb")[5].children[1].children).slice(0, 2).forEach((e) => {
            e.style = "display:none;"
        });
        document.getElementsByClassName("VfPpkd-fmcmS-yrriRe-W0vJo-RWgCYc")[1].style = "display: none;";
        document.getElementsByClassName("VfPpkd-LgbsSe ksBjEc lKxP2d LQeN7 nbyAjc")[0].className = "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe LQeN7 ZY937 s73B3c wF1tve Q8G3mf";
    }

    function showAllFields() {
        document.getElementsByClassName("vIDuvd IXetx")[0].click()

    }

    function compactElements() {
        let claimBusinessJSController = document.getElementsByClassName("VrVhlb Ia4Txd")[0].children[0];
        document.getElementsByClassName("VrVhlb aEENkc")[0].appendChild(claimBusinessJSController)
        claimBusinessJSController.style = "margin-left: 5px";
    }
    addEventListener("load", () => {
        if (window.location.href.includes("addaplace")) {
            removeClutteredElements();
            showAllFields();
            compactElements();
        }
    })
})();
