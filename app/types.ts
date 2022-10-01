export interface BaseStats {
  name: string;
  value: number;
}

export interface APIReturnStats {
  base_stat: number;
  stat: {
    name: string;
  };
}
