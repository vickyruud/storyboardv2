import { useContext  } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { AppContext } from '../App';
import TimeAgo from 'timeago-react';


const StoryListItem = ({ story, user }) => {




  const { updateStory, loggedUser } = useContext(AppContext);


  const handleUpVote = () => {

    const id = loggedUser.id.toString()

    console.log(story.usersUpVoted);

    if (story.usersUpVoted.includes(id)) {
      
      const newUsersUpVoted = story.usersUpVoted.filter(user => user !== id);
      const newStory = { ...story, votes: story.votes - 1, usersUpVoted: newUsersUpVoted };

      updateStory(newStory);

          
    } else {
      const newStory = { ...story, votes: story.votes + 1, usersUpVoted: [...story.usersUpVoted, id] };
      updateStory(newStory);
    }
  };

  const handleDownVote = () => {

    const id = loggedUser.id.toString()

    console.log(story.usersUpVoted);

    if (story.usersUpVoted.includes(id)) {
      
      const newUsersUpVoted = story.usersUpVoted.filter(user => user !== id);
      const newStory = { ...story, votes: story.votes + 1, usersUpVoted: newUsersUpVoted };

      updateStory(newStory);

          
    } else {
      const newStory = { ...story, votes: story.votes - 1, usersUpVoted: [...story.usersUpVoted, id] };
      updateStory(newStory);
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
              <p className="text-gray-600font-semibold"><TimeAgo datetime={story.createdAt}/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryListItem;
