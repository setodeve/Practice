"use client"
import { atom } from "recoil";

export const testState = atom({
  key: "textState",
  default: {
    id:null,
    name:"setodeve"
  }
})