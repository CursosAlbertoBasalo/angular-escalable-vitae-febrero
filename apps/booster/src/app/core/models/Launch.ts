export interface Launch {
  id: string;
  name: string;
  net: Date;
  status: { name: string };
  location?: string;
  pad: string | { name: string; location: { name: string } };
  agencyName: string;
}
