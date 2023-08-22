import * as Popper from "@popperjs/core";
import axios$1 from "axios";
import { mapGetters, mapActions, mapMutations, createStore } from "vuex";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, vModelText, createApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { Slide, toast } from "vue3-toastify";
window.Popper = Popper;
window.axios = axios$1;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const all = "";
const index = "";
const LabelTag_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$g = {
  name: "Label",
  data() {
    return {
      copied: ""
    };
  },
  props: {
    text: {
      type: String,
      required: false,
      default: () => {
        return "";
      }
    },
    withReveal: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      }
    }
  },
  methods: {
    copyToClipboard() {
      const tempInput = document.createElement("input");
      tempInput.value = this.text;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          this.copied = "Copied!";
          setTimeout(() => {
            this.copied = "";
          }, 3e3);
        }
      } catch (err) {
        console.error(err);
      }
      document.body.removeChild(tempInput);
    }
  },
  watch: {
    copied(newVal) {
      if (newVal) {
        this.classShow = "show";
      }
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.withReveal) {
    _push(`<div class="label text-center">`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`<span class="revealText">   ${ssrInterpolate($props.text)}</span>`);
    if ($data.copied) {
      _push(`<span class="revealTextTop">${ssrInterpolate($data.copied)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="label text-center">`);
    ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
    _push(`<span>   ${ssrInterpolate($props.text)}</span></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/LabelTag.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const LabelTag = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const Footerbar_vue_vue_type_style_index_0_scoped_5ace0594_lang = "";
const _sfc_main$f = {
  name: "Footerbar",
  components: {
    LabelTag
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LabelTag = resolveComponent("LabelTag");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-5ace0594><hr data-v-5ace0594><div class="footerTop" data-v-5ace0594><div class="row text-center" data-v-5ace0594><div class="col" data-v-5ace0594><p style="${ssrRenderStyle({ "font-weight": "100" })}" data-v-5ace0594>Get <span style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-5ace0594>in Touch. </span><i class="fa-regular fa-comments fa-beat-fade" data-v-5ace0594></i> ${ssrInterpolate("\n")}So we can talk more about...</p></div></div></div><div class="contactIcons" data-v-5ace0594>`);
  _push(ssrRenderComponent(_component_LabelTag, {
    "with-reveal": true,
    text: "lucas.elaio@gmail.com"
  }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-envelope fa-xl" data-v-5ace0594${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-envelope fa-xl" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_LabelTag, {
    "with-reveal": true,
    text: "(774) 285-2358"
  }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-mobile-screen fa-xl" data-v-5ace0594${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-mobile-screen fa-xl" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_LabelTag, {
    "with-reveal": true,
    text: "linkedin.com/in/lucas-v-azevedo"
  }, {
    icon: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-brands fa-linkedin fa-xl" data-v-5ace0594${_scopeId}></i>`);
      } else {
        return [
          createVNode("i", { class: "fa-brands fa-linkedin fa-xl" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Footerbar.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Footerbar = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-5ace0594"]]);
const ThemeSwitch_vue_vue_type_style_index_0_scoped_304ab852_lang = "";
const _sfc_main$e = {
  name: "ThemeSwitch",
  data() {
    return {
      selectedTheme: ""
    };
  },
  computed: {
    ...mapGetters("theme", ["iconClass"])
  },
  created() {
    this.selectedTheme = localStorage.getItem("selectedTheme");
    this.iconClass = localStorage.getItem("iconClass");
  },
  methods: {
    ...mapActions("theme", ["toggleTheme"])
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-1 form-check form-switch theme-switch" }, _attrs))} data-v-304ab852><input class="form-check-input toggleSpan mb-2" style="${ssrRenderStyle({ "height": "1em !important", "width": "2em !important" })}" type="checkbox" role="switch" id="themeSwitch"${ssrIncludeBooleanAttr($data.selectedTheme === "Dark") ? " checked" : ""} data-v-304ab852></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ThemeSwitch.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ThemeSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-304ab852"]]);
const Navbar_vue_vue_type_style_index_0_scoped_a493a36e_lang = "";
const _sfc_main$d = {
  name: "Navbar",
  components: {
    ThemeSwitch
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ThemeSwitch = resolveComponent("ThemeSwitch");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "w-full navbar navbar-expand-lg sticky-top" }, _attrs))} data-v-a493a36e><div class="container-fluid" data-v-a493a36e><div class="collapse navbar-collapse" id="navbarNav" data-v-a493a36e><ul class="navbar-nav" data-v-a493a36e><li class="nav-item" data-v-a493a36e><a class="nav-link" aria-current="page" href="/about" data-v-a493a36e>About</a></li><li class="nav-item" data-v-a493a36e><a class="nav-link" aria-current="page" href="/work" data-v-a493a36e>Work History</a></li></ul></div><div class="d-flex" role="search" data-v-a493a36e><ul class="navbar-nav" data-v-a493a36e><li class="nav-item" data-v-a493a36e><a href="https://www.linkedin.com/in/lucas-v-azevedo/" target="_blank" class="nav-link" data-v-a493a36e><i class="fa-brands fa-linkedin fa-lg" data-v-a493a36e></i></a></li><li class="nav-item" data-v-a493a36e><a href="#" target="_blank" class="nav-link" data-v-a493a36e><i class="fa-brands fa-square-github fa-lg" data-v-a493a36e></i></a></li><li class="nav-item d-flex align-items-center" data-v-a493a36e>`);
  _push(ssrRenderComponent(_component_ThemeSwitch, null, null, _parent));
  _push(`</li></ul></div></div></nav>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Navbar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-a493a36e"]]);
const _sfc_main$c = {
  components: {
    Navbar,
    Footerbar
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = resolveComponent("Navbar");
  const _component_Footerbar = resolveComponent("Footerbar");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<div class="container-fluid mainContainer">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footerbar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/MainComponent.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const MainComponent = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const TittleHeader_vue_vue_type_style_index_0_scoped_cca4c09a_lang = "";
const _sfc_main$b = {
  name: "TittleHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false,
      default: () => {
        return "";
      }
    },
    centered: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      }
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="${ssrRenderClass([{ "text-center": $props.centered }, "header"])}" data-v-cca4c09a><div class="title mb-1" data-v-cca4c09a>${ssrInterpolate($props.title)}</div><h5 class="subTitle" data-v-cca4c09a>${ssrInterpolate($props.subTitle)}</h5></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<hr data-v-cca4c09a><!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/TittleHeader.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TittleHeader = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-cca4c09a"]]);
const devIcons = {
  "git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "vue": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
  "jquery": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
  "php": "https://img.icons8.com/parakeet/48/php.png",
  "laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  "zendframework": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zend/zend-plain.svg",
  "cakephp": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg",
  "redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "html5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  "css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  "phpunit": "https://img.icons8.com/plasticine/100/org-unit.png",
  "jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  "jira": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "bitbucket": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  "gitlab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
};
const LanguageIconPill_vue_vue_type_style_index_0_scooped_true_lang = "";
const _sfc_main$a = {
  name: "LanguageIconPill"
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pill" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/LanguageIconPill.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const LanguageIconPill = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
function extractFieldFromJson(json, field) {
  return JSON.parse(json)[field];
}
function formatDate(date) {
  if (!date) {
    return null;
  }
  const options = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString("en-US", options);
}
function calculateMonthDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : /* @__PURE__ */ new Date();
  return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
}
function getDateFromToString(startDate, endDate) {
  const fromMonthYear = formatDate(startDate);
  const diffInMonths = calculateMonthDifference(startDate, endDate);
  if (!endDate) {
    const timeString2 = `( ${diffInMonths} months )`;
    return `From ${fromMonthYear} | Current - ${timeString2}`;
  }
  const toMonthYear = formatDate(endDate);
  if (diffInMonths >= 12) {
    const numberOfYears = Math.floor(diffInMonths / 12);
    const remainingMonths = diffInMonths % 12;
    const yearsString = numberOfYears > 1 ? `${numberOfYears} years` : `${numberOfYears} year`;
    const monthsString = remainingMonths > 1 ? `${remainingMonths} months` : `${remainingMonths} month`;
    const timeString2 = `( ${yearsString} and ${monthsString} )`;
    return `From ${fromMonthYear} | ${toMonthYear} - ${timeString2}`;
  }
  const timeString = `( ${diffInMonths} months )`;
  return `From ${fromMonthYear} | ${toMonthYear} - ${timeString}`;
}
function toastMessage(message, type, duration = 4e3, promise = new Promise((resolve, reject) => setTimeout(reject, 3e3))) {
  let standardOptions = {
    autoClose: duration,
    transition: Slide,
    theme: localStorage.getItem("selectedTheme").toLocaleLowerCase()
  };
  switch (type) {
    case "success":
      toast.success(message, standardOptions);
      break;
    case "error":
      toast.error(message, standardOptions);
      break;
    case "info":
      toast.info(message, standardOptions);
      break;
    case "warning":
      toast.warning(message, standardOptions);
      break;
    case "loading":
      toast.promise(
        promise,
        {
          pending: "Processing...",
          success: message,
          error: "Something went wrong!"
        }
      );
    default:
      toast.info(message, standardOptions);
      break;
  }
}
const CardProject_vue_vue_type_style_index_0_scoped_4742679a_lang = "";
const _sfc_main$9 = {
  name: "CardProject",
  components: {
    LanguageIconPill,
    LabelTag
  },
  data() {
    return {
      iconsUrl: devIcons,
      about: "",
      rangeString: ""
    };
  },
  mounted() {
    this.about = extractFieldFromJson(this.project.about, "about");
    this.rangeString = getDateFromToString(this.project.date_from, this.project.date_to);
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    transformImageName(imageName) {
      return imageName.toLowerCase().replace(/ /g, "_").replace(/logo.*/, "") + "_logo";
    },
    openOnNewTab(url) {
      window.open(url, "_blank");
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_LanguageIconPill = resolveComponent("LanguageIconPill");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card cardBackground" }, _attrs))} data-v-4742679a><div class="card-body" data-v-4742679a><div class="cardHeader" data-v-4742679a><div class="title mb-1" data-v-4742679a><img class="rounded" style="${ssrRenderStyle({ "float": "right", "margin": "0.3em", "cursor": "pointer" })}" width="90" height="90"${ssrRenderAttr("src", `images/${$options.transformImageName($props.project.project_name)}.jpg`)} data-v-4742679a> ${ssrInterpolate($props.project.project_name)}</div><div class="dateRange" data-v-4742679a>${ssrInterpolate($data.rangeString)}</div></div><hr data-v-4742679a><div class="description" data-v-4742679a><div class="d-flex align-items-center" data-v-4742679a>${ssrInterpolate($data.about)}</div></div><hr data-v-4742679a><div class="techList d-flex flex-wrap" data-v-4742679a><div class="d-flex align-items-center" data-v-4742679a><h6 data-v-4742679a>Thecnologies used:</h6></div><!--[-->`);
  ssrRenderList($props.project.technologies, (techDescription, techName) => {
    _push(ssrRenderComponent(_component_LanguageIconPill, { key: techName }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="mb-2" width="40" height="40"${ssrRenderAttr("src", $data.iconsUrl[techName])} data-v-4742679a${_scopeId}><p style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-4742679a${_scopeId}>${ssrInterpolate(techDescription)}</p>`);
        } else {
          return [
            createVNode("img", {
              class: "mb-2",
              width: "40",
              height: "40",
              src: $data.iconsUrl[techName]
            }, null, 8, ["src"]),
            createVNode("p", { style: { "font-size": "12px" } }, toDisplayString(techDescription), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="d-flex justify-content-end" data-v-4742679a><a${ssrRenderAttr("href", `/project_detailed/${$props.project.project_id}`)} data-v-4742679a>See work experience detailed <i class="fa-solid fa-circle-chevron-right" data-v-4742679a></i></a></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/CardProject.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CardProject = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-4742679a"]]);
const Portrait_vue_vue_type_style_index_0_scoped_ad63b979_lang = "";
const _sfc_main$8 = {
  name: "Portrait",
  props: {
    imagePath: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "portrait" }, _attrs))} data-v-ad63b979><img height="90"${ssrRenderAttr("src", $props.imagePath)} class="rounded img-fluid mx-auto d-block" data-v-ad63b979></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/Portrait.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Portrait = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-ad63b979"]]);
const PageContent_vue_vue_type_style_index_0_scoped_c717eaf6_lang = "";
const _sfc_main$7 = {
  name: "PageContent",
  components: {
    Portrait
  },
  props: {
    portrait: {
      type: String,
      required: false
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Portrait = resolveComponent("Portrait");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pageContent" }, _attrs))} data-v-c717eaf6>`);
  if (!$props.portrait) {
    _push(`<div class="row" data-v-c717eaf6><div class="col" data-v-c717eaf6>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<div class="row" data-v-c717eaf6><div class="col colBody" data-v-c717eaf6>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div><div class="col portrait" data-v-c717eaf6>`);
    _push(ssrRenderComponent(_component_Portrait, { imagePath: $props.portrait }, null, _parent));
    _push(`</div></div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/common/PageContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const PageContent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-c717eaf6"]]);
const _sfc_main$6 = {
  name: "WorkHistory",
  components: {
    CardProject,
    PageContent
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"])
  },
  created() {
    this.fetchProjects();
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageContent = resolveComponent("PageContent");
  const _component_CardProject = resolveComponent("CardProject");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageContent, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a class="nav-link" aria-current="page" href="/project_detailed/create"${_scopeId}>Cadastrar detalhes (Remover esse link depois)</a><!--[-->`);
        ssrRenderList(_ctx.projects, (project, key) => {
          _push2(ssrRenderComponent(_component_CardProject, {
            key,
            project
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("a", {
            class: "nav-link",
            "aria-current": "page",
            href: "/project_detailed/create"
          }, "Cadastrar detalhes (Remover esse link depois)"),
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.projects, (project, key) => {
            return openBlock(), createBlock(_component_CardProject, {
              key,
              project
            }, null, 8, ["project"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WorkHistory.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const WorkHistory = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "Resume",
  data() {
    return {};
  },
  components: {
    TittleHeader,
    PageContent
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TittleHeader = resolveComponent("TittleHeader");
  const _component_PageContent = resolveComponent("PageContent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TittleHeader, {
    title: "Lucas Azevedo",
    subTitle: "Software Engineer",
    centered: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_PageContent, { portrait: "/images/profile.png" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p style="${ssrRenderStyle({ "text-align": "justify" })}"${_scopeId}>Hello, I&#39;m Lucas Azevedo, a software developer passionate about the art of programming. I take pleasure in turning ideas into concrete and functional solutions through the code I write.<br${_scopeId}><br${_scopeId}>Since the beginning of my journey as a developer, I have discovered a true passion for creating complex and innovative systems through the magic of code. Throughout my professional career, I have been dedicated to delivering high-quality products, always striving for excellence in each delivery.<br${_scopeId}><br${_scopeId}> My career goals are driven by a constant pursuit of growth. I aspire to take my technical skills to the next level, acquiring knowledge in emerging technologies and expanding my skill set. Additionally, I aim to achieve a leadership position where I can both code and guide and mentor development teams. I believe that sharing my knowledge and experience will significantly contribute to the collective growth of colleagues and the team as a whole. I am always in search of challenges that allow me to grow professionally and bring innovative solutions to the market.<br${_scopeId}><br${_scopeId}> Projects that stimulate my creativity and enable me to apply my passion for coding to solve complex problems are the ones that attract me the most.<br${_scopeId}><br${_scopeId}> For me, career success is a continuous journey, and I am excited to face new challenges, learn from each experience, and make a positive impact on projects that improve people&#39;s lives. If you are looking for a dedicated, perfectionist, cautious, and passionate professional in the art of development, I am enthusiastic about joining a talented team and taking on new challenges in pursuit of mutual success.<br${_scopeId}><br${_scopeId}><br${_scopeId}><br${_scopeId}> I sincerely appreciate your attention and look forward to the opportunities for growth and collaboration that the future holds!</p>`);
      } else {
        return [
          createVNode("p", { style: { "text-align": "justify" } }, [
            createTextVNode("Hello, I'm Lucas Azevedo, a software developer passionate about the art of programming. I take pleasure in turning ideas into concrete and functional solutions through the code I write."),
            createVNode("br"),
            createVNode("br"),
            createTextVNode("Since the beginning of my journey as a developer, I have discovered a true passion for creating complex and innovative systems through the magic of code. Throughout my professional career, I have been dedicated to delivering high-quality products, always striving for excellence in each delivery."),
            createVNode("br"),
            createVNode("br"),
            createTextVNode(" My career goals are driven by a constant pursuit of growth. I aspire to take my technical skills to the next level, acquiring knowledge in emerging technologies and expanding my skill set. Additionally, I aim to achieve a leadership position where I can both code and guide and mentor development teams. I believe that sharing my knowledge and experience will significantly contribute to the collective growth of colleagues and the team as a whole. I am always in search of challenges that allow me to grow professionally and bring innovative solutions to the market."),
            createVNode("br"),
            createVNode("br"),
            createTextVNode(" Projects that stimulate my creativity and enable me to apply my passion for coding to solve complex problems are the ones that attract me the most."),
            createVNode("br"),
            createVNode("br"),
            createTextVNode(" For me, career success is a continuous journey, and I am excited to face new challenges, learn from each experience, and make a positive impact on projects that improve people's lives. If you are looking for a dedicated, perfectionist, cautious, and passionate professional in the art of development, I am enthusiastic about joining a talented team and taking on new challenges in pursuit of mutual success."),
            createVNode("br"),
            createVNode("br"),
            createVNode("br"),
            createVNode("br"),
            createTextVNode(" I sincerely appreciate your attention and look forward to the opportunities for growth and collaboration that the future holds!")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const ProjectDetailsCreate_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = {
  name: "ProjectDetailsCreate",
  data() {
    return {
      project_id: "",
      role_title: "",
      region: "",
      back_end: "",
      front_end: "",
      tools: "",
      project_highlights: "",
      other_teams_collab: "",
      modality: "",
      experience_description: "",
      squad_structure: `{'size': '','structure': ''}`
    };
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  },
  methods: {
    ...mapActions("projects", ["fetchProjects"]),
    async submitForm() {
      if (this.project_id == "" || this.project_id == null) {
        toastMessage("Fill out all the required fields", "warning");
        return false;
      }
      try {
        const back_end = this.back_end ?? "";
        const front_end = this.front_end ?? "";
        const tools = this.tools ?? "";
        let formData = {
          "project_id": this.project_id,
          "role_title": this.role_title,
          "experience_description": this.experience_description,
          "squad_structure": this.squad_structure,
          "region": this.region,
          "modality": this.modality,
          "tech_and_tools": {
            back_end,
            front_end,
            tools
          },
          "project_highlights": this.project_highlights,
          "other_teams_collab": this.other_teams_collab
        };
        toastMessage("Details saved successfully!", "loading", null, axios.post("/project_detailed", formData));
      } catch (error) {
        console.error("Error submitting form: ", error);
      }
    }
  },
  created() {
    this.fetchProjects();
  },
  mounted() {
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><form><label for="project_id" class="form-label">Project</label><select required class="form-select" id="project_id"><option selected></option><!--[-->`);
  ssrRenderList(_ctx.projects, (project) => {
    _push(`<option${ssrRenderAttr("value", project.project_id)}>${ssrInterpolate(project.project_name)}</option>`);
  });
  _push(`<!--]--></select><label for="role_title" class="form-label">Role Title</label><input required type="text" class="form-control" id="role_title"${ssrRenderAttr("value", $data.role_title)}><label for="experience_description" class="form-label">Experience description</label><textarea style="${ssrRenderStyle({ "height": "210px" })}" class="form-control richText" id="experience_description">${ssrInterpolate($data.experience_description)}</textarea><label for="squad_structure" class="form-label">Squad structure</label><textarea class="form-control" id="squad_structure">${ssrInterpolate($data.squad_structure)}</textarea><label for="modality" class="form-label">Modality</label><input type="text" class="form-control" id="modality"${ssrRenderAttr("value", $data.modality)}><label for="region" class="form-label">From where</label><input type="text" class="form-control" id="region"${ssrRenderAttr("value", $data.region)}><label for="back_end" class="form-label">Technologies: BACK-END</label><p style="${ssrRenderStyle({ "font-size": "small", "color": "gray" })}">Split using &quot;,&quot; (Foo, Bar, ...)</p><input type="text" class="form-control" id="back_end"${ssrRenderAttr("value", $data.back_end)}><label for="front_end" class="form-label">Technologies: FRON-END</label><p style="${ssrRenderStyle({ "font-size": "small", "color": "gray" })}">Split using &quot;,&quot; (Foo, Bar, ...)</p><input type="text" class="form-control" id="front_end"${ssrRenderAttr("value", $data.front_end)}><label for="tools" class="form-label">Technologies: DEV-TOOLS</label><p style="${ssrRenderStyle({ "font-size": "small", "color": "gray" })}">Split using &quot;,&quot; (Foo, Bar, ...)</p><input type="text" class="form-control" id="tools"${ssrRenderAttr("value", $data.tools)}><label for="project_highlights" class="form-label">Project Hightlights</label><input type="text" class="form-control" id="project_highlights"${ssrRenderAttr("value", $data.project_highlights)}><label for="other_team_collab" class="form-label">Other Teams Collaboration</label><input type="text" class="form-control" id="other_team_collab"${ssrRenderAttr("value", $data.other_teams_collab)}><div class="text-center mt-4"><button type="button" class="btn btn-light">Submit</button></div></form></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProjectDetails/ProjectDetailsCreate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProjectDetailsCreate = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const ProjectDetailsShow_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  name: "ProjectDetailsShow",
  data() {
    return {
      title: "",
      rangeString: ""
    };
  },
  components: {
    PageContent,
    TittleHeader
  },
  props: {
    projectDetailed: {
      type: Object,
      required: true
    }
  },
  created() {
    this.fetchProject(this.projectDetailed.project_id);
  },
  watch: {
    project(val) {
      if (val) {
        this.title = val.project_name;
        this.rangeString = getDateFromToString(val.date_from, val.date_to);
      }
    }
  },
  computed: {
    ...mapGetters("projects", ["project"])
  },
  methods: {
    ...mapActions("projects", ["fetchProject"])
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageContent = resolveComponent("PageContent");
  const _component_TittleHeader = resolveComponent("TittleHeader");
  _push(ssrRenderComponent(_component_PageContent, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="/work"${_scopeId}><i class="navigationIcon fa-solid fa-circle-chevron-left"${_scopeId}></i></a>`);
        _push2(ssrRenderComponent(_component_TittleHeader, {
          title: $data.title,
          subTitle: $data.rangeString,
          centered: true
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="roleTitle"${_scopeId2}>${ssrInterpolate($props.projectDetailed.role_title)}</span>`);
            } else {
              return [
                createVNode("span", { class: "roleTitle" }, toDisplayString($props.projectDetailed.role_title), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div class="mt-5 experienceDescription"${_scopeId}>${$props.projectDetailed.experience_description}</div>`);
      } else {
        return [
          createVNode("a", { href: "/work" }, [
            createVNode("i", { class: "navigationIcon fa-solid fa-circle-chevron-left" })
          ]),
          createVNode(_component_TittleHeader, {
            title: $data.title,
            subTitle: $data.rangeString,
            centered: true
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "roleTitle" }, toDisplayString($props.projectDetailed.role_title), 1)
            ]),
            _: 1
          }, 8, ["title", "subTitle"]),
          createVNode("div", {
            class: "mt-5 experienceDescription",
            innerHTML: $props.projectDetailed.experience_description
          }, null, 8, ["innerHTML"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProjectDetails/ProjectDetailsShow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProjectDetailsShow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const CreateLogin_vue_vue_type_style_index_0_scoped_a7cb5a09_lang = "";
const _sfc_main$2 = {
  components: {
    PageContent
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      passwordMatch: false
    };
  },
  methods: {
    async submitForm() {
      if (this.password !== this.passwordConfirmation) {
        toastMessage("Password does not match", "warning");
        return false;
      }
      try {
        let formData = {
          "name": this.name,
          "email": this.email,
          "password": this.password
        };
        toastMessage("User created successfully!", "loading", null, axios.post("/login", formData));
      } catch (error) {
        console.error("Error submitting form: ", error);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageContent = resolveComponent("PageContent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-center align-items-center mt-5" }, _attrs))} data-v-a7cb5a09>`);
  _push(ssrRenderComponent(_component_PageContent, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card cardBackground login" data-v-a7cb5a09${_scopeId}><div class="card-body" data-v-a7cb5a09${_scopeId}><div class="cardHeader" data-v-a7cb5a09${_scopeId}><div class="title mb-1 text-center fs-3" data-v-a7cb5a09${_scopeId}> Create Login </div></div><hr data-v-a7cb5a09${_scopeId}><div class="description" data-v-a7cb5a09${_scopeId}><div class="mb-2" data-v-a7cb5a09${_scopeId}><label for="name" class="form-label" data-v-a7cb5a09${_scopeId}>Name</label><input${ssrRenderAttr("value", $data.name)} type="text" class="form-control" id="name" data-v-a7cb5a09${_scopeId}></div><div class="mb-2" data-v-a7cb5a09${_scopeId}><label for="email" class="form-label" data-v-a7cb5a09${_scopeId}>Email address</label><input${ssrRenderAttr("value", $data.email)} type="email" class="form-control" id="email" placeholder="name@example.com" data-v-a7cb5a09${_scopeId}></div><label for="password" class="form-label" data-v-a7cb5a09${_scopeId}>Password</label><input${ssrRenderAttr("value", $data.password)} type="password" id="password" class="form-control" aria-describedby="passwordHelpBlock" data-v-a7cb5a09${_scopeId}><label for="passwordConfirmation" class="form-label" data-v-a7cb5a09${_scopeId}>Confirm password</label><input${ssrRenderAttr("value", $data.passwordConfirmation)} type="password" id="passwordConfirmation" class="form-control" aria-describedby="passwordHelpBlock" data-v-a7cb5a09${_scopeId}></div><div class="text-center mt-4" data-v-a7cb5a09${_scopeId}><button type="button" class="btn btn-light" data-v-a7cb5a09${_scopeId}>Submit</button></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "card cardBackground login" }, [
            createVNode("div", { class: "card-body" }, [
              createVNode("div", { class: "cardHeader" }, [
                createVNode("div", { class: "title mb-1 text-center fs-3" }, " Create Login ")
              ]),
              createVNode("hr"),
              createVNode("div", { class: "description" }, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode("label", {
                    for: "name",
                    class: "form-label"
                  }, "Name"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.name = $event,
                    type: "text",
                    class: "form-control",
                    id: "name"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.name]
                  ])
                ]),
                createVNode("div", { class: "mb-2" }, [
                  createVNode("label", {
                    for: "email",
                    class: "form-label"
                  }, "Email address"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.email = $event,
                    type: "email",
                    class: "form-control",
                    id: "email",
                    placeholder: "name@example.com"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.email]
                  ])
                ]),
                createVNode("label", {
                  for: "password",
                  class: "form-label"
                }, "Password"),
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.password = $event,
                  type: "password",
                  id: "password",
                  class: "form-control",
                  "aria-describedby": "passwordHelpBlock"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.password]
                ]),
                createVNode("label", {
                  for: "passwordConfirmation",
                  class: "form-label"
                }, "Confirm password"),
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.passwordConfirmation = $event,
                  type: "password",
                  id: "passwordConfirmation",
                  class: "form-control",
                  "aria-describedby": "passwordHelpBlock"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.passwordConfirmation]
                ])
              ]),
              createVNode("div", { class: "text-center mt-4" }, [
                createVNode("button", {
                  type: "button",
                  onClick: ($event) => $options.submitForm(),
                  class: "btn btn-light"
                }, "Submit", 8, ["onClick"])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Login/CreateLogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CreateLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a7cb5a09"]]);
const _sfc_main$1 = {
  components: {
    PageContent
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions("user", ["setLoggedUser"]),
    ...mapMutations("user", ["setUserName", "setUserEmail"]),
    async submitForm() {
      let formData = {
        "email": this.email,
        "password": this.password
      };
      axios.post("/authenticate", formData).then((response) => {
        toastMessage("Logged in successfully!", "success");
        setTimeout(() => {
          this.setUserName(response.data.success.name);
          this.setUserEmail(response.data.success.email);
        }, 3e3).then(() => {
          window.location.href = "/about";
        });
      }).catch((error) => {
        const errorMessage = error.response.data.error;
        toastMessage(errorMessage, "error");
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageContent = resolveComponent("PageContent");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-center align-items-center mt-5" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_PageContent, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="card cardBackground login"${_scopeId}><div class="card-body"${_scopeId}><div class="description"${_scopeId}><div class="mb-2"${_scopeId}><label for="email" class="form-label"${_scopeId}>Email address</label><input${ssrRenderAttr("value", $data.email)} type="email" class="form-control" id="email" placeholder="name@example.com"${_scopeId}></div><label for="password" class="form-label"${_scopeId}>Password</label><input${ssrRenderAttr("value", $data.password)} type="password" id="password" class="form-control" aria-describedby="passwordHelpBlock"${_scopeId}></div><div class="text-center mt-4"${_scopeId}><button type="button" class="btn btn-light"${_scopeId}>Login <i class="fa-solid fa-arrow-right-to-bracket"${_scopeId}></i></button></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "card cardBackground login" }, [
            createVNode("div", { class: "card-body" }, [
              createVNode("div", { class: "description" }, [
                createVNode("div", { class: "mb-2" }, [
                  createVNode("label", {
                    for: "email",
                    class: "form-label"
                  }, "Email address"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => $data.email = $event,
                    type: "email",
                    class: "form-control",
                    id: "email",
                    placeholder: "name@example.com"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.email]
                  ])
                ]),
                createVNode("label", {
                  for: "password",
                  class: "form-label"
                }, "Password"),
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.password = $event,
                  type: "password",
                  id: "password",
                  class: "form-control",
                  "aria-describedby": "passwordHelpBlock"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.password]
                ])
              ]),
              createVNode("div", { class: "text-center mt-4" }, [
                createVNode("button", {
                  type: "button",
                  onClick: ($event) => $options.submitForm(),
                  class: "btn btn-light"
                }, [
                  createTextVNode("Login "),
                  createVNode("i", { class: "fa-solid fa-arrow-right-to-bracket" })
                ], 8, ["onClick"])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Login/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const NotFound_vue_vue_type_style_index_0_scoped_0e55d33b_lang = "";
const _sfc_main = {
  props: {
    errorMessage: {
      type: String,
      required: false,
      default: () => {
        return "";
      }
    }
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="backButton" data-v-0e55d33b><a href="#" data-v-0e55d33b><i class="navigationIcon fa-solid fa-circle-chevron-left" data-v-0e55d33b></i></a></div><div class="notFoundPage" data-v-0e55d33b><div class="content" data-v-0e55d33b><span data-v-0e55d33b>404</span><hr data-v-0e55d33b><p class="subTitle" data-v-0e55d33b>${ssrInterpolate($props.errorMessage ?? "Sorry, not found!")}</p></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0e55d33b"]]);
const state$2 = {
  selectedTheme: "Light",
  iconClass: "fa-solid fa-sun"
};
const mutations$2 = {
  setSelectedTheme(state2, selectedTheme) {
    state2.selectedTheme = selectedTheme;
    localStorage.setItem("selectedTheme", selectedTheme);
  },
  setIconClass(state2, iconClass) {
    state2.iconClass = iconClass;
    localStorage.setItem("iconClass", iconClass);
  }
};
const actions$2 = {
  toggleTheme({ commit, dispatch }) {
    commit("setSelectedTheme", localStorage.getItem("selectedTheme") === "Light" ? "Dark" : "Light");
    commit("setIconClass", localStorage.getItem("selectedTheme") === "Light" ? "fa-solid fa-sun" : "fa-solid fa-cloud-moon");
    dispatch("setTheme");
  },
  setTheme({ commit }) {
    const themeDiv = document.getElementById("app");
    const removeClass = localStorage.getItem("selectedTheme") === "Light" ? "darkTheme" : "lightTheme";
    const addClass = localStorage.getItem("selectedTheme") === "Light" ? "lightTheme" : "darkTheme";
    commit("setIconClass", localStorage.getItem("selectedTheme") === "Light" ? "fa-solid fa-sun" : "fa-solid fa-cloud-moon");
    themeDiv.classList.remove(removeClass);
    themeDiv.classList.add(addClass);
  }
};
const getters$2 = {
  selectedTheme(state2) {
    return state2.selectedTheme;
  },
  iconClass(state2) {
    return state2.iconClass;
  }
};
const theme = {
  namespaced: true,
  state: state$2,
  mutations: mutations$2,
  actions: actions$2,
  getters: getters$2
};
const state$1 = {
  projects: [],
  project: {}
};
const mutations$1 = {
  setProjects(state2, projects2) {
    state2.projects = projects2;
  },
  setProject(state2, project) {
    state2.project = project;
  }
};
const actions$1 = {
  fetchProjects({ commit }) {
    axios.get("/projects").then((response) => {
      commit("setProjects", response.data);
    }).catch((error) => {
      console.error(error);
    });
  },
  fetchProject({ commit }, id) {
    axios.get(`/projects/${id}`).then((response) => {
      commit("setProject", response.data);
    }).catch((error) => {
      console.error(error);
      return;
    });
  }
};
const getters$1 = {
  projects(state2) {
    return state2.projects;
  },
  project(state2) {
    return state2.project;
  }
};
const projects = {
  namespaced: true,
  state: state$1,
  mutations: mutations$1,
  actions: actions$1,
  getters: getters$1
};
const state = {
  userName: "",
  userEmail: ""
};
const mutations = {
  setUserName(state2, userName) {
    state2.userName = userName;
    localStorage.setItem("userName", userName);
  },
  setUserEmail(state2, userEmail) {
    state2.userEmail = userEmail;
    localStorage.setItem("userEmail", userEmail);
  }
};
const actions = {
  setLoggedUser({ commit }) {
    commit("setUserName", localStorage.getItem("setUserName"));
    commit("setUserEmail", localStorage.getItem("setUserEmail"));
  }
};
const getters = {
  userName(state2) {
    return state2.userName;
  },
  userEmail(state2) {
    return state2.userName;
  }
};
const user = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
const app = createApp();
app.component("main-component", MainComponent);
app.component("navbar", Navbar);
app.component("about", About);
app.component("tittle-header", TittleHeader);
app.component("page-content", PageContent);
app.component("portrait", Portrait);
app.component("footerbar", Footerbar);
app.component("label-tag", LabelTag);
app.component("work-history", WorkHistory);
app.component("card-project", CardProject);
app.component("language-icon-pill", LanguageIconPill);
app.component("theme-switch", ThemeSwitch);
app.component("project-details-create", ProjectDetailsCreate);
app.component("project-details-show", ProjectDetailsShow);
app.component("not-found", NotFound);
app.component("create-login", CreateLogin);
app.component("login", Login);
const store = createStore({
  modules: {
    user,
    theme,
    projects
  }
});
store.dispatch("theme/setTheme");
app.use(store);
app.mount("#app");
