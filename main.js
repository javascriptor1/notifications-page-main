"use strict";

const notificationsCounter = document.querySelector(".header-div__counter");
const markAllAsRead = document.querySelector(".header-div__readAll");
const contentDivPost = document.querySelectorAll(".content-div__post");

function updateNotificationsCounter() {
  const notifications = document.querySelectorAll(".unread").length;
  notificationsCounter.innerText = notifications;
}

updateNotificationsCounter();

function markAsRead() {
  const allContentDiv = document.querySelectorAll(".content-div");
  //   const readVisible = document.querySelectorAll(".read-visible");
  if (markAllAsRead.textContent === "Mark all as read") {
    markAllAsRead.textContent = "Mark all as unread";
    allContentDiv.forEach((contentDiv) => {
      contentDiv.classList.remove("unread");
    });
    contentDivPost.forEach((content) => {
      content.classList.remove("read-visible");
    });

    updateNotificationsCounter();
  } else {
    markAllAsRead.textContent = "Mark all as read";
    allContentDiv.forEach((contentDiv) => {
      contentDiv.classList.add("unread");
      contentDivPost.forEach((content) => {
        content.classList.add("read-visible");
      });
      updateNotificationsCounter();
    });
  }
}

markAllAsRead.addEventListener("click", markAsRead);
