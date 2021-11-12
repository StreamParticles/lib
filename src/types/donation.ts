import { Option } from "./listing";
import { Id } from "./mongoose";

export enum PeriodFilters {
  ALL_TIME = "ALL_TIME",
  LAST_YEAR = "LAST_YEAR",
  LAST_6_MONTH = "LAST_6_MONTH",
  LAST_3_MONTH = "LAST_3_MONTH",
  LAST_MONTH = "LAST_MONTH",
  LAST_WEEK = "LAST_WEEK",
  LAST_DAY = "LAST_DAY",
  CURRENT_SESSION = "CURRENT_SESSION",
}

type PeriodToLabelType = {
  [PeriodFilters.ALL_TIME]: string;
  [PeriodFilters.LAST_YEAR]: string;
  [PeriodFilters.LAST_6_MONTH]: string;
  [PeriodFilters.LAST_3_MONTH]: string;
  [PeriodFilters.LAST_MONTH]: string;
  [PeriodFilters.LAST_WEEK]: string;
  [PeriodFilters.LAST_DAY]: string;
  [PeriodFilters.CURRENT_SESSION]: string;
};

export const periodToLabel: PeriodToLabelType = {
  [PeriodFilters.ALL_TIME]: "All Time",
  [PeriodFilters.LAST_YEAR]: "Last year",
  [PeriodFilters.LAST_6_MONTH]: "Last 6 months",
  [PeriodFilters.LAST_3_MONTH]: "Last 3 months",
  [PeriodFilters.LAST_MONTH]: "Last month",
  [PeriodFilters.LAST_WEEK]: "Last week",
  [PeriodFilters.LAST_DAY]: "Last day",
  [PeriodFilters.CURRENT_SESSION]: "Current Session",
};

export const PeriodsFilterOptions: Option[] = [
  {
    value: PeriodFilters.ALL_TIME,
    label: periodToLabel[PeriodFilters.ALL_TIME],
  },
  {
    value: PeriodFilters.LAST_YEAR,
    label: periodToLabel[PeriodFilters.LAST_YEAR],
  },
  {
    value: PeriodFilters.LAST_6_MONTH,
    label: periodToLabel[PeriodFilters.LAST_6_MONTH],
  },
  {
    value: PeriodFilters.LAST_3_MONTH,
    label: periodToLabel[PeriodFilters.LAST_3_MONTH],
  },
  {
    value: PeriodFilters.LAST_MONTH,
    label: periodToLabel[PeriodFilters.LAST_MONTH],
  },
  {
    value: PeriodFilters.LAST_WEEK,
    label: periodToLabel[PeriodFilters.LAST_WEEK],
  },
  {
    value: PeriodFilters.LAST_DAY,
    label: periodToLabel[PeriodFilters.LAST_DAY],
  },
  {
    value: PeriodFilters.CURRENT_SESSION,
    label: periodToLabel[PeriodFilters.CURRENT_SESSION],
  },
];

export interface TopDonatorsFilters {
  byPeriod?: boolean;
  senderHerotag?: string;
  period?: PeriodFilters;
  isVisible?: boolean;
  transactionAmount?: number;
  transactionData?: string;
}

export interface LastDonatorsFilters {
  senderHerotag?: string;
  timestamp?: number;
  isVisible?: boolean;
  transactionAmount?: number;
  transactionData?: string;
}

export interface TopDonator {
  senderHerotag?: string;
  senderErdAdress: string;
  receiverHerotag: string;
  receiverErdAdress: string;
  totalDonated: number;
  period: { from: number; to: number };
}

export interface DonationRecap {
  allTime: number;
  thisMonth: number;
  thisStream: number;
}

export interface DonationType {
  _id: Id;
  senderHerotag?: string;
  senderErdAdress: string;
  receiverUserId: Id;
  receiverHerotag: string;
  receiverErdAdress: string;
  amount: number;
  data?: string;
  timestamp: number;
  isAllowed: boolean;
  isVisible: boolean;
}
