import image from "../assets/Selfie.jpg";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Sidebar() {
  return (
    <div className="w-72  flex flex-col justify-center h-1/2 items-center mt-4  py-8 rounded-3xl container">
      <div className="flex flex-col justify-center items-center">
        <img src={image} alt="" className="w-1/2 rounded-lg mb-8" />
        <h1 className="text-2xl">Ayushi Badika</h1>
        <div className="w-3/5 flex justify-center items-center py-2  rounded-3xl mt-2 mb-8 helloWorld">
          Hello World !
        </div>
      </div>
      <hr className="h-8 w-3/5" />
      <div className="flex items-center w-full px-6 gap-6  mb-4 ">
        <div className="bg-black w-14 rounded-md h-14 flex justify-center items-center">
          <HourglassEmptyIcon className="icon" style={{ fill: "#feda70" }} />
        </div>
        <div>
          <p className="uppercase text-gray-400">Age</p>
          <p>23 Years Old</p>
        </div>
      </div>
      <div className="flex items-center  w-full px-6 gap-6  mb-4">
        <div className="bg-black w-14 rounded-md h-14 flex justify-center items-center">
          <LocationOnIcon className="icon" style={{ fill: "#feda70" }} />
        </div>
        <div>
          <p className="uppercase text-gray-400">Location</p>
          <p>Nimbahera, Rajasthan</p>
        </div>
      </div>
      <div className="flex items-center w-full px-6 gap-6 mb-4">
        <div className="bg-black w-14 rounded-md h-14 flex justify-center items-center">
          <PersonIcon className="icon" style={{ fill: "#feda70" }} />
        </div>
        <div>
          <p className="uppercase text-gray-400">Personality Type</p>
          <p>Web Developer</p>
        </div>
      </div>
      <hr className="h-8 w-3/5 mt-4" />
      <ul className="flex gap-4 mt-1">
        <li>
          <GitHubIcon style={{ fontSize: "2rem" }} />
        </li>
        <li>
          <LinkedInIcon style={{ fontSize: "2rem" }} />
        </li>
        <li>
          <InstagramIcon style={{ fontSize: "2rem" }} />
        </li>
        <li>
          <TwitterIcon style={{ fontSize: "2rem" }} />
        </li>
      </ul>
    </div>
  );
}
