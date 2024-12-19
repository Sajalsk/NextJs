// aws s3 signed url
export const GET_SIGNED_URL = "api/master/s3/signed-url";
export const DOWNLOAD_FILE_FROM_S3_URL = "api/master/s3/download-url";

// auth
export const LOGIN = "api/auth/login";
export const LOGOUT = "api/auth/logout";
export const SEND_FORGOT_PASSWORD_LINK = "api/auth/sendMail";
export const VERIFY_FORGOT_PASSWORD_TOKEN = "api/auth/verify-token";
export const RESET_PASSWORD = "api/auth/forgot-password";

// devices
export const ADD_DEVICE = "api/master/device";
export const GET_FILTER_SEARCH_DEVICE = "api/master/device/v1/search";
export const GET_CONTROLLERS_LIST = "api/master/device/list-controllers";
export const GET_BIOREACTORS_LIST = "api/master/device/list-bioreactors";
export const GET_DEVICE_BY_ID = "api/master/device";
export const GET_DEVICE_DETAIL = "api/master/device/detail";

// cells
export const ADD_CELL = "api/master/cells";
export const GET_FILTER_SEARCH_CELL = "api/master/cells/v1/search";
export const GET_MASTER_LIST_CELLS = "api/master/commercial-cells/list";
export const GET_SOURCE_LIST_CELLS = "api/master/cell-sources/list";
export const GET_SPECIES_LIST_CELLS = "api/master/cell-species/list";
export const GET_TYPE_LIST_CELLS = "api/master/cell-type/list";
export const GET_CELL_BY_ID = "api/master/commercial-cells";
export const GET_DEVICE_MANUFACTURER_LIST =
  "api/master/device-manufacturer/list";
export const GET_CELL_LIST = "api/master/cells/list";
export const GET_NON_COMMERCIAL_CELL_BY_ID = "api/master/cells";
export const GET_CELL_TYPE_LIST = "api/master/cell-type/list";

// medium
export const ADD_MEDIUM = "api/master/medium";
export const GET_FILTER_SEARCH_MEDIUM = "api/master/medium/v1/search";
export const GET_MASTER_LIST_MEDIUM = "api/master/medium/dataset";
export const GET_MEDIUM_BY_ID = "api/master/medium";

// material
export const ADD_MATERIAL = "api/master/material";
export const GET_FILTER_SEARCH_MATERIAL = "api/master/material/v1/search";
export const GET_MASTER_LIST_MATERIAL = "api/master/material/dataset";
export const GET_MATERIAL_BY_ID = "api/master/material";
export const GET_CHECK_BOX_LIST = "api/master/material-option/list";

//Facility
export const GET_FILTER_SEARCH_FACILITY = "api/master/facility/v1/search";
export const GET_AVAILABLE_DEVICE_FACILITY = "api/master/device/list";
export const SAVE_DESIGN_FACILITY = "api/master/facility";
export const GET_FACILITY_LIST = "api/master/facility/list";
export const GET_FACILITY_BY_ID = "api/master/facility";
export const GET_ACTIVE_DEVICE_FACILITY = "api/master/facility/active-bio";

// Protocols
export const GET_FILTER_SEARCH_PROTOCOLS = "api/master/protocol/v1/search";
export const GET_MASTER_LIST_PROTOCOLS = "api/master/protocol/list";
export const GET_PROTOCOL_BY_ID = "api/master/protocol";
export const ADD_PROTOCOL = "api/master/protocol";
export const GET_MASTER_LIST_MATERIAL_PROTOCOL = "api/master/material/list";
export const GET_MASTER_LIST_MEDIUM_PROTOCOL = "api/master/medium/list";
export const GET_PAT_LIST = "api/master/device/list-pat";

// Batches
export const ADD_BATCH = "api/master/batch";
export const GET_BATCH_BY_ID = "api/master/batch";
export const GET_FILTER_SEARCH_BATCH = "api/master/batch/v1/search";
export const GET_BATCH_BY_PROTOCOL_ID = "api/master/batch";
export const GET_ALL_BATCHES = "api/master/data-warehouse/get-all-batches";

// Batch Actions
export const BATCH_ACTION_UPLOAD_IMAGES = "api/master/batch/upload-image";
export const BATCH_ACTION_GET_SEED_TRAIN =
  "api/master/batch/list/seed-train-stage";
export const BATCH_ACTION_GET_MEDIUM_ID = "api/master/medium/list";
export const BATCH_ACTION_ADD_MANUAL_DATA = "api/analytical/batch/manual-data";
export const BATCH_ACTION_ADD_NOTES = "api/master/batch/notes-image-upload";
export const BATCH_ACTION_GET_NOTE_DATA =
  "api/master/batch/notes-image-upload/search-notes";
