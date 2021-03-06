import { Id } from "./mongoose";
import {
  BaseVariationType,
  WithVariationsWidget,
  WithVariationWidgetPosition,
} from "./overlays";
import { AnimatedText, Audio, Image } from "./style";

export interface AlertVariation extends BaseVariationType {
  _id: Id;
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
