export enum Availability {
  EXPERIMENTAL = 1<<0,
  DEPRECATED = 1<<1,
  NON_STANDARD = 1<<2,
  STANDARD = 1<<3,
}

export function availabilityToString(avail: Availability) {
  const output: string[] = [];
  if (avail & Availability.EXPERIMENTAL) output.push("experimental");
  if (avail & Availability.DEPRECATED) output.push("deprecated");
  if (avail & Availability.NON_STANDARD) output.push("non-standard");
  if (avail & Availability.STANDARD) output.push("standard");
  
  return output.join(", ");
}


