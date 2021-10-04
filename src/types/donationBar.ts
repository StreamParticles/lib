import { MediaSource, Position } from "types";
import { Id } from "./mongoose";
import { SingleWidget, SingleWidgetPosition } from "./overlays";
import { Text } from "./style";

export enum DonationBarDisplays {
  "VERTICAL" = "VERTICAL",
  "HORIZONTAL" = "HORIZONTAL",
  "CIRCLE" = "CIRCLE",
  "BLUR" = "BLUR",
}

export enum InBarAmountDisplay {
  "EGLD" = "EGLD",
  "PERCENTAGE" = "PERCENTAGE",
  "NONE" = "NONE",
}

export enum LogoAnimations {
  "NONE" = "NONE",
  "BOUNCE" = "BOUNCE",
  "ROTATE" = "ROTATE",
  "SHAKE" = "SHAKE",
}

export enum BarDisplayAnimations {
  "NONE" = "NONE",
  "BOUNCE" = "BOUNCE",
  "LIGHTEN" = "LIGHTEN",
  "CENTER" = "CENTER",
}

export const isCircleDisplay = (
  displaySettings?: CircleDisplay | LineDisplay
): displaySettings is CircleDisplay => {
  return displaySettings?.kind === DonationBarDisplays.CIRCLE;
};

export interface CircleDisplay {
  kind: DonationBarDisplays.CIRCLE;
  width?: number;
  strokeWidth?: number;
}

export const isLineDisplay = (
  displaySettings?: CircleDisplay | LineDisplay
): displaySettings is LineDisplay => {
  return (
    !!displaySettings?.kind &&
    [DonationBarDisplays.VERTICAL, DonationBarDisplays.HORIZONTAL].includes(
      displaySettings?.kind
    )
  );
};

export interface LineDisplay {
  kind: DonationBarDisplays.VERTICAL | DonationBarDisplays.HORIZONTAL;
  width?: number;
  height?: number;
}

interface AmountPart {
  backgroundColor?: string;
  textColor?: string;
}

interface Reaction {
  audio?: { source: [MediaSource] };
  fillSentAmount?: {
    backgroundColor?: string;
  };
  animateLogo?: {
    kind?: LogoAnimations;
  };
  animateBar?: {
    kind?: BarDisplayAnimations;
  };
  duration?: number;
}

export interface DonationBar {
  _id: Id;
  display?: LineDisplay | CircleDisplay;
  amountDisplay?: InBarAmountDisplay;
  goalAmount?: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  donationBarItemPosition: Position;
  cursor?: { source?: [MediaSource]; scale?: number };
  border?: {
    color?: string;
    width?: number;
    radius?: number;
  };
  text?: Text;
  leftToSend?: AmountPart;
  sentAmount?: AmountPart;
  reaction?: Reaction;
}

export type DonationBarWidget = SingleWidget<DonationBar>;

export type DonationBarPosition = SingleWidgetPosition<
  "text" | "donationBarItemPosition"
>;
