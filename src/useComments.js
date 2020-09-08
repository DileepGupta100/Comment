let randomId = 1;
const useComments = (articleId, content) => {
  const allComments = { [articleId]: { content, children: {} } };
  return {
    allComments: { ...allComments },
    createComment: (id, content) => {
      const parent = allComments[id];
      if (parent)
        parent.children[randomId++] = { parent: id, content, children: {} };
      else {
        allComments[id] = { content, children: {} };
      }
      console.log("id genrated: ", randomId);
    }
  };
};

export default useComments;