export const BATCH_ACTION_ADD_MEDIUM_DAT =
  "api/master/batch/manual/medium-data";
export const GET_BATCH_BY_ID_STAGE = "api/master/batch";
export const GET_BATCH_BY_PROTOCOL = "api/master/batch";
export const PUT_BATCHS = "api/master/batch";
export const GET_PAT_DEVICES = "api/master/batch/pat-data";
export const INTEGRATE_PAT_DATA = "api/analytical/batch/integrate-pat-data";

// Dashbaord
export const GET_RUNTIME = "api/analytical/runtime";
export const GET_CELL_MASS = "api/analytical/cellMass";
export const GET_CELL_COST = "api/analytical/cellCost";
export const GET_WATER_CONSUMPTION = "api/analytical/water-consumption";
export const GET_ENERY_CONSUMPTION = "api/analytical/energy-consumption";
export const GET_SPECIES_LIST = "api/master/cell-species/list";
export const GET_STREAMING_INITIAL_DATA = "api/streaming/device-data";

//Livemonitoring
export const GET_BATCH_METRICS = "api/analytical/batch-detail-metrics/v2";
export const GET_BATCH_METRICS_INTERVLAS =
  "api/analytical/batch-detail/interval";
export const GET_BATCH_OVERVIEW = "api/master/batch/operational-overview";
export const GET_ANALYTICAL = "api/analytical/batch/analytical-data";
export const GET_METRICS_LIST = "api/analytical/batch-detail/list/metric-types";
export const GET_CUSTOM_GRAPH = "api/analytical/batch-detail-custom-metrics";
export const GET_BATCH_LIST = "api/master/batch/running";
export const GET_BATCH_DATA = "api/streaming/range";
export const GET_BATCH_EXCEL_VALIDATE = "api/master/batch/data-validate";
export const GET_BATCH_EXCEL_INSERT = "api/master/batch/ra/batch-creation";
export const CREATE_RETROACTIVE_BATCH = "api/master/batch/ra-batch/create";
export const DATA_UPLOAD_RETROACTIVE_BATCH =
  "api/master/batch/ra-batch/data-upload";
// https://api-test.meatmonitor.ai/api/streaming/range?batchId=B_porc_immo_0010_0004&tenantId=20

//Analytics
export const GET_AVG_CELL_PERFORMANCE = "api/analytical/avg-cell-performance";
export const GET_CELL_MASS_PRODUCED = "api/analytical/mass-produced-per-liter";
export const GET_OVERALL_RATE = "api/analytical/overall-contamination-rate";
export const GET_SEED_TRAIN_RESULT = "api/analytical/result/seed-train-stage";
export const GET_STATICAL_SUMMARY = "api/analytical/statistical-summary";
export const GET_CULTURE_RESULT = "api/analytical/result/culture-day";
export const GET_BATCHLIST = "api/master/batch/list";

// Data Warehouse
export const GET_BATCHES_BY_CELL_TYPE =
  "api/master/data-warehouse/batches-by-celltype";
export const GET_BATCHES_BY_BIOREACTOR_TYPE =
  "api/master/data-warehouse/batches-by-bioreactor";
export const GET_BATCHES_BY_MEDIUM_TYPE =
  "api/master/data-warehouse/batches-by-mediumid";
export const GET_BATCHES_BY_MATERIAL_TYPE =
  "api/master/data-warehouse/batches-by-materialid";
export const GET_BATCHES_BY_PROTOCOL_TYPE =
  "api/master/data-warehouse/batches-by-protocol";
export const GET_IMAGES_BY_BATCH_ID =
  "api/master/data-warehouse/images-by-batch";
export const GET_FOLDER_FILES = "api/master/data-warehouse/folder-data";
export const GET_ALL_BATCH_SELECT_QUARTER_OPTIONS =
  "api/master/data-warehouse/get-all-quarters";

// Alert-Form

export const GET_BIOREACTOR_ALERT_FORM = "api/master/handle-alert";

// Static Files
export const STATIC_MANUAL_DATA_UPLOAD = "static/Manual+data+upload.xlsx";
export const STATIC_MEDIUM_FORMULATION = "Medium+fomulation+template.xlsx";
export const STATIC_MATERIAL_FORMULATION = "Material+fomulation+template.xlsx";
export const STATIC_RETROACTIVE_BATCH_DATA_UPLOAD =
  "static/Retroactive+Batch+Upload+Bioreactor+data.xlsx";
// Enable/Disable Alerts
export const ENABLE_DISABLE_ALERT = "api/master/batch/snooze";
export const LIVE_METRICS_STREAM =
  "api/analytical/batch-detail-metrics/v2?batchId=";
