import {Route} from "../Route";
import { arrayProcessingRoute } from "./_array_processing_PUT";
import { fileCopyRoute } from "./_file_COPY";
import { fileDeleteRoute } from "./_file_DELETE";
import { fileMoveRoute } from "./_file_MOVE";
import { getProductListRoute } from "./_product_list_GET";
import { addToProductListRoute } from "./_product_list_POST";
import { numbersProcessingRoute } from "./_set_of_numbers_POST";
import { sortTownsRoute } from "./_sorted_towns_GET";
import { getStringRoute } from "./_string1_processing_GET";
import { updateStringRoute } from "./_string2_processing_PUT";

export const routes: Array<Route> = [
  arrayProcessingRoute,
  fileCopyRoute,
  fileDeleteRoute,
  fileMoveRoute,
  getProductListRoute,
  addToProductListRoute,
  numbersProcessingRoute,
  sortTownsRoute,
  getStringRoute,
  updateStringRoute
];