import * as GameType from "./GameType"
import * as RoundStatus from "./RoundStatus"

export { HouseInitParams } from "./HouseInitParams"
export type {
  HouseInitParamsFields,
  HouseInitParamsJSON,
} from "./HouseInitParams"
export { UserBetParams } from "./UserBetParams"
export type { UserBetParamsFields, UserBetParamsJSON } from "./UserBetParams"
export { UserInitParams } from "./UserInitParams"
export type { UserInitParamsFields, UserInitParamsJSON } from "./UserInitParams"
export { UserSettleParams } from "./UserSettleParams"
export type {
  UserSettleParamsFields,
  UserSettleParamsJSON,
} from "./UserSettleParams"
export { GameConfig } from "./GameConfig"
export type { GameConfigFields, GameConfigJSON } from "./GameConfig"
export { Round } from "./Round"
export type { RoundFields, RoundJSON } from "./Round"
export { History } from "./History"
export type { HistoryFields, HistoryJSON } from "./History"
export { GameType }

export type GameTypeKind =
  | GameType.None
  | GameType.SBFBonk
  | GameType.DoKwonBonk
  | GameType.CarolineEllisonBonk
export type GameTypeJSON =
  | GameType.NoneJSON
  | GameType.SBFBonkJSON
  | GameType.DoKwonBonkJSON
  | GameType.CarolineEllisonBonkJSON

export { RoundStatus }

export type RoundStatusKind =
  | RoundStatus.None
  | RoundStatus.Awaiting
  | RoundStatus.Settled
export type RoundStatusJSON =
  | RoundStatus.NoneJSON
  | RoundStatus.AwaitingJSON
  | RoundStatus.SettledJSON
