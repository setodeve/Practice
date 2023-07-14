"use client"
import { atom } from "recoil";

export const searchresultState = atom({
  key: "searchresultState",
  default: []
})

export const userInfoState = atom({
  key: "userInfoState",
  default: {

  }
})

export const userRepoState = atom({
  key: "userRepoState",
  default: {

  }
})