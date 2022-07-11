import { useContext } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { AppContext } from "../App";
import TimeAgo from "timeago-react";
import { useState } from "react";

const StoryListItem = ({ story, user }) => {
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  const { updateStory, loggedUser } = useContext(AppContext);

  const handleUpVote = () => {
    if (loggedUser) {
      const id = loggedUser.id.toString();

      if (story.usersUpVoted.includes(id)) {
        const newUsersUpVoted = story.usersUpVoted.filter(
          (user) => user !== id
        );
        const newUsersDownVoted = story.usersDownVoted.filter(
          (user) => user !== id
        );

        const newStory = {
          ...story,
          votes: story.votes - 1,
          usersUpVoted: newUsersUpVoted,
          usersDownVoted: newUsersDownVoted,
        };
        updateStory(newStory);
        setUpVoted(!upVoted);
      } else {
        const newStory = {
          ...story,
          votes: story.votes + 1,
          usersUpVoted: [...story.usersUpVoted, id],
        };
        updateStory(newStory);
        setUpVoted(!upVoted);
      }
    } else {
      console.log("please login");
    }
  };

  const handleDownVote = () => {
    if (loggedUser) {
      const id = loggedUser.id.toString();

      if (story.usersDownVoted.includes(id)) {
        const newUsersUpVoted = story.usersUpVoted.filter(
          (user) => user !== id
        );
        const newUsersDownVoted = story.usersDownVoted.filter(
          (user) => user !== id
        );

        const newStory = {
          ...story,
          votes: story.votes + 1,
          usersUpVoted: newUsersUpVoted,
          usersDownVoted: newUsersDownVoted,
        };

        updateStory(newStory);
        setDownVoted(!downVoted);
      } else {
        const newStory = {
          ...story,
          votes: story.votes - 1,
          usersDownVoted: [...story.usersDownVoted, id],
        };
        updateStory(newStory);
        setDownVoted(!downVoted);
      }
    } else {
      console.log("please login");
    }
  };

  return (
    <div className="p-4 ">
      <div className=" w-full lg:max-w-full flex flex-row lg:flex border-2 shadow-xl shadow-stone-400 border-gray-400   lg:border-gray-400 ">
        <div className=" pl-4 pr-4 flex flex-col justify-center  items-center ">
          <button className="text-red-700" onClick={handleUpVote}>
            <AiOutlineArrowUp />
          </button>
          <p className="">{story.votes}</p>
          <button className="text-blue-600" onClick={handleDownVote}>
            <AiOutlineArrowDown />
          </button>
        </div>
        <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-purple-900 font-bold text-xl mb-2">
              {story.title}
            </div>
            <p className="text-gray-700 text-base">{story.contents}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none font-bold capitalize pb-1">{`${user.first_name}  ${user.last_name}`}</p>
              <p className="text-gray-600font-semibold">
                <TimeAgo datetime={story.createdAt} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryListItem;
