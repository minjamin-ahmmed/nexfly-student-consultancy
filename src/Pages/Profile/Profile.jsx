import { useState } from "react";
import defaultImg from "../../assets/default-dp.jpg";
import { Download03Icon } from "hugeicons-react";
import useStore from "../../store/store";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(defaultImg);
  const currentUser = useStore((state) => state.currentUser);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a temporary URL for the selected file
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="border border-slate-300 p-6 shadow rounded-lg">
      <div className="flex items-center gap-4">
        <div>
          {/* Image with clickable functionality */}
          <label htmlFor="imageUpload">
            <img
              src={profileImage}
              alt="Profile"
              className="cursor-pointer rounded-full w-20 h-20 object-cover"
            />
          </label>
          {/* Hidden file input */}
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload} // Handle the image upload
          />
        </div>
        <div>
          <p className="text-slate-900 font-normal text-lg mb-1">
            {`${currentUser?.name ? currentUser?.name : "John Doe"}`}
          </p>
          <p className="text-slate-600 text-[14px]">Dhaka, Bangladesh 1207</p>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full px-12 py-2 bg-indigo-500 text-white rounded-[100px] text-[16px]">
          <div className="flex items-center justify-center gap-2">
            <div>
              <Download03Icon />
            </div>

            <h3>Download Profile</h3>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
