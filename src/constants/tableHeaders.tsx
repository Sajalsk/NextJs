import ComponentTooltip from "@/components/ComponentTooltip";
import DateTimeDisplay from "@/components/DateTimeDisplay";
import DownloadableFile from "@/components/DownloadableFile";
import TooltipCell from "@/components/TooltipCell";
import { formatDate, getComponentConcentration } from "@/utils/utils";
import { ColumnDef } from "@tanstack/react-table";

interface CellData {
  cellID: string;
  createdAt: string;
  addedBy: string | null;
  species: string;
  cellType: string;
  source: string;
  passageDoubling: number;
  cellBankLocation: string;
  availableVials: number;
  characterisationFiles: Array<{
    id: number;
    filePath: string;
    fileName: string;
  }>;
  geneticCode: Array<{
    id: number;
    filePath: string;
    fileName: string;
  }>;
  updatedAt: string;
  [key: string]: any;
}

export const cellColumns: ColumnDef<CellData, any>[] = [
  {
    header: "Cell ID",
    accessorKey: "cellID",
    size: 200,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Date Added",
    accessorKey: "createdAt",
    cell: (props) => <DateTimeDisplay date={props.row.original.createdAt} />,
    size: 130,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Added By",
    accessorKey: "addedBy",
    cell: ({ row }) => {
      const addedBy =
        row.original.addedBy !== null ? row.original.addedBy : "-";
      return <TooltipCell text={addedBy} />;
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Species",
    accessorKey: "species",
    size: 100,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Cell Type",
    accessorKey: "cellType",
    cell: ({ row }) => {
      const cellType = row.original.cellType || "-";
      return <TooltipCell text={cellType} />;
    },
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Source",
    accessorKey: "source",
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Passage",
    accessorKey: "passageDoubling",
    size: 100,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Genetic Code",
    accessorKey: "geneticCode",
    cell: (props) => (
      <DownloadableFile files={props.row.original.geneticCode} />
    ),
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Cell Bank Location",
    accessorKey: "cellBankLocation",
    size: 200,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Available Vials",
    accessorKey: "availableVials",
    size: 180,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Characterization",
    accessorKey: "characterisationFiles",
    cell: (props) => (
      <DownloadableFile files={props.row.original.characterisationFiles} />
    ),
    size: 180,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Updated At",
    accessorKey: "updatedAt",
    cell: (props) => <DateTimeDisplay date={props.row.original.updatedAt} />,
    size: 160,
    minSize: 100,
    maxSize: 300,
  },
];

export const mediumColumns: ColumnDef<any, any>[] = [
  {
    header: "Medium ID",
    accessorKey: "mediumId",
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Name",
    accessorKey: "mediumName",
    cell: ({ row }) => {
      const mediumName = row.original.mediumName || "-";
      return <TooltipCell text={mediumName} />;
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Glucose",
    accessorKey: "glucose",
    cell: (props) => {
      return getComponentConcentration(
        props.row.original.components,
        "D-Glucose (Dextrose)",
      );
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Calcium",
    accessorKey: "calcium",
    cell: (props) => {
      return getComponentConcentration(
        props.row.original.components,
        "Calcium Chloride (CaCl2) (anhyd.)",
      );
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Magnesium",
    accessorKey: "magnesium",
    cell: (props) => {
      return getComponentConcentration(
        props.row.original.components,
        "Magnesium Sulfate (MgSO4) (anhyd.)",
      );
    },
    size: 130,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Glutamine",
    accessorKey: "glutamine",
    cell: (props) => {
      return getComponentConcentration(
        props.row.original.components,
        "L-Glutamine",
      );
    },
    size: 130,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "FGF2",
    accessorKey: "fgf2",
    cell: (props) => {
      return getComponentConcentration(props.row.original.components, "FGF2");
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Added By",
    accessorKey: "addedBy",
    cell: ({ row }) => {
      const addedBy =
        row.original.addedBy !== null ? row.original.addedBy : "-";
      return <TooltipCell text={addedBy} />;
    },
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Date Added",
    accessorKey: "createdAt",
    cell: (props) => <DateTimeDisplay date={props.row.original.createdAt} />,
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Last Modified",
    accessorKey: "updatedAt",
    cell: (props) => <DateTimeDisplay date={props.row.original.updatedAt} />,
    size: 150,
    minSize: 100,
    maxSize: 300,
  },
];

export const materialColumns: ColumnDef<any, any>[] = [
  {
    header: "Material ID",
    accessorKey: "materialId",
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Components",
    accessorKey: "components",
    cell: (props) => {
      const components = props.row.original.components;
      return <ComponentTooltip components={components} />;
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Date Added",
    accessorKey: "createdAt",
    cell: (props) => <DateTimeDisplay date={props.row.original.createdAt} />,
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Added By",
    accessorKey: "addedBy",
    cell: ({ row }) => {
      const addedBy =
        row.original.addedBy !== null ? row.original.addedBy : "-";
      return <TooltipCell text={addedBy} />;
    },
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Modified By",
    accessorKey: "modifiedBy",
    cell: (props: any) =>
      props.row.original.modifiedBy ? props.row.original.modifiedBy : "-",
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
  {
    header: "Modified Date",
    accessorKey: "updatedAt",
    cell: (props) => (
      <DateTimeDisplay
        date={props.row.original.updatedAt}
        name={props.row.original.modifiedBy}
      />
    ),
    size: 120,
    minSize: 100,
    maxSize: 300,
  },
];

export const YOUR_CELLS = {
  CELLS: [
    { header: "Cell ID", accessorKey: "cellID" },
    {
      header: "Date Added",
      accessorKey: "createdAt",
      cell: (props: any) => formatDate(props.row.original.createdAt),
    },
    {
      header: "Added By",
      accessorKey: "addedBy",
      cell: (props: any) =>
        props.row.original.addedBy !== null ? props.row.original.addedBy : "-",
    },
    { header: "Species", accessorKey: "species" },
    { header: "Cell Type", accessorKey: "cellType" },
    { header: "Source", accessorKey: "source" },
    {
      header: "Passage",
      accessorKey: "passageDoubling",
    },
    { header: "Genetic Code", accessorKey: "geneticCode" },
    {
      header: "Cell Bank Location",
      accessorKey: "cellBankLocation",
    },
    {
      header: "Available Vials",
      accessorKey: "availableVials",
    },
    {
      header: "Characterization",
      accessorKey: "characterization",
    },
    {
      header: "Update At",
      accessorKey: "updatedAt",
      cell: (props: any) => formatDate(props.row.original.updatedAt),
    },
  ],
  MEDIUM: [
    { header: "Medium ID", accessorKey: "id" },
    { header: "Name", accessorKey: "mediumName" },
    { header: "Glucose", accessorKey: "glucose" },
    { header: "Calcium", accessorKey: "calcium" },
    { header: "Magnesium", accessorKey: "magnesium" },
    { header: "Glutamine", accessorKey: "glutamine" },
    { header: "FGF2", accessorKey: "fgf2" },
    {
      header: "Added By",
      accessorKey: "addedBy",
      cell: (props: any) =>
        props.row.original.addedBy !== null ? props.row.original.addedBy : "-",
    },
    {
      header: "Date Added",
      accessorKey: "createdAt",
      cell: (props: any) => formatDate(props.row.original.createdAt),
    },

    {
      header: "Last Modified",
      accessorKey: "lastModified",
      cell: (props: any) => formatDate(props.row.original.updatedAt),
    },
  ],
  MATERIALS: [
    "MATERIAL ID",
    "COMPONENTS",
    "DATE ADDED",
    "MODIFIED DATE",
    "USER NAME",
  ],
};

export const DEVICES = {
  DEVICE: [
    "DEVICE NAME",
    "DEVICE CATEGORY",
    "ID'S",
    "ADDED ON",
    "ADDED BY",
    "IP ADDRESS",
    "ERVER/PORT",
    "CONNECTION DATE/LAST USED",
    "PARAMETERS",
    "STATUS",
  ],
};
