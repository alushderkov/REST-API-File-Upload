import { Route } from "../../config/program_settings/route_interface";
import { arrayProcessingRoute } from "./_array_processing_PUT";
import { fileCopyRoute } from "./_file_COPY";
import { fileDeleteRoute } from "./_file_DELETE";
import { fileMoveRoute } from "./_file_MOVE";
import { getProductListRoute } from "./_product_list_GET";
import { addToProductListRoute } from "./_product_list_POST";

export const routes: Array<Route> = [
  arrayProcessingRoute,
  fileCopyRoute,
  fileDeleteRoute,
  fileMoveRoute,
  getProductListRoute,
  addToProductListRoute,
];