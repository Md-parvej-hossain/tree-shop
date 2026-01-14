import React from 'react';
import { FaStar } from 'react-icons/fa';

const ArticleCard = ({ comment }) => {
  return (
    <div className="rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-800">
      <img
        src={comment.userImage}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-3">
        <div className="flex flex-wrap items-center pt-3 pb-1">
          <div className="flex items-center justify-around gap-3">
            <span className="text-lg font-bold">
              Liked by
              <span className="font-semibold"> {comment.userName}</span>
            </span>
            <span className="text-md font-medium">
              <span className="font-semibold flex items-center gap-1  ml-1">
                Rating : {comment.rating} <FaStar className="text-orange-400" />
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm">
            <span className="text-base font-semibold">l</span>
            {comment.comment}
          </p>
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full py-0.5 dark:bg- border-none rounded text-sm pl-0 dark:text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
