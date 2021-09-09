import { AnimatedText } from "types";
import {
  BaseVariationType,
  WithVariationsWidget,
  WithVariationWidgetPosition,
} from "./overlays";
import { Audio, Image, Text } from "./style";

export interface AlertVariation extends BaseVariationType {
  _id: string;
  color?: string;
  requiredAmount?: number;
  chances?: number;
  duration?: number;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  audio?: Audio;
  image?: Image;
  text?: AnimatedText;
}

export type AlertsSetWidget = WithVariationsWidget<AlertVariation>;

export type AlertsSetWidgetPosition = WithVariationWidgetPosition<
  "image" | "text"
>;
