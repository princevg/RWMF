/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("sw-toolbox.js", "runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [
        ["/app.js", "3gzfeXrrHV2kwZFEnic4b1Lwb86iq76n"],
        ["/components", "OXELrnXBxBxW5BsPdzYDfoR8fnr9z4zY"],
        ["/css", "FJECNMkGGRWdkIoNZeLqCw4GthN3J3b7"],
        ["/font", "GfnoUPK0YnDjnGeBzVAJ9EjfDiOFEh17"],
        ["/images", "RCBdejRUcPSOiK9bsG7pYdBJASYz4Bjo"],
        ["/img", "2Vq4EKktpTgJ0LjhsQgwLkOwI4NZRgCn"],
        ["/index.html", "qJzxiXZYhApKILw5qdqhhtcttwUYnvJH"],
        ["/js", "hAj0dRGkKSTOpk8BTH9T0NjtFNy4FRoN"],
        ["/manifest.json", "euBrEUv4MSQVcL4Hf2rgIT9W2wDof4Pe"],
        ["/runtime-caching.js", "kpJgVAfMPdB1t8oFte3YJUskfwRc0ECg"],
        ["/service-worker.js", "OHE4RIqCXy7jows0HKRLDZCG1DDmqcHk"],
        ["/services", "GelCqwjTgOtJfp6NXVaCHjZAyfpepm3j"],
        ["/sw-precache-config.json", "Tue8GGNQolt9TCwEXwXTWAt8FUeSb0pA"],
        ["/sw-toolbox.js", "dw4QgoSjmuKKfrPMMjBDzKW46FvsKh2u"],
        ["/components/header", "KMAxDGoJpCO1PISA5Kr39zgo9iFX71uA"],
        ["/components/home", "toPnwr5inH6ssfqzpsXBdGlf8akUYd1o"],
        ["/components/user", "ckmksDMh7kvUEnsRfzZEj4oGSnp6lrp7"],
        ["/components/header/header.controller.js", "ZbCnARq2itYPP44fDydoKpSED8tQDSVk"],
        ["/components/header/header.html", "btAuKASsS29ZqcW6zjpLgxTFBSkQjVLZ"],
        ["/components/home/home.controller.js", "MHmCYd3MNdUULlgrkXe9yOjdNKVBA8Wm"],
        ["/components/home/home.html", "Pza9MdeqNsUrrL70w6qljU4vzQXd75EG"],
        ["/components/user/forgot.controller.js", "GTPuqKgAQSK80ILxxbJ6zLVfsnXY6aEt"],
        ["/components/user/forgot.html", "ECdpImzGyLALEU1yvVKi3nvfttXCqic4"],
        ["/components/user/login.controller.js", "7oT2NUSYemUE0C4CTZhiM9P0qESqVVj7"],
        ["/components/user/login.html", "VY7IWXFAIoRBX6ltvIaIiC2gx4mCJdSI"],
        ["/components/user/register.controller.js", "9rOXMqNhsF1s2iqIJpnLe5gcXh4lXBJW"],
        ["/components/user/register.html", "jftiNOSoNtFRrrXnOq4fDcw1Uc8hDNUT"],
        ["/css/addons", "SBZQbSHug6b1uHdTKeJyd1ygxD6xVTN5"],
        ["/css/all.css", "40NK6RCBFWZ7pK9s1uNRu9vaZQHNGajE"],
        ["/css/all.min.css", "eRuwF6TH75Zr26Hz5OMuOqCE4Jl2a2zO"],
        ["/css/bootstrap.css", "4MMaq0Bl4oNvTbWNDzD2au0YPGadXxMk"],
        ["/css/bootstrap.min.css", "S6sM7tLnKv81QEvOklrUoPtYz6IoiyXB"],
        ["/css/libs", "6ouIwnUXM1t20ZE3nPBA3kIMeOxCYtb3"],
        ["/css/mdb.css", "Ikwi9SZWPplvfef9fzafqNIZPizO6L0d"],
        ["/css/mdb.min.css", "rAqaEnt1pIyIkjXzDunxgayPco05TVRW"],
        ["/css/modules", "jwbfnmHEhYDKjXk9YWQkPztHTSu4O1gf"],
        ["/css/style.css", "PMmePZWPnSjbXuYzwbrvT1cgtTZvz7Bp"],
        ["/css/style.min.css", "EgSw5AIAxuW99bJIFDk86CCJ3SNCZ4yC"],
        ["/css/addons/datatables-select.css", "hEulV3j5RelNIuhbcj0zgHr4df5RfaQD"],
        ["/css/addons/datatables-select.min.css", "qBOYbBpcn9GfTQp63iomM3KpxEyFgLHP"],
        ["/css/addons/datatables.css", "8PjgrGDRncmI04vQa3xyDvXZDzbUfedi"],
        ["/css/addons/datatables.min.css", "nTkTjnAAXV2yoQmxzWiNm7SDEGvMC7gf"],
        ["/css/addons/directives.css", "Y8TqUodf9sX20V8D9lm0WqU0Fdz2ewfO"],
        ["/css/addons/directives.min.css", "hNkQnZieaw8rz9YZCnlaJpOiJ501467P"],
        ["/css/libs/font-awesome.min.css", "6VvZkjyfhDh3M68bJtlTe8bIq5aA6Wen"],
        ["/css/libs/jquery.dataTables.min.css", "iHUQxSH8doHUdOcSGKHxK7bRz4h8t7x2"],
        ["/css/modules/animations-extended.css", "VS5NxUu8oXymqQDUIo5lUnSZTPrD6nlj"],
        ["/css/modules/animations-extended.min.css", "5APk9KCuDAZ97K8l5SFrw5iYb7OOXdiK"],
        ["/font/fa5", "RzMpIPZ7vMSE1KG9AVjl5KgkRjcRT66N"],
        ["/font/roboto", "OCPGi4AYecuJKC6f5wRH7iyrUWMj1SDe"],
        ["/font/fa5/fa-brands-400.eot", "4Yh8iYdIP7keFxBNdbGulpLXrLfdBswu"],
        ["/font/fa5/fa-brands-400.svg", "EFh2Yftuh41VPUY57X1SOWlplYdp84EX"],
        ["/font/fa5/fa-brands-400.ttf", "69W00k0UNOP0BuXzHQvA4CIQPJ7PLBvt"],
        ["/font/fa5/fa-brands-400.woff", "GyNVqS3ZWpo8pOGIzsJPQmvS4RpzdWba"],
        ["/font/fa5/fa-brands-400.woff2", "2Jv87yj7cLJmE9ASBGMSV4ZoKUJPoUmA"],
        ["/font/fa5/fa-regular-400.eot", "QSjAXD4QQ1qiWn0hxJ1VszdMCOTor2zF"],
        ["/font/fa5/fa-regular-400.svg", "4Qej1ArTdWKcGjuqL4uAeZD0Tv1gnVxP"],
        ["/font/fa5/fa-regular-400.ttf", "B3XQ8m0UxoUTROL11oWN7mb86DpIr1ME"],
        ["/font/fa5/fa-regular-400.woff", "7UbdgidbNLBDAwC6Q3WJeLxE1jGiWiOO"],
        ["/font/fa5/fa-regular-400.woff2", "tsxsqIoFLganymIQ4p2sBYPejrojQSTC"],
        ["/font/fa5/fa-solid-900.eot", "ZX0oYEcZfIbggymmRSssr4JEZ15au8Xe"],
        ["/font/fa5/fa-solid-900.svg", "8I7uuXdu162JW3PP1wPVDhE9JMeYA510"],
        ["/font/fa5/fa-solid-900.ttf", "WWOABlgiCukgs2dPJPSkVDwc4poY5Sn1"],
        ["/font/fa5/fa-solid-900.woff", "grkwHSxL781nHOET4ju5VwVp0tCG3lOd"],
        ["/font/fa5/fa-solid-900.woff2", "XbsuONs7vxSN7DdktVjEkvSV9iaSDMFO"],
        ["/font/roboto/Roboto-Bold.eot", "GE3gvJfWcAZ9hWJbXwimsYui3Axy8jAL"],
        ["/font/roboto/Roboto-Bold.ttf", "hTGQCdQRlcwhyyJ6dUyHgUdIU9CsRXod"],
        ["/font/roboto/Roboto-Bold.woff", "5c6EPJmLbnpxYwhGZhMY2HRaPxXJ1Ab2"],
        ["/font/roboto/Roboto-Bold.woff2", "PhZZAnmLZk2XPoN6rRYsBCCYKMZK1EB5"],
        ["/font/roboto/Roboto-Light.eot", "Vc1C1NCgZUkg85n6oV719gl2z5Bt9uFm"],
        ["/font/roboto/Roboto-Light.ttf", "PTzIu87T42N0GKqTOJEWsX3MP8whlvdc"],
        ["/font/roboto/Roboto-Light.woff", "8kP235SkJZFtPoe7EUbxpSI5BOWoUgZL"],
        ["/font/roboto/Roboto-Light.woff2", "GFAw3B1WFjZ35xj6JAjXV2bS8XDTrNMD"],
        ["/font/roboto/Roboto-Medium.eot", "YWIcLpt4rjhcwB4ZTz5snyX4wZwqItj8"],
        ["/font/roboto/Roboto-Medium.ttf", "bmOPhWEM536PClZwMXn6ZvjnXcqPQ6vj"],
        ["/font/roboto/Roboto-Medium.woff", "tH8C1mWXfFd7q1VkXfj0bDSPiaLv9eHg"],
        ["/font/roboto/Roboto-Medium.woff2", "MDmUyUD1fpL3I164CXcjP3ICaziLQ3Rn"],
        ["/font/roboto/Roboto-Regular.eot", "GNxXnxIphYWE1Z8IWEwo7eHel1uT9MBO"],
        ["/font/roboto/Roboto-Regular.ttf", "6FEfWwyc2rRAFoqjCdy4TbpV1W9IHsul"],
        ["/font/roboto/Roboto-Regular.woff", "Pv3Lq6QfPMKr0n0WMLJkjCfSMwld5f4X"],
        ["/font/roboto/Roboto-Regular.woff2", "BvRDycdHbIjKXljnRFOpd3xJsNx7HQvX"],
        ["/font/roboto/Roboto-Thin.eot", "M4AfSRPfhMvFPgDNQovNyqAjzCoWThl7"],
        ["/font/roboto/Roboto-Thin.ttf", "W8RZYzXQqILC6DR8miQPHHpDOJ45admi"],
        ["/font/roboto/Roboto-Thin.woff", "9qWkpecl9Xhdm1Pld7E5KeEPY8uJ0DBS"],
        ["/font/roboto/Roboto-Thin.woff2", "KmpaJVP2cVdqsapAQz5DE0xp1KC7L5vg"],
        ["/images/icons", "KkTx5eTo1SyGXdS2PMNxds3cLcIXS6zo"],
        ["/images/icons/icon-128x128.png", "nq42P46vKB5ZeUvuOq6KgiXZMYGaziJN"],
        ["/images/icons/icon-144x144.png", "0J35q6dW7OZp3bHo85H7oZiEPOldySFK"],
        ["/images/icons/icon-152x152.png", "Z32JiDR3vFWBimWnLWYi1hcuUNEyVg5l"],
        ["/images/icons/icon-192x192.png", "8R8WObuc0j1zEbk3Rahgk80S0wGeHTIc"],
        ["/images/icons/icon-384x384.png", "FmOw1YLtP7GCyYWuDvivJK0KW6CUzWa3"],
        ["/images/icons/icon-512x512.png", "akzRiyNlo1XdSOYNjRTc6neaIMMbMdzm"],
        ["/images/icons/icon-72x72.png", "BciUuojWfDyqin8VPtK5famojmsmmgQn"],
        ["/images/icons/icon-96x96.png", "hovSSfRO8BvtnA3SuFlH9hXyNFVmS42C"],
        ["/img/arrow_down-min.png", "I34e9O2vze0Q5yyp7JRhWmapRNZTZAMK"],
        ["/img/arrow_up-min.png", "zH0ScPP7fYdZ2DUQGrHgeNkH4YnV39J9"],
        ["/img/bottom-border.png", "9WSQi06RxmMqC6z8uFGrkY7KRgKJx8Sl"],
        ["/img/calender.png", "TyhMdll2row7UcH2VzlWNWISvd5knfqZ"],
        ["/img/check_act-min.png", "axaJFzpDT9x2a9cHs2q07r9N8bwSifxK"],
        ["/img/check_inact-min.png", "GAj7fDJ8FbSZ6U1mxrCcljhbqbFQhPbG"],
        ["/img/dummy.jpg", "5HngY70Wf0ndhIyDS8x4IhlyDINrzk8e"],
        ["/img/fb.png", "boi0Fk0cGz5QdwquMa9nbkwDvKTYb1EI"],
        ["/img/flags.png", "egNsDQWh46Xc2ArGvZzEcedE4aCb1TAU"],
        ["/img/inner_bg-min.png", "E7pKOGzPZTORbYZAFD76yLNfD11C4rB3"],
        ["/img/insta.png", "POwiVwLYqqgFv8zJotBwuMIt8GDtOBrE"],
        ["/img/lightbox", "RYZF68N3D2UrGUO5d7tDx2BWz3WaZ6CZ"],
        ["/img/location.png", "KHTf1VljOrRfU1y5In9i1VCRzv7wy7qN"],
        ["/img/mail-min.png", "xwaTCHRZ8yfvMVxVqMh7LJ2PrV97Oyev"],
        ["/img/map.png", "upnaBRBYPRYVMGVWcmneoDGqkrGVGDAw"],
        ["/img/overlays", "dhD8XNb9bpmPuxP1BqfNyeUQBHOdmGlj"],
        ["/img/password_min.png", "iZt0n1PirNejwuKUjPVbB8pP93ytaiZo"],
        ["/img/registration_bg.png", "3deHnhuZYcAfhnFK0J6sGTrBNMmoqEli"],
        ["/img/registration_desktop_bg.png", "1E29rnF0mvFHfbcJVPLgqO85EuG0xc4N"],
        ["/img/registration_logo.png", "LUuGczuxJLF0SYrpCOkfP0iDGaF8Ki1y"],
        ["/img/rwmf-02.png", "1kvAvYxQbazMtzyiiuSfflvXTb2zPGO8"],
        ["/img/share.png", "5SuJ1GVdApVDBobVlfZtmeRCJpiPCXPj"],
        ["/img/sidenav.jpg", "2YfYAWeLItkPxDsHEHEHK0SgyyTbMYP5"],
        ["/img/svg", "k4MYaovx3i9IlfP8fO5yy2bL72CIPFRd"],
        ["/img/ticket.jpg", "JHmlg6SnG70hq1d73GRjotz0D7OylX5a"],
        ["/img/time.png", "7hItLFcQGDNMsK10jQeJWpPeFjKqiBhk"],
        ["/img/twt.png", "qm4DYw55NOyesRCzeGDd2rLhu6JjmN2i"],
        ["/img/user-min.png", "zAYvSrgPduvLOWTyUwL2gICDw8X4yUFu"],
        ["/img/lightbox/default-skin.png", "cs8Xdu1kz2HZpySS9aXT3VjL5GFs42j8"],
        ["/img/lightbox/default-skin.svg", "siHHK5RC6I5q7gq3NvZOVik7OmV7Mp2x"],
        ["/img/lightbox/preloader.gif", "Q5qkxDQ0H4HKrERPOVMnECMzWudcsmwf"],
        ["/img/overlays/01.png", "ncZKNiDhsh3knGwf0HFmyt5F1IFhkYSy"],
        ["/img/overlays/02.png", "I6ureTkKiEUAdkFTc2wDRzTO8hnZoh2r"],
        ["/img/overlays/03.png", "31gTztFUxnUQz3Cf9qDst6vVe3RGaOR2"],
        ["/img/overlays/04.png", "1Wzm4ruvhjr0kAMmAiBuNND7RgfhkU6q"],
        ["/img/overlays/05.png", "a2fPXMBLn90bBA7CxqPDIKNj061nxGAu"],
        ["/img/overlays/06.png", "0EwsiGANDW1NwtBavK00QuJjy4c3J01L"],
        ["/img/overlays/07.png", "LLBZjVNlA7pCa7gRMZ6Rf1laF4g6xQhr"],
        ["/img/overlays/08.png", "pgw9aFNE7sVKjSAdmk9n31dhRPmDwluD"],
        ["/img/overlays/09.png", "55oGqogRMAT0rNl2kRntHhctHwkfbLjW"],
        ["/img/svg/arrow_left.svg", "br1sp8Vs1aZ7vsN9PzoVdmndawW2yrS1"],
        ["/img/svg/arrow_right.svg", "YrDmepvKDnF3W8sBLRslfErLd20I6wwS"],
        ["/img/svg/flags.png", "a8j3bU6nNuvmGdndBKuMD19u2NOZrRDt"],
        ["/js/addons", "GGAaNf0JmjHPxhQokXuxKDbPhrEuY1xv"],
        ["/js/bootstrap.js", "Le1kgaOnR88bC3F1Gw4KKXQcVR6CX56O"],
        ["/js/bootstrap.min.js", "LzsRFIYmHiHrHLWHlaHnqi79iHjnmVmm"],
        ["/js/custom.js", "kEAQBo30ty3bob7hUCSokj0cjBTfMHzH"],
        ["/js/jquery-3.4.1.min.js", "PZfPgHs12aS0JUOnUGMCYlQI8EIIdYzm"],
        ["/js/libs", "tvEtiulHc5DCaG2QNY5WLybwi8gjgPeM"],
        ["/js/main.js", "PXw39zsueBKFCHv4Q5yAJW1DbS8Z6nE3"],
        ["/js/mdb.js", "bVaynG2kOjREEsPhJCPtlV50fKGI2B9v"],
        ["/js/mdb.min.js", "jK4U3JKatgp1ffTwarou3busVo5VJQxS"],
        ["/js/modules", "8sMHuhKLeHZMKZIqnjV3pyahECiYvIht"],
        ["/js/popper.min.js", "tOo5W5DPNoSBWd0oBhb577ZtYD5KTMJq"],
        ["/js/addons/datatables-select.js", "aEUMDykvF3iddXTlJNOAyVH9Gg9XkjkQ"],
        ["/js/addons/datatables-select.min.js", "U9P7QdzkWR7CmSXF75YjgiuRSSI3ujDP"],
        ["/js/addons/datatables.js", "UHI3n8Pxvp8798xy8XKlTepfhUkK6Jxs"],
        ["/js/addons/datatables.min.js", "aBICpCCVKtocHZfB3maknihMgEDAi2bx"],
        ["/js/addons/imagesloaded.pkgd.min.js", "qpLJlXjeNBaCyPMEG2LmtpwCg2q5ON39"],
        ["/js/addons/jquery.zmd.hierarchical-display.js", "Od8rZJy36LNVlmYvAHS2nhtIswkWk83V"],
        ["/js/addons/jquery.zmd.hierarchical-display.min.js", "UHrKy51gvCZhmfsJJaAcKPFws8fGwl5W"],
        ["/js/addons/masonry.pkgd.min.js", "dTuuceEyO4PlyBud1SA04NXs9oGrZ319"],
        ["/js/addons/rating.js", "k3VOLUAmUqOzUqTs6kJowTNxXtY7r4Uu"],
        ["/js/libs/angular-animate.min.js", "noUeNhXdlsQ46MwExG1qz4MAu06ZtYtT"],
        ["/js/libs/angular-animate.min.js.map.txt", "kj12igxyogzJ8vVOcqZJztNYVIAJBVJE"],
        ["/js/libs/angular-ui-router.js", "ckaz9ivCptR1dSy4IOPd87ZpLMo8ADZO"],
        ["/js/libs/angular.min.js", "kkb3gTfWkTK4WqxTt4NFV1vOZZPThTrA"],
        ["/js/libs/bootstrap-lighthouse.js", "LpF4r0e3Rl8DsOrrAC7EH2f8ZApmGOCp"],
        ["/js/libs/clipboard.js", "vUQWrxSJQgIYw8RpH9B3sVUvr4c81uhw"],
        ["/js/libs/cookies.js", "AxKna7Dc3NVXh8F9kuz0RIEywb5bK8ma"],
        ["/js/libs/jquery.js", "5EiqEGP3AGPu4Af9bbLGSyzonbikOnxL"],
        ["/js/modules/bs-custom-file-input.js", "icDIuRN1WHHAh3hvBukIidn1rR8a7G5R"],
        ["/js/modules/chart.js", "CfnFqUcMgVzhx932z4GNBRkKktBIbDtL"],
        ["/js/modules/enhanced-modals.js", "NhEpEjnnpTtRRBvLshB0gaWjQWr946qb"],
        ["/js/modules/forms-free.js", "TJ32rZecjHEDBiMENqDNadSJp4lMJ40I"],
        ["/js/modules/jquery.easing.js", "a2NwrssHQ1De8QtMONPuxEmz3os82G9d"],
        ["/js/modules/scrolling-navbar.js", "rCiw68NIpyJvClGxxGn3qWKAfUSAtH92"],
        ["/js/modules/treeview.js", "pV8sMdvqzESGPcwKHLOvfu8X0Kp1f5LG"],
        ["/js/modules/velocity.js", "fI4SMBIGWedH5EEUSk0Ibqy2RezqarDD"],
        ["/js/modules/velocity.min.js", "nsTl7nZT68OGrwsYDdlUQKHRi6eTDlWV"],
        ["/js/modules/waves.js", "baKglJfIynRXVYWpCExjLUHfgWLGTnWr"],
        ["/js/modules/wow.js", "HJZlAb7C3YNsJzacRtOuEpye45prvIMq"],
        ["/services/appConstants.js", "khK3i76oT9MzgYFnddswrMIOI93UQOuw"],
        ["/services/authentication.service.js", "Px2K5P8w9mMrgycHzmATbKAOKgIug585"],
        ["/services/CoreService.js", "Rx8ATYj2l2iQdXvvpNpgM1v3jAZgMeTs"],
        ["/services/flash.service.js", "0yND406Mhx3jnBjkRXJrGR9DKX2lIJmB"],
        ["/services/HttpRequest.js", "om2ZhumW3F0X6ElpeDEuHpaqWPh5nS9Q"],
        ["/services/user.service.js", "z6pAVbdpPj0GBaCOD76BHhuoxvUWH5U7"]
    ]
    /* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-sw-precache-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var getCacheBustedUrl = function(url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
        'sw-precache=' + param;

    return urlWithCacheBusting.toString();
};

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
        return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var populateCurrentCacheNames = function(precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
        var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
        var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
        currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
        absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
        absoluteUrlToCacheName: absoluteUrlToCacheName,
        currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
};

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
        .split('&') // Split into an array of 'key=value' strings
        .map(function(kv) {
            return kv.split('='); // Split each 'key=value' string into a [key, value] array
        })
        .filter(function(kv) {
            return ignoreUrlParametersMatching.every(function(ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
            });
        })
        .map(function(kv) {
            return kv.join('='); // Join each [key, value] array into a 'key=value' string
        })
        .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
};


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
    return caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                return caches.delete(cacheName);
            })
        );
    });
}

self.addEventListener('install', function(event) {
    event.waitUntil(
        // Take a look at each of the cache names we expect for this version.
        Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
            return caches.open(cacheName).then(function(cache) {
                // Get a list of all the entries in the specific named cache.
                // For caches that are already populated for a given version of a
                // resource, there should be 1 entry.
                return cache.keys().then(function(keys) {
                    // If there are 0 entries, either because this is a brand new version
                    // of a resource or because the install step was interrupted the
                    // last time it ran, then we need to populate the cache.
                    if (keys.length === 0) {
                        // Use the last bit of the cache name, which contains the hash,
                        // as the cache-busting parameter.
                        // See https://github.com/GoogleChrome/sw-precache/issues/100
                        var cacheBustParam = cacheName.split('-').pop();
                        var urlWithCacheBusting = getCacheBustedUrl(
                            CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

                        var request = new Request(urlWithCacheBusting, { credentials: 'same-origin' });
                        return fetch(request).then(function(response) {
                            if (response.ok) {
                                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                                    response);
                            }

                            console.error('Request for %s returned a response status %d, ' +
                                'so not attempting to cache it.',
                                urlWithCacheBusting, response.status);
                            // Get rid of the empty cache if we can't add a successful response to it.
                            return caches.delete(cacheName);
                        });
                    }
                });
            });
        })).then(function() {
            return caches.keys().then(function(allCacheNames) {
                return Promise.all(allCacheNames.filter(function(cacheName) {
                    return cacheName.indexOf(CacheNamePrefix) === 0 &&
                        !(cacheName in CurrentCacheNamesToAbsoluteUrl);
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                }));
            });
        }).then(function() {
            if (typeof self.skipWaiting === 'function') {
                // Force the SW to transition from installing -> active state
                self.skipWaiting();
            }
        })
    );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
    self.addEventListener('activate', function(event) {
        event.waitUntil(self.clients.claim());
    });
}

self.addEventListener('message', function(event) {
    if (event.data.command === 'delete_all') {
        console.log('About to delete all caches...');
        deleteAllCaches().then(function() {
            console.log('Caches deleted.');
            event.ports[0].postMessage({
                error: null
            });
        }).catch(function(error) {
            console.log('Caches not deleted:', error);
            event.ports[0].postMessage({
                error: error
            });
        });
    }
});


self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
        var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
            IgnoreUrlParametersMatching);

        var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
        var directoryIndex = 'index.html';
        if (!cacheName && directoryIndex) {
            urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
            cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
        }

        var navigateFallback = '';
        // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
        // supported yet:
        // https://code.google.com/p/chromium/issues/detail?id=540967
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
        if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
            event.request.headers.get('accept').includes('text/html') &&
            /* eslint-disable quotes, comma-spacing */
            isPathWhitelisted([], event.request.url)) {
            /* eslint-enable quotes, comma-spacing */
            var navigateFallbackUrl = new URL(navigateFallback, self.location);
            cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
        }

        if (cacheName) {
            event.respondWith(
                // Rely on the fact that each cache we manage should only have one entry, and return that.
                caches.open(cacheName).then(function(cache) {
                    return cache.keys().then(function(keys) {
                        return cache.match(keys[0]).then(function(response) {
                            if (response) {
                                return response;
                            }
                            // If for some reason the response was deleted from the cache,
                            // raise and exception and fall back to the fetch() triggered in the catch().
                            throw Error('The cache ' + cacheName + ' is empty.');
                        });
                    });
                }).catch(function(e) {
                    console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                    return fetch(event.request);
                })
            );
        }
    }
});