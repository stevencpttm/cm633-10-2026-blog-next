"use client";

import { useState, useEffect } from "react";

export default function CommentArea(props) {
  const [comment, setComment] = useState("");

  if (!props.post) {
    return null;
  }

  return (
    <div>
      <ul className="ml-6">
        {props.post.comments.map((comment) => {
          return (
            <li className="p-2 border-b border-slate-400" key={comment.id}>
              <p>{comment.content}</p>
              <div className="text-slate-500">
                {comment.createdAt.toLocaleDateString()}{" "}
                {comment.createdAt.toLocaleTimeString()}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="ml-6 mt-2 mr-2 relative">
        <textarea
          className="bg-white rounded w-full min-h-16 p-2"
          value={comment}
          onInput={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button className="absolute bottom-4 right-2 bg-slate-500 px-2 py-1 rounded text-white text-sm">
          Reply
        </button>
      </div>
    </div>
  );
}
