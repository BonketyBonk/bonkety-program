export type SwitchboardVrfFlip = {
  "version": "0.1.0",
  "name": "switchboard_vrf_flip",
  "instructions": [
    {
      "name": "houseInit",
      "accounts": [
        {
          "name": "house",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "switchboardQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "houseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "HouseInitParams"
          }
        }
      ]
    },
    {
      "name": "userInit",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "house",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UserInitParams"
          }
        }
      ]
    },
    {
      "name": "userBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "house",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "houseVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleQueue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "queueAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataBuffer",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "permission",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "vrfEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardProgramState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vrfPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "flipPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UserBetParams"
          }
        }
      ]
    },
    {
      "name": "userSettle",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "house",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "houseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UserSettleParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "houseState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "houseVault",
            "type": "publicKey"
          },
          {
            "name": "switchboardQueue",
            "type": "publicKey"
          },
          {
            "name": "switchboardMint",
            "type": "publicKey"
          },
          {
            "name": "ebuf",
            "type": {
              "array": [
                "u8",
                1024
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "house",
            "type": "publicKey"
          },
          {
            "name": "escrow",
            "type": "publicKey"
          },
          {
            "name": "rewardAddress",
            "type": "publicKey"
          },
          {
            "name": "vrf",
            "type": "publicKey"
          },
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          },
          {
            "name": "currentRound",
            "type": {
              "defined": "Round"
            }
          },
          {
            "name": "lastAirdropRequestSlot",
            "type": "u64"
          },
          {
            "name": "ebuf",
            "type": {
              "array": [
                "u8",
                1024
              ]
            }
          },
          {
            "name": "history",
            "type": {
              "defined": "History"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "HouseInitParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "UserBetParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameType",
            "type": "u32"
          },
          {
            "name": "userGuess",
            "type": "u32"
          },
          {
            "name": "betAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UserInitParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "UserSettleParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "GameConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "numVrfRequests",
            "type": "u8"
          },
          {
            "name": "min",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          },
          {
            "name": "payoutMultiplier",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Round",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "roundId",
            "type": "u128"
          },
          {
            "name": "status",
            "type": {
              "defined": "RoundStatus"
            }
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "gameType",
            "type": {
              "defined": "GameType"
            }
          },
          {
            "name": "gameConfig",
            "type": {
              "defined": "GameConfig"
            }
          },
          {
            "name": "guess",
            "type": "u32"
          },
          {
            "name": "result",
            "type": "u32"
          },
          {
            "name": "requestSlot",
            "type": "u64"
          },
          {
            "name": "requestTimestamp",
            "type": "i64"
          },
          {
            "name": "settleSlot",
            "type": "u64"
          },
          {
            "name": "settleTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "History",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "idx",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          },
          {
            "name": "rounds",
            "type": {
              "array": [
                {
                  "defined": "Round"
                },
                48
              ]
            }
          }
        ]
      }
    },
    {
      "name": "GameType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "SBFBonk"
          },
          {
            "name": "DoKwonBonk"
          },
          {
            "name": "CarolineEllisonBonk"
          }
        ]
      }
    },
    {
      "name": "RoundStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Awaiting"
          },
          {
            "name": "Settled"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "UserBetPlaced",
      "fields": [
        {
          "name": "roundId",
          "type": "u128",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameType",
          "type": {
            "defined": "GameType"
          },
          "index": false
        },
        {
          "name": "betAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "guess",
          "type": "u32",
          "index": false
        },
        {
          "name": "slot",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "UserBetSettled",
      "fields": [
        {
          "name": "roundId",
          "type": "u128",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "userWon",
          "type": "bool",
          "index": false
        },
        {
          "name": "gameType",
          "type": {
            "defined": "GameType"
          },
          "index": false
        },
        {
          "name": "betAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "escrowChange",
          "type": "u64",
          "index": false
        },
        {
          "name": "guess",
          "type": "u32",
          "index": false
        },
        {
          "name": "result",
          "type": "u32",
          "index": false
        },
        {
          "name": "slot",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidInitialVrfCounter",
      "msg": "VRF Account counter should be 0 for a new lottery"
    },
    {
      "code": 6001,
      "name": "InvalidVrfAuthority",
      "msg": "VRF Account authority should be the lottery Pubkey"
    },
    {
      "code": 6002,
      "name": "InvalidSwitchboardAccount",
      "msg": "Provided account is not owned by the switchboard program"
    },
    {
      "code": 6003,
      "name": "IncorrectVrfCounter",
      "msg": "VRF counter does not match the expected round id"
    },
    {
      "code": 6004,
      "name": "InvalidGameType",
      "msg": "Failed to match the game type"
    },
    {
      "code": 6005,
      "name": "CurrentRoundStillActive",
      "msg": "Current round is still active"
    },
    {
      "code": 6006,
      "name": "CurrentRoundAlreadyClosed",
      "msg": "Current round has already settled"
    },
    {
      "code": 6007,
      "name": "InvalidBet",
      "msg": "Invalid bet"
    },
    {
      "code": 6008,
      "name": "OracleQueueRequiresPermissions",
      "msg": "Switchboard queue requires VRF permissions to request randomness"
    },
    {
      "code": 6009,
      "name": "OracleQueueMismatch",
      "msg": "VRF account belongs to the incorrect oracle queue"
    },
    {
      "code": 6010,
      "name": "AirdropRequestedTooSoon",
      "msg": "User requested an airdrop too soon"
    },
    {
      "code": 6011,
      "name": "UserTokenBalanceHealthy",
      "msg": "User has enough funds and does not require an airdrop"
    },
    {
      "code": 6012,
      "name": "MaxBetAmountExceeded",
      "msg": "Max bet exceeded"
    },
    {
      "code": 6013,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds to request randomness"
    },
    {
      "code": 6014,
      "name": "FlipRequestedTooSoon",
      "msg": "User can flip once every 10 seconds"
    }
  ]
};

export const IDL: SwitchboardVrfFlip = {
  "version": "0.1.0",
  "name": "switchboard_vrf_flip",
  "instructions": [
    {
      "name": "houseInit",
      "accounts": [
        {
          "name": "house",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "switchboardQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "houseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "HouseInitParams"
          }
        }
      ]
    },
    {
      "name": "userInit",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "house",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rewardAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UserInitParams"
          }
        }
      ]
    },
    {
      "name": "userBet",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "house",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "houseVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "oracleQueue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "queueAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "dataBuffer",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "permission",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "CHECK"
          ]
        },
        {
          "name": "vrfEscrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardProgramState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "switchboardProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vrfPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "flipPayer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recentBlockhashes",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UserBetParams"
          }
        }
      ]
    },
    {
      "name": "userSettle",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "house",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "escrow",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAddress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "houseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vrf",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "UserSettleParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "houseState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "houseVault",
            "type": "publicKey"
          },
          {
            "name": "switchboardQueue",
            "type": "publicKey"
          },
          {
            "name": "switchboardMint",
            "type": "publicKey"
          },
          {
            "name": "ebuf",
            "type": {
              "array": [
                "u8",
                1024
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "house",
            "type": "publicKey"
          },
          {
            "name": "escrow",
            "type": "publicKey"
          },
          {
            "name": "rewardAddress",
            "type": "publicKey"
          },
          {
            "name": "vrf",
            "type": "publicKey"
          },
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          },
          {
            "name": "currentRound",
            "type": {
              "defined": "Round"
            }
          },
          {
            "name": "lastAirdropRequestSlot",
            "type": "u64"
          },
          {
            "name": "ebuf",
            "type": {
              "array": [
                "u8",
                1024
              ]
            }
          },
          {
            "name": "history",
            "type": {
              "defined": "History"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "HouseInitParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "UserBetParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameType",
            "type": "u32"
          },
          {
            "name": "userGuess",
            "type": "u32"
          },
          {
            "name": "betAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "UserInitParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "switchboardStateBump",
            "type": "u8"
          },
          {
            "name": "vrfPermissionBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "UserSettleParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "GameConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "numVrfRequests",
            "type": "u8"
          },
          {
            "name": "min",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          },
          {
            "name": "payoutMultiplier",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Round",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "roundId",
            "type": "u128"
          },
          {
            "name": "status",
            "type": {
              "defined": "RoundStatus"
            }
          },
          {
            "name": "betAmount",
            "type": "u64"
          },
          {
            "name": "gameType",
            "type": {
              "defined": "GameType"
            }
          },
          {
            "name": "gameConfig",
            "type": {
              "defined": "GameConfig"
            }
          },
          {
            "name": "guess",
            "type": "u32"
          },
          {
            "name": "result",
            "type": "u32"
          },
          {
            "name": "requestSlot",
            "type": "u64"
          },
          {
            "name": "requestTimestamp",
            "type": "i64"
          },
          {
            "name": "settleSlot",
            "type": "u64"
          },
          {
            "name": "settleTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "History",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "idx",
            "type": "u32"
          },
          {
            "name": "max",
            "type": "u32"
          },
          {
            "name": "rounds",
            "type": {
              "array": [
                {
                  "defined": "Round"
                },
                48
              ]
            }
          }
        ]
      }
    },
    {
      "name": "GameType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "SBFBonk"
          },
          {
            "name": "DoKwonBonk"
          },
          {
            "name": "CarolineEllisonBonk"
          }
        ]
      }
    },
    {
      "name": "RoundStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "None"
          },
          {
            "name": "Awaiting"
          },
          {
            "name": "Settled"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "UserBetPlaced",
      "fields": [
        {
          "name": "roundId",
          "type": "u128",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameType",
          "type": {
            "defined": "GameType"
          },
          "index": false
        },
        {
          "name": "betAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "guess",
          "type": "u32",
          "index": false
        },
        {
          "name": "slot",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    },
    {
      "name": "UserBetSettled",
      "fields": [
        {
          "name": "roundId",
          "type": "u128",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "userWon",
          "type": "bool",
          "index": false
        },
        {
          "name": "gameType",
          "type": {
            "defined": "GameType"
          },
          "index": false
        },
        {
          "name": "betAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "escrowChange",
          "type": "u64",
          "index": false
        },
        {
          "name": "guess",
          "type": "u32",
          "index": false
        },
        {
          "name": "result",
          "type": "u32",
          "index": false
        },
        {
          "name": "slot",
          "type": "u64",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "i64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidInitialVrfCounter",
      "msg": "VRF Account counter should be 0 for a new lottery"
    },
    {
      "code": 6001,
      "name": "InvalidVrfAuthority",
      "msg": "VRF Account authority should be the lottery Pubkey"
    },
    {
      "code": 6002,
      "name": "InvalidSwitchboardAccount",
      "msg": "Provided account is not owned by the switchboard program"
    },
    {
      "code": 6003,
      "name": "IncorrectVrfCounter",
      "msg": "VRF counter does not match the expected round id"
    },
    {
      "code": 6004,
      "name": "InvalidGameType",
      "msg": "Failed to match the game type"
    },
    {
      "code": 6005,
      "name": "CurrentRoundStillActive",
      "msg": "Current round is still active"
    },
    {
      "code": 6006,
      "name": "CurrentRoundAlreadyClosed",
      "msg": "Current round has already settled"
    },
    {
      "code": 6007,
      "name": "InvalidBet",
      "msg": "Invalid bet"
    },
    {
      "code": 6008,
      "name": "OracleQueueRequiresPermissions",
      "msg": "Switchboard queue requires VRF permissions to request randomness"
    },
    {
      "code": 6009,
      "name": "OracleQueueMismatch",
      "msg": "VRF account belongs to the incorrect oracle queue"
    },
    {
      "code": 6010,
      "name": "AirdropRequestedTooSoon",
      "msg": "User requested an airdrop too soon"
    },
    {
      "code": 6011,
      "name": "UserTokenBalanceHealthy",
      "msg": "User has enough funds and does not require an airdrop"
    },
    {
      "code": 6012,
      "name": "MaxBetAmountExceeded",
      "msg": "Max bet exceeded"
    },
    {
      "code": 6013,
      "name": "InsufficientFunds",
      "msg": "Insufficient funds to request randomness"
    },
    {
      "code": 6014,
      "name": "FlipRequestedTooSoon",
      "msg": "User can flip once every 10 seconds"
    }
  ]
};
