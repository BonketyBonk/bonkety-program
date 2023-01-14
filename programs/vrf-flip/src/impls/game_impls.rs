use crate::*;
use anchor_lang::prelude::*;

impl GameType {
    pub fn from_u32(val: u32) -> Result<GameType> {
        match val {
            0 => Ok(GameType::None),
            1 => Ok(GameType::SBFBonk),
            2 => Ok(GameType::DoKwonBonk),
            3 => Ok(GameType::CarolineEllisonBonk),
            _ => Err(error!(VrfFlipError::InvalidGameType)),
        }
    }

    pub fn get_game_config(&self) -> Result<GameConfig> {
        match self {
            GameType::SBFBonk => Ok(GameConfig {
                num_vrf_requests: 1,
                min: 1,
                max: 10,
                payout_multiplier: 10,
            }),
            GameType::DoKwonBonk => Ok(GameConfig {
                num_vrf_requests: 1,
                min: 1,
                max: 4,
                payout_multiplier: 4,
            }),
            GameType::CarolineEllisonBonk => Ok(GameConfig {
                num_vrf_requests: 1,
                min: 1,
                max: 2,
                payout_multiplier: 2,
            }),
            _ => Err(error!(VrfFlipError::InvalidGameType)),
        }
    }
}

impl Default for GameType {
    fn default() -> GameType {
        GameType::None
    }
}
