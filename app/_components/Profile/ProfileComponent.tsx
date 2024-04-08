import React from "react";
import Image from "next/image";

interface Props {}

const ProfileComponent = (props: Props) => {
  let courses: any = [
    {
      id: 1,
      title: "Course 1",
    },
    {
      id: 2,
      title: "Course 2",
    },
    {
      id: 3,
      title: "Course 3",
    },
  ];
  return (
    <div className="w-[100%] h-screen bg-gray-200 flex items-center justify-center sm:flex-wrap">
      <div
        className="shadow-xl bg-gray-900 text-white"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="border-b border-gray-800 px-8 py-3">
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div className="px-8 py-6 flex justify-between">
          <div>
            <p>
              <em className="text-blue-400">const</em>{" "}
              <span className="text-green-400">aboutMe</span>{" "}
              <span className="text-pink-500">=</span>{" "}
              <em className="text-blue-400">function</em>() {"{"}
            </p>
            <p>
              &nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
              <span className="text-yellow-300">Sanket Bagad</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;email:{" "}
              <span className="text-yellow-300">alencolins@gmail.com</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;role:{" "}
              <span className="text-yellow-300">
                <a
                  href="https://scottwindon.com"
                  target="_blank"
                  className="text-yellow-300 hover:underline focus:border-none"
                >
                  User
                </a>
              </span>
              ,
            </p>
            <p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;courses:{" "}
                <span className="text-yellow-300">[</span>
              </p>
              {courses?.map((course: any) => (
                <>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}</p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id:{" "}
                    <span className="text-yellow-300">{course.id}</span>,
                  </p>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title:{" "}
                    <span className="text-yellow-300">{course.title}</span>,
                  </p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"},"}</p>
                </>
              ))}
              <p>&nbsp;&nbsp;&nbsp;&nbsp;{"],"}</p>
            </p>

            <p>&nbsp;&nbsp;{"}"}</p>
            <p>{"}"}</p>
          </div>
          {/* Avatar Div */}
          <div className="ml-1 hidden lg:block">
            <div>
              <Image
                src="/assets/logo.png"
                alt="avatar"
                height={180}
                width={180}
              />
              <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md mt-4">
               <input type="file" style={{display: "none"}}  />
               Change Avatar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;