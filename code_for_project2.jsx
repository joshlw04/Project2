httpGetPosts() {
  const url = 'https://jtysk-react-project2.firebaseio.com/complaints.json';
  request.get(url).then((response) => {  // When the response is received...
   const postsData = response.body;  // Grab the data
   console.log(response);
   let posts = [];
   if (postsData) {
     posts = Object.keys(postsData).map((id) => {  // conver their data.... into nice clean objects
       const individualPostData = postsData[id];  // grabbing indiviudal data record
       return {  // ... and making it NICE!
         id,  // <- same as   id: id
         author: individualPostData.author,
         content: individualPostData.content,
       };
     });
   }
   this.setState({ posts });
 });
}


httpDeletePost(id) {
  const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
  request.del(url).then(() => {
    this.httpGetPosts();
  });
}

/////
const complaintView = this.props.posts.map((post, idx) => {  // for each of the posts... give an li
  return (
    <li key={idx}>
      <Post
        handleDelete={this.props.handleDelete}
        handlePublish={this.props.handlePublish}
        content={post.content}
        author={post.author}
        likeCount={post.likeCount}
        id={post.id}
      />
    </li>
  );
});
return (
  <ul>
    {postElements}
  </ul>
);
