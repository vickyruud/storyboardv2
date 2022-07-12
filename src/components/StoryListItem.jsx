import { useContext } from "react";
import { BsShift, BsShiftFill } from "react-icons/bs";
import { AppContext } from "../App";
import TimeAgo from "timeago-react";
import { useState } from "react";
import { useEffect } from "react";

const StoryListItem = ({ story, user }) => {
  const { updateStory, loggedUser } = useContext(AppContext);

  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);
  const [loading, setLoading] = useState(false);
  


  const handleUpVote = () => {
    setLoading(true);
    //checks if user is logged in.
    if (loggedUser) {
      //records the ID of the user who is logged in.
      const id = loggedUser.id.toString();

      //has the user up voted the post already?
      if (story.usersUpVoted.includes(id)) {
        //create new instances removing the current user from the already voted list
        const newUsersUpVoted = story.usersUpVoted.filter(
          (user) => user !== id
        );
        const newUsersDownVoted = story.usersDownVoted.filter(
          (user) => user !== id
        );

        const newVotes = story.votes - 1;

        const newStory = {
          ...story,
          votes: newVotes,
          usersUpVoted: newUsersUpVoted,
          usersDownVoted: newUsersDownVoted,
        };
        //updates the database
        updateStory(newStory)
      } else {
        let votes;
        //checks if user has already down voted.

        if (story.usersDownVoted.includes(id)) {
          votes = story.votes + 2;
        } else {
          votes = story.votes + 1;
        }
        //create new instances removing the current user from the already voted list
        const newUsersDownVoted = story.usersDownVoted.filter(
          (user) => user !== id
        );

        const newStory = {
          ...story,
          votes: votes,
          usersUpVoted: [...story.usersUpVoted, id],
          usersDownVoted: newUsersDownVoted,
        };
        updateStory(newStory);
      }
    } else {
      console.log("please login");
    }
    setTimeout(() => {
      setLoading(false);

    }, 1000)

  };

  const handleDownVote = () => {
    setLoading(true);

    if (loggedUser) {
      const id = loggedUser.id.toString();

      if (story.usersDownVoted.includes(id)) {
        const newUsersUpVoted = story.usersUpVoted.filter(
          (user) => user !== id
        );
        const newUsersDownVoted = story.usersDownVoted.filter(
          (user) => user !== id
        );

        let votes = story.votes + 1;

        const newStory = {
          ...story,
          votes: votes,
          usersUpVoted: newUsersUpVoted,
          usersDownVoted: newUsersDownVoted,
        };

        updateStory(newStory);
      } else {
        let votes;

        if (story.usersUpVoted.includes(id)) {
          votes = story.votes - 2;
        } else {
          votes = story.votes - 1;
        }

        const newUsersUpVoted = story.usersUpVoted.filter(
          (user) => user !== id
        );
        const newStory = {
          ...story,
          votes: votes,
          usersDownVoted: [...story.usersDownVoted, id],
          usersUpVoted: newUsersUpVoted,
        };
        updateStory(newStory);
      }
    } else {
      console.log("please login");
    }
     setTimeout(() => {
      setLoading(false);

    }, 1000)


  };

  useEffect(() => {
    if (loggedUser) {
      const id = loggedUser.id.toString();

      if (story.usersUpVoted.includes(id)) {
        setUpVoted(true);
      } else {
        setUpVoted(false);
      }

      if (story.usersDownVoted.includes(id)) {
        setDownVoted(true);
      } else {
        setDownVoted(false);
      }


    } else {
      setDownVoted(false);
      setUpVoted(false);
    }
  }, [loggedUser, story.usersUpVoted, story.usersDownVoted]);

  return (
    <div className="p-4 ">
      <div className=" w-full lg:max-w-full flex flex-row lg:flex border-2 shadow-xl shadow-stone-400 border-gray-400   lg:border-gray-400 ">
        <div className=" pl-4 pr-4 flex flex-col justify-center  items-center ">
          <button
            className="text-orange-500 hover:text-orange-700 hover:shadow-xl  hover:font-bold"
            onClick={handleUpVote}
          >
            {upVoted ? <BsShiftFill/> : <BsShift />}
            
          </button>
          <p className={` ${upVoted ? 'text-orange-600 font-bold': null } ${downVoted? 'text-blue-600 font-bold' : null}`} >{loading? '...' : story.votes}</p>
          <button className="text-blue-600 hover:text-teal-700 hover:shadow-xl hover:font-bold rotate-180" onClick={handleDownVote}>
            {downVoted ? <BsShiftFill/> : <BsShift />}
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
