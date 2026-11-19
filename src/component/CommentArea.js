export default function CommentArea(props) {
  if (!props.post) {
    return null;
  }

  return (
    <ul className="ml-6">
      {props.post.comments.map((comment) => {
        return (
          <li className="p-2 border-b border-slate-400" key={comment.id}>
            <p>{comment.content}</p>
            <span className="text-slate-500">
              {comment.createdAt.toLocaleDateString()}{" "}
              {comment.createdAt.toLocaleTimeString()}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
