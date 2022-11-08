import React from "react";
import ArticleItem from "./ArticleItem";

export default function RecentlyArticles() {
  return (
    <div className="flex flex-col gap-16">
      <ArticleItem />
      <ArticleItem />
    </div>
  );
}
