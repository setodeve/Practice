"use client"
import { atom } from "recoil";
import 'dotenv/config'

export const testState = atom({
  key: "textState",
  default: {
    id:null,
    name:"setodeve"
  }
})

export const githubState = atom({
  key: "gitState",
  default: {
    token:process.env.GITHUB_TOKEN,
    url:process.env.GITHUB_BASEURL
  }
})