import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostlist = currPostList;
  if (action.type === "DELETE_POST") {
    newPostlist = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostlist = [action.payload, ...currPostList];
  }
  return newPostlist;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: postTitle,
        body: postBody,
        rection: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mombai",
    body: "Hey, Friends im going to Mumai for my vactions, Hope to enjoy a lot. Peace out.",
    rection: 2,
    userId: "user-9",
    tags: ["vaction", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho gay bhai",
    body: "2 saal ki masti k bad bhi ho gay he pass hard to blieve",
    rection: 15,
    userId: "user-9",
    tags: ["postgraduating", "Unbilevabel"],
  },
];
export default PostListProvider;
