
export const LOADING_SCREEN = "LOADING_SCREEN";
export const LOADING_COMPLETE = "LOADING_COMPLETE";

export const loadingScreen = () => ({
  type: LOADING_SCREEN,
});

export const loadingComplete = () => ({
  type: LOADING_COMPLETE,
});
