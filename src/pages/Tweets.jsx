import { useState, useEffect } from "react";
import { getTweets } from "../services/api";
import UserList from "../components/UserList/UserList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ControlsBar from "../components/ControlsBar/ControlsBar";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // const [filter, setFilter] = useState('show all');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const data = await getTweets(page, signal);

        setUsers((prev) => [...prev, ...data]);
      } catch (error) {
        if (error.name === "CanceledError") return;
        console.log(error);
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

  return (
    <div>
      <ControlsBar />
      <UserList users={users} />

      {page === 4 ? null : <LoadMoreBtn loadMore={loadMore} />}
    </div>
  );
};

export default Tweets;
