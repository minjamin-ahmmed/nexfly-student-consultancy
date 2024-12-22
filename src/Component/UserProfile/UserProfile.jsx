import { useState } from "react";
import Profile from "../../Pages/Profile/Profile";
import ProfileTab from "../../Pages/Profile/ProfileTab";
import UserDetails from "../../Pages/Profile/UserDetails";
import LogoutProfile from "../../Pages/Profile/LogoutProfile";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 md:p-10 lg:p-20">
      <div className="lg:col-span-4">
        <Profile></Profile>
        <ProfileTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></ProfileTab>

        <LogoutProfile></LogoutProfile>
      </div>

      <div className="lg:col-span-8">
        <UserDetails activeTab={activeTab}></UserDetails>
      </div>
    </div>
  );
};

export default UserProfile;
