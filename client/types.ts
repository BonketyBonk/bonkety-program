import * as anchor from "@project-serum/anchor";
// import { SwitchboardVrfFlip } from "../target/types/switchboard_vrf_flip";
// export * from "../target/types/switchboard_vrf_flip";

export type FlipProgram = anchor.Program;
// | anchor.Program<SwitchboardVrfFlip>;

/**
 * An enum representing all known permission types for Switchboard.
 */
export enum GameTypeEnum {
  NONE = "none",
  SBFBonk = "sbfBonk",
  DoKwonBonk = "doKwonBonk",
  CarolineEllisonBonk = "carolineEllisonBonk",
}
export enum GameTypeValue {
  NONE = 0,
  SBFBonk = 1,
  DoKwonBonk = 2,
  CarolineEllisonBonk = 3,
}

export const convertGameType = (gameType: any): GameTypeEnum => {
  if ("kind" in gameType) {
    switch (gameType.kind) {
      case "None":
        return GameTypeEnum.NONE;
      case "SBFBonk":
        return GameTypeEnum.SBFBonk;
      case "DoKwonBonk":
        return GameTypeEnum.DoKwonBonk;
      case "CarolineEllisonBonk":
        return GameTypeEnum.CarolineEllisonBonk;
    }
  }
  if ("none" in gameType) {
    return GameTypeEnum.NONE;
  }
  if ("sbfBonk" in gameType) {
    return GameTypeEnum.SBFBonk;
  }
  if ("doKwonBonk" in gameType) {
    return GameTypeEnum.DoKwonBonk;
  }
  if ("carolineEllisonBonk" in gameType) {
    return GameTypeEnum.CarolineEllisonBonk;
  }

  console.log(gameType);
  console.log(typeof gameType);

  throw new Error(`Failed to match game type enum`);
};
