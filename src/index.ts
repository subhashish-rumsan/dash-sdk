import { Base } from "./base";
import { Posts } from "./posts";
import { applyMixins } from "./utils";

class DashLogistics extends Base {}
interface DashLogistics extends Posts {}

applyMixins(DashLogistics, [Posts]);

export default DashLogistics;
