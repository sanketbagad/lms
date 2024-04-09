import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

interface Props {}

const ProfileComponent = (props: Props) => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className="w-[100%] h-[100vh] bg-gray-900 flex items-center justify-center flex-wrap">
      <div
        className="shadow-xl bg-gray-900 text-white  h-[100vh] w-full"
        // style={{ width: "100%", height: "100%" }}
      >
        <div className="border-b border-gray-800 px-8 py-3">
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div className="px-8 py-6 flex flex-col lg:flex-row justify-between">
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
              <span className="text-yellow-300">{user?.name}</span>,
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;email:{" "}
              <span className="text-yellow-300">{user?.email}</span>,
            </p>
            <p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;courses:{" "}
                <span className="text-yellow-300">[</span>
              </p>
              {user?.course?.map((course: any) => (
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

            <p>&nbsp;&nbsp;{"},"}</p>
            {/* created at */}
            <p>
              &nbsp;&nbsp;created_at:{" "}
              <span className="text-yellow-300">{user?.createdAt}</span>,
            </p>

            <p>{"}"}</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
