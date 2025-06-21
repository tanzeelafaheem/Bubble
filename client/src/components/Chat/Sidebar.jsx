import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";
import { CiSearch } from "react-icons/ci";

const Sidebar = () => {
  const id = localStorage.getItem("userId");
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const [activeTab, setActiveTab] = useState("friends");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Fetch friends
  const getFriends = async () => {
    try {
      const response = await axiosInstance.get(`/user/get-friends/${id}`);
      setFriends(response.data.friends);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Fetch friend requests
  const getRequests = async () => {
    try {
      const response = await axiosInstance.get(`/user/get-requests/${id}`);
      setRequests(response.data.friendRequests);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Accept Requests
  const handleAccept = async (requestId) => {
    try {
      await axiosInstance.post(`/user/accept-request/`, {
        fromUserId: requestId,
        toUserId: id,
      });
      toast.success("Friend request accepted!");
      getFriends();
      getRequests();
    } catch (error) {
      console.error(error);
      toast.error("Failed to accept request");
    }
  };

  // Send Friend Request from search
  const sendFriendRequest = async (receiverId) => {
    try {
      await axiosInstance.post(`/user/send-request`, {
        fromUserId: id,
        toUserId: receiverId,
      });
      toast.success("Friend request sent!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send friend request");
    }
  };

  // Search feature
  const searchUsers = async () => {
    try {
      const response = await axiosInstance.get(
        `/user/search?username=${search}`
      );
      setSearchResults(response.data.users);
    } catch (error) {
      console.error(error);
      toast.error("Search failed");
    }
  };

  useEffect(() => {
    if (id) {
      getFriends();
      getRequests();
    }
  }, [id]);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (search.trim()) {
        searchUsers();
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [search]);

  return (
    <div className="w-72 bg-white h-full border-r border-gray-200 flex flex-col">
      {/* Search bar */}
      <div className="p-4">
        <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <CiSearch size={20} className="text-gray-600" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-3 text-center font-semibold ${
            activeTab === "friends"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
        <button
          className={`flex-1 py-3 text-center font-semibold ${
            activeTab === "notifications"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>

      {/* Main Content */}
      <div className="overflow-y-auto flex-1">
        {/* Search Results */}
        {search.trim() && searchResults.length > 0 ? (
          <div>
            {searchResults.map((user) => {
  const isSelf = user._id === id;
  const isFriend = friends.some((f) => f._id === user._id);

  return (
    <div
      key={user._id}
      className="flex items-center justify-between gap-2 px-4 py-3 hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        <img
          src={user.profilePic || "/default-avatar.png"}
          alt={user.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-sm font-semibold text-black">
          {user.username}
        </p>
      </div>

      {!isSelf && !isFriend && (
        <button
          onClick={() => sendFriendRequest(user._id)}
          className="text-sm px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      )}
    </div>
  );
})}

          </div>
        ) : activeTab === "friends" ? (
          <div>
            {friends.length > 0 ? (
              friends.map((friend, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={friend.profilePic || "/default-avatar.png"}
                    alt={friend.username}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-black">
                      {friend.username}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="px-4 py-6 text-sm text-gray-500">
                No friends found.
              </p>
            )}
          </div>
        ) : (
          <div>
            {requests.length > 0 ? (
              requests.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2 px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.profilePic || "/default-avatar.png"}
                      alt={item.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-sm font-semibold text-black">
                      {item.username}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAccept(item._id)}
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Accept
                  </button>
                </div>
              ))
            ) : (
              <p className="px-4 py-6 text-sm text-gray-500">
                No new friend requests.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
