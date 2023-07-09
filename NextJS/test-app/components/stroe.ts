"use client"
import { atom } from "recoil";

export const searchwordState = atom({
  key: "searchwordState",
  default: []
})

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    
  }
})