import React, { useEffect, useMemo } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BulletinContent from "../../templates/BulletinContent";
import * as bulletinsAPI from "../../../lib/api/bulletin";
import * as postsAPI from "../../../lib/api/post";
import { listBulletins } from "../../../modules/bulletins";
import { listPosts } from "../../../modules/posts";

const samples = [
  {
    id: 1,
    title: "공지사항",
    description: "공지사항 입니다 ㅎㅎ"
  }
];

const BulletinContentContainer = ({ location, bulletinId }) => {
  const dispatch = useDispatch();
  const { posts, bulletins } = useSelector(({ posts, bulletins }) => ({
    posts: posts.posts,
    bulletins: bulletins.bulletins
  }));

  const { author, title, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  useEffect(() => {
    bulletinsAPI
      .list()
      .then(res1 => {
        dispatch(listBulletins(res1.data));

        postsAPI
          .listPosts({ author, title, page })
          .then(res2 => {
            const { posts, lastPage } = res2.data;
            dispatch(listPosts({ posts, lastPage }));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [dispatch, location.search]);

  return (
    <BulletinContent
      bulletins={bulletins}
      bulletinId={bulletinId}
      posts={posts}
    />
  );
};

export default withRouter(BulletinContentContainer);
