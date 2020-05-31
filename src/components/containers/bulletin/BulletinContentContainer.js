import React, { useCallback, useEffect } from "react";
import qs from "qs";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BulletinContent from "../../templates/BulletinContent";
import * as bulletinsAPI from "../../../lib/api/bulletin";
import * as postsAPI from "../../../lib/api/post";
import { listBulletins } from "../../../modules/bulletins";
import { listPosts } from "../../../modules/posts";

const BulletinContentContainer = ({
  location,
  bulletinId,
  history,
  isUser
}) => {
  const dispatch = useDispatch();
  const { posts, bulletins } = useSelector(({ posts, bulletins }) => ({
    posts: posts.posts,
    bulletins: bulletins.bulletins
  }));

  const { author, title, page } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const redirect = useCallback(() => {
    if (!page) history.push(`${location.pathname}?page=1`);
  }, [page, history, location.pathname]);

  useEffect(() => {
    redirect();
  }, [location.pathname, bulletinId, redirect]);

  const getBulletinsList = useCallback(() => {
    bulletinsAPI
      .list()
      .then(res1 => {
        dispatch(listBulletins(res1.data));

        postsAPI
          .listPosts({ author, title, page, bulletinId })
          .then(res2 => {
            const { posts, lastPage } = res2.data;
            dispatch(listPosts({ posts, lastPage }));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, [dispatch, author, bulletinId, page, title]);

  useEffect(() => {
    getBulletinsList();
  }, [dispatch, location.search, getBulletinsList]);

  return (
    <BulletinContent
      isUser
      bulletins={bulletins}
      bulletinId={bulletinId}
      posts={posts}
    />
  );
};

export default withRouter(BulletinContentContainer);
