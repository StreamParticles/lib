export enum Themes {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export enum TextAligns {
  LEFT = "LEFT",
  CENTER = "CENTER",
  RIGHT = "RIGHT",
}

interface LeftTop {
  left: number;
  top: number;
}

interface WidthHeight {
  width: number;
  height: number;
}

export type Position = LeftTop & WidthHeight;

export interface Text extends Position {
  align: TextAligns;
  bold: boolean;
  content: string;
  fontFamily: string;
  fontSize: number;
  italic: boolean;
  underlined: boolean;
  fontColor: string;
  lineHeight?: number;
  wordSpacing?: number;
  letterSpacing?: number;
  stroke: { color: string; width: number };
}

export interface AnimatedText extends Text {
  animation: Animation;
}

export interface MediaSource {
  name: string;
  response: string;
  status: "done" | "uploading";
  uid: string;
  url: string;
}

export interface Image extends Position {
  source: [MediaSource];
  animation: Animation;
}

export interface Audio {
  source: [MediaSource];
  delay: number;
  offset: number;
}

export enum EnterAnimationKinds {
  "SLIDE_UP" = "SLIDE_UP_ENTER",
  "SLIDE_DOWN" = "SLIDE_DOWN_ENTER",
  "SLIDE_LEFT" = "SLIDE_LEFT_ENTER",
  "SLIDE_RIGHT" = "SLIDE_RIGHT_ENTER",
  "FADE_IN" = "FADE_IN",
  "GROW" = "GROW",
}

export enum ExitAnimationKinds {
  "SLIDE_UP" = "SLIDE_UP_EXIT",
  "SLIDE_DOWN" = "SLIDE_DOWN_EXIT",
  "SLIDE_LEFT" = "SLIDE_LEFT_EXIT",
  "SLIDE_RIGHT" = "SLIDE_RIGHT_EXIT",
  "FADE_OUT" = "FADE_OUT",
  "SHRINK" = "SHRINK",
}

export interface Animation {
  enter?: { kind?: EnterAnimationKinds; duration?: number; delay?: number };
  exit?: { kind?: ExitAnimationKinds; duration?: number; offset?: number };
}
