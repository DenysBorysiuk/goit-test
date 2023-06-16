import { useState, useEffect } from "react";
import { getTweets } from "../services/api";
import UserList from "../components/UserList/UserList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ControlsBar from "../components/ControlsBar/ControlsBar";
import toast from "react-hot-toast";
import Loader from "../components/Loader/Loader";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "show all",
    label: "show all",
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getTweets(page, signal);
        setUsers((prev) => [...prev, ...data]);
      } catch (error) {
        if (error.name === "CanceledError") return;
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const onFilter = (users) => {
    if (selectedOption.value === "show all") return users;

    if (selectedOption.value === "following") {
      return users.filter((user) => localStorage.getItem(user.id) === "true");
    }

    if (selectedOption.value === "not following") {
      return users.filter((user) => localStorage.getItem(user.id) === "false");
    }
  };

  const filteredList = onFilter(users);

  return (
    <div>
      <ControlsBar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      {isLoading && <Loader />}
      <UserList users={filteredList} />
      {page === 4 ? null : <LoadMoreBtn loadMore={loadMore} />}
    </div>
  );
};

export default Tweets;
