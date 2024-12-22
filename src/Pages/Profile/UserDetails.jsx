import HelpCenter from "./ProfileDetails/HelpCenter";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ReferandEarn from "./ProfileDetails/ReferandEarn";
import Schedule from "./ProfileDetails/Schedule";
import Transaction from "./ProfileDetails/Transaction";
import UploadFiles from "./ProfileDetails/UploadFiles";

const UserDetails = ({ activeTab }) => {
  const content = {
    Profile: <ProfileDetails />,
    "Your Service": <div>Your Service Details</div>,
    "Education Consultant": <div>Education Consultant Details</div>,
    "Travel Support": <div>Travel Support Details</div>,
    "Financial Support": <div>Financial Support Details</div>,
    "Language Training": <div>Language Training Details</div>,
    Transaction: <Transaction />,
    "Refer & Earn": <ReferandEarn />,
    Schedule: <Schedule />,
    Files: <UploadFiles />,
    "Help Center": <HelpCenter />,
    Notifications: <div>Notifications Details</div>,
    Setting: <div>Settings Details</div>,
  };

  return (
    <div>{content[activeTab] || <div>Select a tab to view details</div>}</div>
  );
};

export default UserDetails;