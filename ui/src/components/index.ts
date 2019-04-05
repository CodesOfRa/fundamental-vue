import { PluginObject } from "vue";
import { PluginOptions } from "@/util/PluginOptions";

import * as ActionBar from "./ActionBar";
import * as Alert from "./Alert";
import * as Badge from "./Badge";
import * as Breadcrumb from "./Breadcrumb";
import * as BreadcrumbItem from "./BreadcrumbItem";
import * as Button from "./Button";
import * as ButtonGroup from "./ButtonGroup";
import * as Calendar from "./Calendar";
import * as Combobox from "./Combobox";
import * as Counter from "./Counter";
import * as Form from "./Form";
import * as Icon from "./Icon";
import * as Identifier from "./Identifier";
import * as Image from "./Image";
import * as InlineHelp from "./InlineHelp";
import * as Label from "./Label";
import * as Layout from "./Layout";
import * as Link from "./Link";
import * as ListGroup from "./ListGroup";
import * as Menu from "./Menu";
import * as Modal from "./Modal";
import * as Pagination from "./Pagination";
import * as Panel from "./Panel";
import * as Popover from "./Popover";
import * as SearchInput from "./SearchInput";
import * as SideNav from "./SideNav";
import * as Spinner from "./Spinner";
import * as Status from "./Status";
import * as Table from "./Table";
import * as Tabs from "./Tabs";
import * as Tile from "./Tile";
import * as TileGrid from "./TileGrid";
import * as TimePicker from "./TimePicker";
import * as Token from "./Token";

//@ts-ignore
import VueVirtualScroller from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import "../_playground/table.css";

const plugin: PluginObject<PluginOptions> = {
  install(vue) {
    vue.use(ActionBar.default);
    vue.use(Alert.default);
    vue.use(Badge.default);
    vue.use(Breadcrumb.default);
    vue.use(BreadcrumbItem.default);
    vue.use(Button.default);
    vue.use(ButtonGroup.default);
    vue.use(Calendar.default);
    vue.use(Combobox.default);
    vue.use(Counter.default);
    vue.use(Form.default);
    vue.use(Icon.default);
    vue.use(Identifier.default);
    vue.use(Image.default);
    vue.use(InlineHelp.default);
    vue.use(Label.default);
    vue.use(Layout.default);
    vue.use(Link.default);
    vue.use(ListGroup.default);
    vue.use(Menu.default);
    vue.use(Modal.default);
    vue.use(Pagination.default);
    vue.use(Panel.default);
    vue.use(Popover.default);
    vue.use(SearchInput.default);
    vue.use(SideNav.default);
    vue.use(Spinner.default);
    vue.use(Status.default);
    vue.use(Table.default);
    vue.use(Tabs.default);
    vue.use(Tile.default);
    vue.use(TileGrid.default);
    vue.use(TimePicker.default);
    vue.use(Token.default);

    // todo: is here the right place for this?
    vue.use(VueVirtualScroller);
  }
};
export default plugin;
