import { ObjectId } from "mongoose";
import { IftttParticleData } from "./ifttt";
import { OverlayData } from "./overlays";

export enum UserAccountStatus {
  "VERIFIED" = "VERIFIED",
  "PENDING_VERIFICATION" = "PENDING_VERIFICATION",
  "PENDING_EDIT_PASSWORD_VERIFICATION" = "PENDING_EDIT_PASSWORD_VERIFICATION",
}

export interface UserType {
  _id: string | ObjectId;
  password?: string;
  pendingPassword?: string;
  herotag: string;
  erdAddress: string;
  status: UserAccountStatus;
  verificationReference?: string;
  passwordEditionVerificationReference?: string;
  verificationStartDate?: string;
  passwordEditionVerificationStartDate?: string;
  integrations?: {
    ifttt?: IftttParticleData;
    overlays?: OverlayData[];
    minimumRequiredAmount?: number;
    tinyAmountWording?: {
      ceilAmount: number;
      wording: string;
    };
  };
  donationData?: {
    donationGoal?: {
      sentAmountAtDate: number;
      lastResetDate?: Date;
    };
  };
  moderation?: {
    bannedWords?: string[];
    bannedAddresses?: string[];
    vipAddresses: string[];
  };
  isStreaming?: boolean;
  streamingStartDate?: Date | null;
  referralLink?: string;
  herotagQrCodePath?: string;
}
