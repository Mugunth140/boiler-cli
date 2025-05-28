import chalkAnimation from "chalk-animation";

const sleep = (ms = 2000) => new Promise(res => setTimeout(res, ms));
export const InitLoader = async (params) => {
  const loader = chalkAnimation.radar(params);
  await sleep();
  loader.stop();
};

export const ResLoader = async (text) => {
  const loader = chalkAnimation.karaoke(text);
  await sleep();
  loader.stop();
};