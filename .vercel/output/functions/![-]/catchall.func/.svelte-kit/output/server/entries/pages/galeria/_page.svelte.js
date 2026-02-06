import { J as sanitize_props, K as rest_props, N as attributes, z as clsx, O as slot, P as bind_props, F as attr, Q as ensure_array_like, w as attr_class, G as head } from "../../../chunks/index.js";
import { m as ssr_context, p as fallback } from "../../../chunks/context.js";
import "clsx";
import { n as nextTick, S as Swiper$1 } from "../../../chunks/swiper.min.js";
import { getDocument } from "ssr-window";
import { m as modals } from "../../../chunks/Modals.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
async function tick() {
}
function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr("data-swiper-autoplay")) {
      delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
    }
    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit("autoplay");
      } else {
        stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running) run();
      else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }
  function start() {
    if (typeof timeout !== "undefined") return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit("autoplayStart");
    run();
    return true;
  }
  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === "undefined") return false;
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    swiper.autoplay.running = false;
    emit("autoplayStop");
    return true;
  }
  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ["transitionend", "webkitTransitionEnd"].forEach((event) => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }
  function onVisibilityChange() {
    const document = getDocument();
    if (document.visibilityState === "hidden" && swiper.autoplay.running) {
      pause();
    }
    if (document.visibilityState === "visible" && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }
  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      pause();
    }
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }
  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }
    swiper.autoplay.paused = false;
    run();
  }
  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on("mouseenter", onMouseEnter);
      swiper.$el.on("mouseleave", onMouseLeave);
    }
  }
  function detachMouseEvents() {
    swiper.$el.off("mouseenter", onMouseEnter);
    swiper.$el.off("mouseleave", onMouseLeave);
  }
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener("visibilitychange", onVisibilityChange);
      attachMouseEvents();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on("touchEnd", () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    if (swiper.autoplay.running) {
      stop();
    }
    const document = getDocument();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined") target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__) target[key] = src[key];
      else extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params = {}) {
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames = "") {
  const classes = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes.forEach((c) => {
    if (unique.indexOf(c) < 0) unique.push(c);
  });
  return unique.join(" ");
}
const paramsList = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "_virtual",
  "zoom"
];
function getParams(obj = {}) {
  const params = {
    on: {}
  };
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  Object.keys(obj).forEach((key) => {
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true) params[key] = {};
    if (params[key] === false) delete params[key];
  });
  return {
    params,
    passedParams,
    rest
  };
}
function initSwiper(swiperParams) {
  return new Swiper$1(swiperParams);
}
function Swiper($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["swiper", "class"]);
  $$renderer.component(($$renderer2) => {
    let className = fallback($$props["class"], void 0);
    let containerClasses = "swiper";
    let swiperInstance = null;
    let paramsData;
    let swiperParams;
    let restProps;
    let virtualData = { slides: [] };
    function swiper() {
      return swiperInstance;
    }
    const setVirtualData = (data) => {
      virtualData = data;
      tick().then(() => {
        swiperInstance.$wrapperEl.children(".swiper-slide").each((el) => {
          if (el.onSwiper) el.onSwiper(swiperInstance);
        });
        swiperInstance.updateSlides();
        swiperInstance.updateProgress();
        swiperInstance.updateSlidesClasses();
        if (swiperInstance.lazy && swiperInstance.params.lazy.enabled) {
          swiperInstance.lazy.load();
        }
      });
    };
    const calcParams = () => {
      paramsData = getParams($$restProps);
      swiperParams = paramsData.params;
      paramsData.passedParams;
      restProps = paramsData.rest;
    };
    calcParams();
    const onBeforeBreakpoint = () => {
    };
    swiperParams.onAny = (event, ...args) => {
    };
    Object.assign(swiperParams.on, {
      _beforeBreakpoint: onBeforeBreakpoint,
      _containerClasses(_swiper, classes) {
        containerClasses = classes;
      }
    });
    swiperInstance = initSwiper(swiperParams);
    if (swiperInstance.virtual && swiperInstance.params.virtual.enabled) {
      const extendWith = {
        cache: false,
        renderExternal: (data) => {
          setVirtualData(data);
          if (swiperParams.virtual && swiperParams.virtual.renderExternal) {
            swiperParams.virtual.renderExternal(data);
          }
        },
        renderExternalUpdate: false
      };
      extend(swiperInstance.params.virtual, extendWith);
      extend(swiperInstance.originalParams.virtual, extendWith);
    }
    onDestroy(() => {
      if (typeof window !== "undefined" && swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.destroy(true, false);
      }
    });
    $$renderer2.push(`<div${attributes({
      class: clsx(uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`)),
      ...restProps
    })}><!--[-->`);
    slot($$renderer2, $$props, "container-start", {});
    $$renderer2.push(`<!--]--> `);
    if (needsNavigation(swiperParams)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="swiper-button-prev"></div> <div class="swiper-button-next"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (needsScrollbar(swiperParams)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="swiper-scrollbar"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (needsPagination(swiperParams)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="swiper-pagination"></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="swiper-wrapper"><!--[-->`);
    slot($$renderer2, $$props, "wrapper-start", {});
    $$renderer2.push(`<!--]--> <!--[-->`);
    slot($$renderer2, $$props, "default", { virtualData });
    $$renderer2.push(`<!--]--> <!--[-->`);
    slot($$renderer2, $$props, "wrapper-end", {});
    $$renderer2.push(`<!--]--></div> <!--[-->`);
    slot($$renderer2, $$props, "container-end", {});
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { class: className, swiper });
  });
}
function Swiper_slide($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["zoom", "virtualIndex", "class"]);
  $$renderer.component(($$renderer2) => {
    let slideData;
    let zoom = fallback($$props["zoom"], void 0);
    let virtualIndex = fallback($$props["virtualIndex"], void 0);
    let className = fallback($$props["class"], void 0);
    let slideClasses = "swiper-slide";
    onDestroy(() => {
      return;
    });
    slideData = {
      isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
      isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
      isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
      isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
      isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
    };
    $$renderer2.push(`<div${attributes({
      class: clsx(uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`)),
      "data-swiper-slide-index": virtualIndex,
      ...$$restProps
    })}>`);
    if (zoom) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="swiper-zoom-container"${attr("data-swiper-zoom", typeof zoom === "number" ? zoom : void 0)}><!--[-->`);
      slot($$renderer2, $$props, "default", { data: slideData });
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      slot($$renderer2, $$props, "default", { data: slideData });
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { zoom, virtualIndex, class: className });
  });
}
function SliderGaleria($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      url = void 0,
      sendClick = () => {
      },
      handleClick = (event) => {
        url = event.target.src;
        sendClick();
      },
      items,
      type,
      delay
    } = $$props;
    $$renderer2.push(`<div id="swiper-container" class="svelte-1qjkp7u">`);
    Swiper($$renderer2, {
      modules: [Autoplay],
      autoplay: { disableOnInteraction: false, pauseOnMouseEnter: true },
      loop: true,
      speed: 900,
      centeredSlides: true,
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: { 1024: { slidesPerView: 2.3, spaceBetween: 20 } },
      children: ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(items);
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let item = each_array[i];
          Swiper_slide($$renderer3, {
            "data-swiper-autoplay": delay,
            children: ($$renderer4) => {
              $$renderer4.push(`<div${attr_class(clsx(type), "svelte-1qjkp7u")}><img${attr("data-i", i)}${attr("loading", i > 3 ? "lazy" : "")}${attr("id", item.id)}${attr("src", item.src)}${attr("alt", item.alt)} class="svelte-1qjkp7u"/></div>`);
            },
            $$slots: { default: true }
          });
        }
        $$renderer3.push(`<!--]-->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { url });
  });
}
function ModalImg($$renderer, $$props) {
  let { isOpen, src } = $$props;
  if (isOpen) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="modal svelte-1wqdgeo"><div class="contents svelte-1wqdgeo"><img${attr("src", src)} alt="Cabañas Ucihuen" class="svelte-1wqdgeo"/></div></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let url = void 0;
    function testImg() {
      modals.open(ModalImg, { src: url });
    }
    const getPhotos = (type, cab) => {
      let quant;
      const arr = [];
      if (type === "ext") {
        quant = 6;
        for (let i = 1; i <= quant; i++) {
          arr.push({
            src: `https://ik.imagekit.io/ucihuen/${type}/ucihuen_${type}_${i}.webp`,
            alt: `${type}erior`,
            id: i - 1
          });
        }
        return arr;
      }
      quant = cab === "cab_2" ? 6 : 8;
      for (let i = 1; i <= quant; i++) {
        arr.push({
          src: `https://ik.imagekit.io/ucihuen/${type}/${cab}/ucihuen_${cab}_${type}_${i}.webp`,
          alt: `${type}erior`,
          id: i - 1
        });
      }
      return arr;
    };
    let exterior = getPhotos("ext", null);
    let cab_1 = getPhotos("int", "cab_1");
    let cab_2 = getPhotos("int", "cab_2");
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1kp47hm", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Galería - Cabañas Ucihuen</title>`);
        });
        $$renderer4.push(`<meta property="og:title" content="Galería - Cabañas Ucihuen"/>`);
      });
      $$renderer3.push(`<section class="svelte-1kp47hm"><article id="cab-1"><h3 class="svelte-1kp47hm">Cabaña 7 Pasajeros</h3> <h4 class="svelte-1kp47hm">2 HABITACIONES | LIVING-COMEDOR | COCINA | BAÑO</h4> <div class="container svelte-1kp47hm">`);
      SliderGaleria($$renderer3, {
        items: cab_1,
        type: "slide",
        delay: 2300,
        sendClick: () => testImg(),
        get url() {
          return url;
        },
        set url($$value) {
          url = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></article> <article id="cab-2"><h3 class="svelte-1kp47hm">Cabaña 4 Pasajeros</h3> <h4 class="svelte-1kp47hm">1 HABITACIÓN | COCINA-COMEDOR | LIVING CON FUTONES | BAÑO</h4> <div class="container svelte-1kp47hm">`);
      SliderGaleria($$renderer3, {
        items: cab_2,
        type: "slide",
        delay: 2400,
        sendClick: () => testImg(),
        get url() {
          return url;
        },
        set url($$value) {
          url = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></article> <article><h3 class="svelte-1kp47hm">Exteriores</h3> <h4 class="svelte-1kp47hm">PATIO EN EL PREDIO | ESTACIONAMIENTO | PARRILLA</h4> <div class="container last svelte-1kp47hm">`);
      SliderGaleria($$renderer3, {
        items: exterior,
        type: "slide",
        delay: 2500,
        sendClick: () => testImg(),
        get url() {
          return url;
        },
        set url($$value) {
          url = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></article></section>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
