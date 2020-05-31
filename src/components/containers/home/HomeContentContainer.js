import React, { useEffect, useState } from "react";
import HomeContent from "../../templates/HomeContent";
import * as bulletinsAPI from "../../../lib/api/bulletin";
import * as postsAPI from "../../../lib/api/post";

const HomeContentContainer = () => {
  const [bulletins, setBulletins] = useState([]);
  const [boardInfos, setBoardInfos] = useState([]);

  useEffect(() => {
    bulletinsAPI
      .list()
      .then(res => setBulletins(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    async function fetchData() {
      var ret = [];
      for (const bulletin of bulletins) {
        const bulletinId = bulletin.id;
        const page = 1;
        try {
          const res = await postsAPI.listPosts({ bulletinId, page });
          const boardInfo = {
            bulletin: bulletin,
            aboutPosts: res.data
          };
          ret = ret.concat(boardInfo);
        } catch (err) {
          console.log(err);
        }
      }
      return ret;
    }
    fetchData().then(res => setBoardInfos(res));
  }, [bulletins]);

  return <HomeContent BoardInfos={boardInfos} />;
};

export default HomeContentContainer;
