import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
export default function AccountSettings() {
  return (
    <div className=" h-[588px]  flex flex-col">
      {/* TITLE */}
      <div className="bg-white  px-4 py-4">
        <h2 className="text-base font-medium text-gray-900">
          Account Settings
        </h2>
      </div>
      {/* PROFILE DETAIL  */}
      <div className="px-4 pt-4 pb-2 flex-grow">
        <div className="flex items-start gap-4">
          {/* IMAGE */}
          <div className="relative w-14 h-14 shrink-0">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />

            {/* FOR ICON */}
            <span className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center text-white text-[10px] bg-purple-600 border-2 border-white rounded-full">
              <PhotoCameraIcon fontSize="inherit" className="text-white" />
            </span>
          </div>

          <div>
            <p className="font-semibold text-sm text-gray-900">Marry Doe</p>
            <p className="text-xs text-gray-500 mt-0.5">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* OTHER DETAILS */}
        <p className="mt-4 text-xs leading-snug text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="mt-4 border border-dashed border-gray-300" />
      </div>

      <div className=" mb-8 border border-dashed border-gray-300" />
    </div>
  );
}
