import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AutoComplete from "primevue/autocomplete";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Checkbox from "primevue/checkbox";
import Chips from "primevue/chips";
import ColorPicker from "primevue/colorpicker";
import Column from "primevue/column";
import ContextMenu from "primevue/contextmenu";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Fieldset from "primevue/fieldset";
import FileUpload from "primevue/fileupload";
import FullCalendar from "primevue/fullcalendar";
import InlineMessage from "primevue/inlinemessage";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import Listbox from "primevue/listbox";
import MegaMenu from "primevue/megamenu";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import OrderList from "primevue/orderlist";
import OrganizationChart from "primevue/organizationchart";
import OverlayPanel from "primevue/overlaypanel";
import Paginator from "primevue/paginator";
import Panel from "primevue/panel";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import PickList from "primevue/picklist";
import ProgressBar from "primevue/progressbar";
import Rating from "primevue/rating";
import RadioButton from "primevue/radiobutton";
import Ripple from "primevue/ripple";
import SelectButton from "primevue/selectbutton";
import Slider from "primevue/slider";
import Sidebar from "primevue/sidebar";
import SplitButton from "primevue/splitbutton";
import Steps from "primevue/steps";
import TabMenu from "primevue/tabmenu";
import TieredMenu from "primevue/tieredmenu";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Toolbar from "primevue/toolbar";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ToggleButton from "primevue/togglebutton";
import Tooltip from "primevue/tooltip";
import Tree from "primevue/tree";
import TreeTable from "primevue/treetable";
import TriStateCheckbox from "primevue/tristatecheckbox";
import ScrollPanel from "primevue/scrollpanel";
import ProgressSpinner from "primevue/progressspinner";

import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@fullcalendar/core/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "@fullcalendar/timegrid/main.min.css";
import "prismjs/themes/prism-coy.css";
import _ from "lodash";
import VueChatScroll from "vue-chat-scroll";
import Cookies from "js-cookie";
import VueClipboard from "vue-clipboard2";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(Loading);
Vue.use(VueClipboard);

Vue.use(VueChatScroll);
// DOC: https://github.com/theomessin/vue-chat-scroll

Vue.use(ToastService);
Vue.directive("tooltip", Tooltip);
Vue.directive("ripple", Ripple);

Vue.prototype.$appState = Vue.observable({ inputStyle: "outlined" });
Vue.prototype.$primevue = Vue.observable({ ripple: true });

Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, "$_", { value: _ });
Object.defineProperty(Vue.prototype, "$cookies", { value: Cookies });

Vue.component("Accordion", Accordion);
Vue.component("AccordionTab", AccordionTab);
Vue.component("AutoComplete", AutoComplete);
Vue.component("Breadcrumb", Breadcrumb);
Vue.component("Button", Button);
Vue.component("Calendar", Calendar);
Vue.component("Card", Card);
Vue.component("Carousel", Carousel);
Vue.component("Checkbox", Checkbox);
Vue.component("Chips", Chips);
Vue.component("ColorPicker", ColorPicker);
Vue.component("Column", Column);
Vue.component("ContextMenu", ContextMenu);
Vue.component("DataTable", DataTable);
Vue.component("DataView", DataView);
Vue.component("DataViewLayoutOptions", DataViewLayoutOptions);
Vue.component("Dialog", Dialog);
Vue.component("Dropdown", Dropdown);
Vue.component("Fieldset", Fieldset);
Vue.component("FileUpload", FileUpload);
Vue.component("FullCalendar", FullCalendar);
Vue.component("InlineMessage", InlineMessage);
Vue.component("InputSwitch", InputSwitch);
Vue.component("InputText", InputText);
Vue.component("InputMask", InputMask);
Vue.component("InputNumber", InputNumber);
Vue.component("Listbox", Listbox);
Vue.component("MegaMenu", MegaMenu);
Vue.component("Menu", Menu);
Vue.component("Menubar", Menubar);
Vue.component("Message", Message);
Vue.component("MultiSelect", MultiSelect);
Vue.component("OrderList", OrderList);
Vue.component("OrganizationChart", OrganizationChart);
Vue.component("OverlayPanel", OverlayPanel);
Vue.component("Paginator", Paginator);
Vue.component("Panel", Panel);
Vue.component("PanelMenu", PanelMenu);
Vue.component("Password", Password);
Vue.component("PickList", PickList);
Vue.component("ProgressBar", ProgressBar);
Vue.component("RadioButton", RadioButton);
Vue.component("Rating", Rating);
Vue.component("SelectButton", SelectButton);
Vue.component("Slider", Slider);
Vue.component("Sidebar", Sidebar);
Vue.component("SplitButton", SplitButton);
Vue.component("Steps", Steps);
Vue.component("TabMenu", TabMenu);
Vue.component("TabView", TabView);
Vue.component("TabPanel", TabPanel);
Vue.component("Textarea", Textarea);
Vue.component("TieredMenu", TieredMenu);
Vue.component("Toast", Toast);
Vue.component("Toolbar", Toolbar);
Vue.component("ToggleButton", ToggleButton);
Vue.component("Tree", Tree);
Vue.component("TreeTable", TreeTable);
Vue.component("TriStateCheckbox", TriStateCheckbox);
Vue.component("ScrollPanel", ScrollPanel);
Vue.component("ProgressSpinner", ProgressSpinner);

import Access from "./pages/Access";
import Error from "./pages/Error";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import "./permission";

import * as filters from "./filters";

// register global utility filters
Object.keys(filters).forEach((key) => {
  // eslint-disable-next-line import/namespace
  Vue.filter(key, filters[key]);
});

new Vue({
  el: "#app",
  computed: {
    ViewComponent() {
      switch (this.$route.path) {
        case "/login":
          return Login;
        case "/error":
          return Error;
        case "/access":
          return Access;
        case "/notfound":
          return NotFound;
        default:
          return App;
      }
    },
  },
  router,
  store,
  render(h) {
    return h(this.ViewComponent);
  },
});
