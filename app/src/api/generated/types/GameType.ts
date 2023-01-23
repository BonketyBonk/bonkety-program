import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@project-serum/borsh"

export interface NoneJSON {
  kind: "None"
}

export class None {
  static readonly discriminator = 0
  static readonly kind = "None"
  readonly discriminator = 0
  readonly kind = "None"

  toJSON(): NoneJSON {
    return {
      kind: "None",
    }
  }

  toEncodable() {
    return {
      None: {},
    }
  }
}

export interface SBFBonkJSON {
  kind: "SBFBonk"
}

export class SBFBonk {
  static readonly discriminator = 1
  static readonly kind = "SBFBonk"
  readonly discriminator = 1
  readonly kind = "SBFBonk"

  toJSON(): SBFBonkJSON {
    return {
      kind: "SBFBonk",
    }
  }

  toEncodable() {
    return {
      SBFBonk: {},
    }
  }
}

export interface DoKwonBonkJSON {
  kind: "DoKwonBonk"
}

export class DoKwonBonk {
  static readonly discriminator = 2
  static readonly kind = "DoKwonBonk"
  readonly discriminator = 2
  readonly kind = "DoKwonBonk"

  toJSON(): DoKwonBonkJSON {
    return {
      kind: "DoKwonBonk",
    }
  }

  toEncodable() {
    return {
      DoKwonBonk: {},
    }
  }
}

export interface CarolineEllisonBonkJSON {
  kind: "CarolineEllisonBonk"
}

export class CarolineEllisonBonk {
  static readonly discriminator = 3
  static readonly kind = "CarolineEllisonBonk"
  readonly discriminator = 3
  readonly kind = "CarolineEllisonBonk"

  toJSON(): CarolineEllisonBonkJSON {
    return {
      kind: "CarolineEllisonBonk",
    }
  }

  toEncodable() {
    return {
      CarolineEllisonBonk: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.GameTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("None" in obj) {
    return new None()
  }
  if ("SBFBonk" in obj) {
    return new SBFBonk()
  }
  if ("DoKwonBonk" in obj) {
    return new DoKwonBonk()
  }
  if ("CarolineEllisonBonk" in obj) {
    return new CarolineEllisonBonk()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.GameTypeJSON): types.GameTypeKind {
  switch (obj.kind) {
    case "None": {
      return new None()
    }
    case "SBFBonk": {
      return new SBFBonk()
    }
    case "DoKwonBonk": {
      return new DoKwonBonk()
    }
    case "CarolineEllisonBonk": {
      return new CarolineEllisonBonk()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "None"),
    borsh.struct([], "SBFBonk"),
    borsh.struct([], "DoKwonBonk"),
    borsh.struct([], "CarolineEllisonBonk"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
