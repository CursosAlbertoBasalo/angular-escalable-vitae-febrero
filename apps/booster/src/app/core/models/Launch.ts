export interface Launch {
  id: string;
  name: string;
  net: Date;
  status: { name: string };
  location?: string;
  pad: { name: string; location: { name: string } } | string;
  agencyName: string;
}
