import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { TfiCommentsSmiley } from "react-icons/tfi";
import link from "../assets/link.svg";
import Button from "../assets/sendButton.svg";

const DashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl w-full h-[90vh] mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 flex gap-1"
    >
      {/* users section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[350px] h-full w-full overflow-y-scroll p-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl scrollbar"
      >
        <h1 className="text-2xl font-bold text-white">Chats</h1>
        <div className="flex items-center border border-gray-700 h-10 mt-6 rounded-md overflow-hidden">
          <IoSearch className="bg-gray-500 w-9 h-full p-2 " />
          <input
            type="search"
            name="search"
            placeholder="Search users"
            className="bg-transparent pl-3"
          />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white mt-6">Recent Chats</h2>
          <ul className="list-none mt-4">
            {arr.map((user) => (
              <li key={user.id} className="flex items-center py-2 w-full mt-4">
                <div className="relative w-12 h-10 rounded-full">
                  <img
                    src="https://picsum.photos/200/300"
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                  {/* Status Indicator */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="ml-4 flex items-start justify-between w-full">
                  <div>
                    <h3 className="text-[18px] font-bold text-white">
                      {user.name}
                    </h3>
                    <p className="text-gray-400 text-[14px] font-medium">
                      {user.message}
                    </p>
                  </div>
                  <p className="text-gray-400 text-[12px]">{user.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative max-w-4xl h-full w-full px-2 py-2 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl scrollbar overflow-hidden`}
      >
        {/* <ul>
          <li className="text-white">hello</li>
        </ul>
        <form className="absolute bottom-0 left-0 right-0 mb-4 px-3 flex items-center justify-between gap-1">
          <input
            type="text"
            placeholder="Enter Message Here!"
            className="bg-transparent w-[100%] border-[1px] border-gray-500 p-2 text-gray-300 outline-none rounded"
          />
          <button
            type="submit"
            className="text-gray-500 w-[42px] h-[40px] bg-green-500 p-2 rounded-full flex items-center justify-center"
          >
            <IoSend className="text-xl text-black" />
          </button>
        </form> */}

        <div className="overflow-y-scroll h-[450px]">
          <div class="flex gap-2.5 mb-4">
            <img
              src="https://pagedone.io/asset/uploads/1710412177.png"
              alt="Shanay image"
              class="w-10 h-11"
            />
            <div class="grid">
              <h5 class="text-gray-900 text-sm font-semibold leading-snug pb-1">
                Shanay cruz
              </h5>
              <div class="w-max grid">
                <div class="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
                  <h5 class="text-gray-900 text-sm font-normal leading-snug">
                    Guts, I need a review of work. Are you ready?
                  </h5>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h6>
                </div>
              </div>
              <div class="w-max grid">
                <div class="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                  <h5 class="text-gray-900 text-sm font-normal leading-snug">
                    Let me know
                  </h5>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-2.5 mb-4">
            <img
              src="https://pagedone.io/asset/uploads/1710412177.png"
              alt="Shanay image"
              class="w-10 h-11"
            />
            <div class="grid">
              <h5 class="text-gray-900 text-sm font-semibold leading-snug pb-1">
                Shanay cruz
              </h5>
              <div class="w-max grid">
                <div class="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
                  <h5 class="text-gray-900 text-sm font-normal leading-snug">
                    Guts, I need a review of work. Are you ready?
                  </h5>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h6>
                </div>
              </div>
              <div class="w-max grid">
                <div class="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                  <h5 class="text-gray-900 text-sm font-normal leading-snug">
                    Let me know
                  </h5>
                </div>
                <div class="justify-end items-center inline-flex mb-2.5">
                  <h6 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-2.5 justify-end">
            <div class="">
              <div class="grid mb-2">
                <h5 class="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
                  You
                </h5>
                <div class="px-3 py-2 bg-indigo-600 rounded">
                  <h2 class="text-white text-sm font-normal leading-snug">
                    Yes, let’s see, send your work here
                  </h2>
                </div>
                <div class="justify-start items-center inline-flex">
                  <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">
                    05:14 PM
                  </h3>
                </div>
              </div>
              <div class="justify-center">
                <div class="grid w-fit ml-auto">
                  <div class="px-3 py-2 bg-indigo-600 rounded ">
                    <h2 class="text-white text-sm font-normal leading-snug">
                      Anyone on for lunch today
                    </h2>
                  </div>
                  <div class="justify-start items-center inline-flex">
                    <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">
                      You
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1704091591.png"
              alt="Hailey image"
              class="w-10 h-11"
            />
          </div>
        </div>
        <div className="mx-2">
          <div className="absolute bottom-0 left-0 right-0 w-full pl-3 pr-1 py-1 rounded-3xl border bg-gray-800 border-gray-200 items-center gap-2 flex justify-between">
            <div class="flex items-center w-full gap-2">
              <TfiCommentsSmiley className="text-white h-6 w-6" />
              <input
                type="text"
                placeholder="Type Here...."
                className="bg-transparent w-[100%] text-gray-300 outline-none rounded"
              />
              <img src={link} alt="link icon" />
              <button class="flex items-center pl-2 pr-3 py-2 bg-green-600 rounded-full shadow ">
                <img src={Button} alt="Button" />
                <h3 class="text-white text-xs font-semibold leading-4 px-2">
                  Send
                </h3>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[300px] h-full w-full overflow-y-scroll p-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl scrollbar"
      >
        hello
      </motion.div>
    </motion.div>
  );
};
export default DashboardPage;

const arr = [
  { id: 1, name: "John Doe", message: "I am fine", time: "2:50 pm" },
  { id: 2, name: "Smith James", message: "How are you?", time: "3:20 pm" },
  { id: 3, name: "Max Jona", message: "How you doing!", time: "9:45 pm" },
  { id: 4, name: "John Doe", message: "I am fine", time: "2:50 pm" },
  { id: 5, name: "Smith James", message: "How are you?", time: "3:20 pm" },
  { id: 6, name: "Max Jona", message: "How you doing!", time: "9:45 pm" },
  { id: 7, name: "John Doe", message: "I am fine", time: "2:50 pm" },
  { id: 8, name: "Smith James", message: "How are you?", time: "3:20 pm" },
  { id: 9, name: "Max Jona", message: "How you doing!", time: "9:45 pm" },
];
