// Import SVG icons
import Analytics from "/public/images/svgs/Analytics.svg";
import Batches from "/public/images/svgs/Batches.svg";
import Warehouse from "/public/images/svgs/DataWarehouse.svg";
import File from "/public/images/svgs/File.svg";
import Live from "/public/images/svgs/LiveMonitoring.svg";
import Regulatory from "/public/images/svgs/Regulatory.svg";
import RedStatus from "/public/images/svgs/Status.svg";
import GreenStatus from "/public/images/svgs/Statusgreen.svg";
import Sustainability from "/public/images/svgs/Sustainability.svg";
import Training from "/public/images/svgs/Training.svg";
import ActionsButton from "/public/images/svgs/actions_button.svg";
import Clock from "/public/images/svgs/alarm-clock.svg";
import Beaker from "/public/images/svgs/beaker.svg";
import Bioreactor from "/public/images/svgs/bioreactor.svg";
import Bioreactor1 from "/public/images/svgs/bioreactor1.svg";
import Bioreactor3 from "/public/images/svgs/bioreactor3.svg";
import ClipBoardIcon from "/public/images/svgs/clipboard.svg";
import ContactSupport from "/public/images/svgs/contact_support.svg";
import CornerDownRightIcon from "/public/images/svgs/corner-down-right.svg";
import Dashboard from "/public/images/svgs/dashboard.svg";
import DataIcon from "/public/images/svgs/data.svg";
import DataBase from "/public/images/svgs/database-01.svg";
import DownloadAnalytics from "/public/images/svgs/download-01.svg";
import EditIcon from "/public/images/svgs/edit-05.svg";
import FileUpload from "/public/images/svgs/file_upload.svg";
import ImageLeft from "/public/images/svgs/image-left.svg";
import InfoIcon from "/public/images/svgs/info.svg";
import LinkExternal from "/public/images/svgs/link-external.svg";
import Locker from "/public/images/svgs/lock.svg";
import MicroScope from "/public/images/svgs/microscope.svg";
import Percent from "/public/images/svgs/percent-02.svg";
import PlusIcon from "/public/images/svgs/plus.svg";
import Pythag from "/public/images/svgs/pythag_white.svg";
import Tea from "/public/images/svgs/tea.svg";
import UploadIconLocal from "/public/images/svgs/upload-01.svg";
import Upload from "/public/images/svgs/upload.svg";
import UploadIconBatch from "/public/images/svgs/upload_icon.svg";

// Define icon types
const iconTypes: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  dashboard: Dashboard,
  live: Live,
  analytics: Analytics,
  warehouse: Warehouse,
  sustainability: Sustainability,
  training: Training,
  regulatory: Regulatory,
  tea: Tea,
  contactSupport: ContactSupport,
  beaker: Beaker,
  microscope: MicroScope,
  bioreactor: Bioreactor,
  bioreactor1: Bioreactor1,
  bioreactor3: Bioreactor3,
  upload: Upload,
  actionsButton: ActionsButton,
  fileUpload: FileUpload,
  pythag: Pythag,
  locker: Locker,
  file: File,
  clipboard: ClipBoardIcon,
  cornerDownRight: CornerDownRightIcon,
  data: DataIcon,
  edit: EditIcon,
  uploadIconLocal: UploadIconLocal,
  imageLeft: ImageLeft,
  clock: Clock,
  containment: Percent,
  Info: InfoIcon,
  greenStatus: GreenStatus,
  redStatus: RedStatus,
  uploadIconBatch: UploadIconBatch,
  database: DataBase,
  linkExternal: LinkExternal,
  plusIcon: PlusIcon,
  downloadAnalytics: DownloadAnalytics,
  batches: Batches,
};

// Props interface
interface IconComponentProps {
  name: keyof typeof iconTypes;
  className?: string;
}

// IconComponent
const IconComponent: React.FC<IconComponentProps> = ({
  name,
  className,
  ...props
}) => {
  const Icon = iconTypes[name];
  if (!Icon) return null; // Handle the case when icon is not found
  return <Icon className={className} {...props} />;
};

export default IconComponent;
