import LanguageIcon from "@mui/icons-material/Language";
import GradingIcon from "@mui/icons-material/Grading";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import gitImage from "../assets/git.png";
import javaScriptImage from "../assets/java-script.png";
import npmImage from "../assets/npm.png";
import reactImage from "../assets/react.png";
export default function AboutSection() {
  return (
    <div className="container w-9/12 rounded-3xl px-12 py-24 relative ">
      <ul className="flex gap-16 absolute right-0 top-0 bg-black px-12 py-6 text-lg rounded-bl-3xl rounded-tr-3xl">
        <li className="font-bold " style={{ color: "#feda70" }}>
          About
        </li>
        <li className="font-bold ">Certificate</li>
        <li className="font-bold ">Projects</li>
        <li className="font-bold ">More</li>
        <li className="font-bold ">Contact</li>
      </ul>

      <h1 className="text-4xl mb-4 font-bold">About Me</h1>
      <div
        className="rounded-lg mb-4"
        style={{ backgroundColor: "#FFC361", width: "50px", height: "5px" }}
      ></div>
      <div className="p-8 rounded-lg shadow-xl mb-8 text-lg opacity-80 objective">
        {`Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
        Full-Stack software developer, I specialize in creating visually
        appealing websites, apps and mobile games. My passion for graphic design
        isn't just a hobby, it's a key ingredient in every project I work on.
      `}
      </div>

      <div className="primaryFocus">
        <h1 className="text-3xl mb-8 font-bold text-center">Primary Focus</h1>

        <div className="flex flex-wrap justify-between">
          <div
            className="p-8 rounded-lg shadow-xl mb-8 text-lg flex gap-4  objective"
            style={{ width: "48%" }}
          >
            <LanguageIcon
              className="w-8 h-9"
              style={{ fill: "#feda70", fontSize: "3rem" }}
            />
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Web Design & Development
              </h1>
              <p>
                Creating attractive, easy-to-use websites that work well for
                businesses and individuals online.
              </p>
            </div>
          </div>
          <div
            className="p-8 rounded-lg shadow-xl mb-8 text-lg flex gap-4   objective"
            style={{ width: "48%" }}
          >
            <GradingIcon style={{ fill: "#feda70", fontSize: "3rem" }} />
            <div>
              <h1 className="text-2xl font-bold mb-2">Full-Stack Solutions</h1>
              <p>
                Developing scalable web applications using JavaScript
                Frameworks, SQL Databases, PHP and Python.
              </p>
            </div>
          </div>
          <div
            className="p-8 rounded-lg shadow-xl mb-8 text-lg flex gap-4   objective"
            style={{ width: "48%" }}
          >
            <AppShortcutIcon style={{ fill: "#feda70", fontSize: "3rem" }} />
            <div>
              <h1 className="text-2xl font-bold mb-2">Mobile Apps & Games</h1>
              <p>
                Creating and developing engaging mobile apps and games for iOS
                and Android devices.
              </p>
            </div>
          </div>
          <div
            className="p-8 rounded-lg shadow-xl mb-8 text-lg flex gap-4   objective"
            style={{ width: "48%" }}
          >
            <StackedLineChartIcon
              style={{ fill: "#feda70", fontSize: "3rem" }}
            />
            <div>
              <h1 className="text-2xl font-bold mb-2">Marketing & SEO</h1>
              <p>
                Using SEO and marketing strategies to boost online visibility
                and promote products or services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="exploringCreativity">
        <h1 className="text-3xl mb-8 font-bold text-center">
          Exploring Creativity
        </h1>
        <div className="flex flex-wrap justify-between">
          <div
            className="p-8 rounded-lg shadow-xl mb-8 text-lg flex gap-4  w-2/5 objective"
            style={{ width: "48%" }}
          >
            <CameraAltIcon style={{ fill: "#feda70", fontSize: "3rem" }} />
            <div>
              <h1 className="text-2xl font-bold mb-2">Visual Storytelling</h1>
              <p>
                Taking and editing photos or videos that tell engaging stories,
                bringing concepts and ideas to life visually.
              </p>
            </div>
          </div>
          <div
            className="p-8 rounded-lg shadow-xl mb-8 text-lg flex gap-4  w-2/5 objective"
            style={{ width: "48%" }}
          >
            <ViewInArIcon style={{ fill: "#feda70", fontSize: "3rem" }} />
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Digital Content Creation
              </h1>
              <p>
                Creating digital elements, such as 3D models, graphics,
                animations, videos and AI-generated content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl mb-8 font-bold text-center">Language</h1>
      <div className="p-12 rounded-lg shadow-xl mb-8 text-lg flex justify-between   objective">
        <div className="codingLanguage " style={{ width: "48%" }}>
          <h1 className="text-2xl mb-8">Coding Language</h1>
          <div className="mb-4">
            <div className="mb-2 text-xl">Javascript 60%</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-3/5 h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">HTML 90%</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div
                className="h-full bg-yellow-300 mb-4 rounded-md"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">CSS 80%</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-4/5 h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">Java 60%</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-3/5 h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">React 50%</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-1/2 h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="humanLanguage" style={{ width: "48%" }}>
          <h1 className="text-2xl mb-8">Human Language</h1>
          <div className="mb-4">
            <div className="mb-2 text-xl">English Fluent</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-full h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">German Fluent</div>
            <div className="w-full rounded-md  h-3 bg-gray-300">
              <div className="w-4/5 h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">Bulgarain Native</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-full h-full bg-yellow-300 mb-4 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">Turkish Bilingual</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-3/4 h-full bg-yellow-300 rounded-md"></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xl">Russian Basic</div>
            <div className="w-full rounded-md  h-3 bg-gray-300 ">
              <div className="w-1/4 h-full bg-yellow-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl mb-8 font-bold text-center">
        Development Skills
      </h1>
      <div className="p-4 rounded-lg shadow-xl mb-8 text-lg flex justify-between   objective">
        <div className="flex gap-4 overflow-x-scroll p-8 scrollContainer">
          <img src={htmlImage} alt="" className="w-48" />
          <img src={cssImage} alt="" className="w-48" />
          <img src={javaScriptImage} alt="" className="w-48" />
          <img src={reactImage} alt="" className="w-48" />
          <img src={npmImage} alt="" className="w-48" />
          <img src={gitImage} alt="" className="w-48" />
        </div>
      </div>
    </div>
  );
}
