import {
  AlertsSetWidget,
  AlertsSetWidgetPosition,
  AlertVariation,
} from "./alerts";
import {
  DonationBar,
  DonationBarPosition,
  DonationBarWidget,
} from "./donationBar";
import { Id } from "./mongoose";
import { Position } from "./style";

export type DrawerData = {
  kind: WidgetsKinds.ALERTS;
  data: WithVariationsWidget<any>;
};

export type ModalData =
  | { kind: ModalKinds.ALERT_VARIATION; data: AlertVariation }
  | { kind: ModalKinds.DONATION_BAR; data: DonationBar };

export enum ModalKinds {
  "ALERT_VARIATION" = "ALERT_VARIATION",
  "DONATION_BAR" = "DONATION_BAR",
  "DONATIONS_LISTING" = "DONATIONS_LISTING",
  "PARTICLES_FALLS" = "PARTICLES_FALLS",
  "NFT" = "NFT",
}

export enum WidgetsKinds {
  "ALERTS" = "ALERTS",
  "DONATION_BAR" = "DONATION_BAR",
  "DONATIONS_LISTING" = "DONATIONS_LISTING",
  "PARTICLES_FALLS" = "PARTICLES_FALLS",
  "NFTs" = "NFTs",
  "CUSTOM_WIDGET" = "CUSTOM_WIDGET",
}

enum TriggerKinds {
  REQUIRED_AMOUNT = "REQUIRED_AMOUNT",
  GOAL_STEP_REACHED = "GOAL_STEP_REACHED",
  VIP_DONATION = "VIP_DONATION",
}

interface RequiredAmountTrigger {
  kind: TriggerKinds.REQUIRED_AMOUNT;
  amount: number;
}

interface GoalStepReachedTrigger {
  kind: TriggerKinds.GOAL_STEP_REACHED;
  mode: "percent" | "absolute";
  step: number;
}

interface VipDonation {
  kind: TriggerKinds.VIP_DONATION;
}

interface TempWidget {
  kind: WidgetsKinds;
}

export interface WidgetType extends TempWidget {
  _id: Id;
  name: string;
  isActive: boolean;
}

export interface WidgetPositionType extends TempWidget {
  _id: Id;
}

export interface BaseVariationType {
  _id: Id;
  name: string;
  // TO-DO remove "?" to make mandatory
  trigger?: RequiredAmountTrigger | GoalStepReachedTrigger | VipDonation;

  // TO-DO remove "?" to make mandatory
  requiredAmount?: number;
  chances?: number;
}

export interface WithVariationsWidget<T extends BaseVariationType>
  extends WidgetType {
  variations: T[];
}

type ElementPosition = Partial<Position>;

export type WithVariationWidgetPosition<ChildrenFields extends string> =
  WidgetPositionType & {
    variations?: (ElementPosition & {
      _id: Id;
    } & Partial<Record<ChildrenFields, ElementPosition>>)[];
  };

export const hasVariations = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  widget: any & WidgetType
): widget is WithVariationsWidget<BaseVariationType> => {
  return !!(widget as WithVariationsWidget<BaseVariationType>).variations;
};

export type SingleWidget<T> = WidgetType & {
  data: T;
};

export type SingleWidgetPosition<ChildrenFields extends string> =
  WidgetPositionType & {
    data: ElementPosition & {
      _id: Id;
    } & Partial<Record<ChildrenFields, ElementPosition>>;
  };

export type Widget = DonationBarWidget | AlertsSetWidget;
export type WidgetPosition = DonationBarPosition | AlertsSetWidgetPosition;

export interface OverlayData {
  _id: Id;
  name: string;
  color: string;
  generatedLink: string;
  widgets: Widget[];
}
