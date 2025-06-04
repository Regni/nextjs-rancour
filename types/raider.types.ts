export interface RaiderType {
  name: string;
  rank: number;
  class: string;
  spec: string;
  role: string;
  raiderioUpdate: string;
  avatarUrl: string;
}

export interface WeeklyEntry {
  id: string;
  raiderId: string;
  season: number;
  week: number;
  runUrls: string[];
  completed: boolean;
  lastUpdated: string; // or `Date` if parsed
  raider: RaiderType;
}
