import { w as attr_class, x as stringify, y as css_props } from "../../chunks/index.js";
import "clsx";
import { M as Modals } from "../../chunks/Modals.js";
import { p as page } from "../../chunks/index2.js";
function PageTransitions($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<!---->`);
    {
      {
        $$renderer2.push("<!--[!-->");
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!---->`);
  });
}
function Header($$renderer) {
  $$renderer.push(`<header class="svelte-1elxaub"><div class="background svelte-1elxaub"><div class="blur svelte-1elxaub"></div></div> <div class="row svelte-1elxaub"><div class="logo svelte-1elxaub"><a href="/" title="Inicio" class="svelte-1elxaub"><h1 class="svelte-1elxaub">Cabañas <span class="svelte-1elxaub">Ucihuen</span></h1></a></div> <p class="copy svelte-1elxaub">Enmarcadas en un verde paisaje cordillerano, dentro de un valle rodeado de montañas boscosas,
			rios, arroyos y cascadas.</p></div></header>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="svelte-jz8lnl"><div id="mobile" class="svelte-jz8lnl"><div class="divider svelte-jz8lnl"></div> <h3 class="title svelte-jz8lnl">También podés encontrarnos en</h3> <div class="content svelte-jz8lnl"><div class="col svelte-jz8lnl"><a href="https://airbnb.com" target="_blank" rel="noopener nofollower" class="airbnb svelte-jz8lnl" title="Cabañas Ucihuen en AirBnB.com"><img src="icons/airbnb.webp" alt="Cabañas Ucihuen en AirBnB.com"/></a> <h4 class="whatsapp svelte-jz8lnl">o escribirnos al</h4> <h3 class="credits svelte-jz8lnl">Desarrollo</h3> <a href="https://ucielsola.com" target="_blank" rel="noopener nofollower" class="svelte-jz8lnl">Uciel Sola</a></div> <div class="col svelte-jz8lnl"><a href="https://booking.com" target="_blank" rel="noopener nofollower" class="booking svelte-jz8lnl" title="Cabañas Ucihuen en Booking.com"><img src="icons/booking.webp" alt="Cabañas Ucihuen en Booking.com"/></a> <h4><a href="https://wa.link/hfh2e3" target="_blank" rel="noopener nofollower" class="whatsapp svelte-jz8lnl"><img src="icons/whatsapp.webp" alt="Whatsapp logo" class="svelte-jz8lnl"/>+54 9 11 3158-6242</a></h4> <h3 class="credits svelte-jz8lnl">Diseño</h3> <a href="https://www.behance.net/julietarodrigu14" target="_blank" rel="noopener nofollower" class="svelte-jz8lnl">Julieta Rodriguez</a></div></div></div> <div id="desktop" class="svelte-jz8lnl"><div class="divider svelte-jz8lnl"></div> <h3 class="title svelte-jz8lnl">También podés encontrarnos en</h3> <div class="content svelte-jz8lnl"><div class="row svelte-jz8lnl"><a href="https://airbnb.com" target="_blank" rel="noopener nofollower" class="airbnb svelte-jz8lnl" title="Cabañas Ucihuen en AirBnB.com"><img src="icons/airbnb.webp" alt="Cabañas Ucihuen en AirBnB.com"/></a> <a href="https://booking.com" target="_blank" rel="noopener nofollower" class="booking svelte-jz8lnl" title="Cabañas Ucihuen en Booking.com"><img src="icons/booking.webp" alt="Cabañas Ucihuen en Booking.com"/></a> <div class="whatsapp svelte-jz8lnl"><span>o escribirnos al</span> <span><a href="https://wa.link/hfh2e3" target="_blank" rel="noopener nofollower" class="svelte-jz8lnl"><img src="icons/whatsapp.webp" alt="Whatsapp logo" class="wa-logo svelte-jz8lnl"/>+54 9 11
							3158-6242</a></span></div></div> <div class="row svelte-jz8lnl"><div class="credit-container svelte-jz8lnl"><h3 class="credits svelte-jz8lnl">Desarrollo</h3> <a href="https://ucielsola.com" target="_blank" rel="noopener nofollower" class="svelte-jz8lnl">Uciel Sola</a></div> <div class="credit-container svelte-jz8lnl"><h3 class="credits svelte-jz8lnl">Diseño</h3> <a href="https://www.behance.net/julietarodrigu14" target="_blank" rel="noopener nofollower" class="svelte-jz8lnl">Julieta Rodriguez</a></div></div></div></div></footer>`);
}
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<nav class="svelte-1h32yp1"><div class="background svelte-1h32yp1"><a href="/" title="Inicio" class="svelte-1h32yp1">Inicio<span${attr_class("underline svelte-1h32yp1", void 0, { "active": page.url.pathname === "/" })}></span></a> <a href="/galeria" title="Galería" class="svelte-1h32yp1">Galería<span${attr_class("underline svelte-1h32yp1", void 0, { "active": page.url.pathname === "/galeria" })}></span></a></div></nav>`);
  });
}
function FabWhatsapp($$renderer, $$props) {
  let { scrolledPercentage = 0, path } = $$props;
  let limit = path === "/" ? 95 : 75;
  $$renderer.push(`<a href="https://wa.link/hfh2e3" target="_blank" rel="noopener nofollower"${attr_class(`button-wrapper ${stringify(scrolledPercentage > limit && true ? "pushed-up" : "")}`, "svelte-p3mb3v")}><img src="/images/whatsapp.png" alt="Whatsapp logo" class="wa-logo svelte-p3mb3v" title="contactanos por Whatsapp"/></a>`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    let key = data.key;
    let footerHeight = void 0;
    let scrolledPercentage = void 0;
    {
      let backdrop = function($$renderer3) {
        $$renderer3.push(`<div class="backdrop svelte-12qhfyh"></div>`);
      };
      Modals($$renderer2, { backdrop, $$slots: { backdrop: true } });
    }
    $$renderer2.push(`<!----> `);
    Header($$renderer2);
    $$renderer2.push(`<!----> <div class="nav-container svelte-12qhfyh">`);
    Nav($$renderer2);
    $$renderer2.push(`<!----></div> `);
    PageTransitions($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<main class="svelte-12qhfyh">`);
        children?.($$renderer3);
        $$renderer3.push(`<!----> `);
        css_props($$renderer3, true, { "--footer-height": footerHeight }, () => {
          FabWhatsapp($$renderer3, { scrolledPercentage, path: key.pathname });
        });
        $$renderer3.push(`</main>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
