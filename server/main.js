import { Meteor } from "meteor/meteor";
import { CollectionPosts } from "/imports/api/collections.js";

Meteor.startup(async () => {
  if (CollectionPosts.find().count() === 0) {
    CollectionPosts.insert({
      createdAt: new Date(),
      message: "테스트 글입니다.1",
    });
  }
});
