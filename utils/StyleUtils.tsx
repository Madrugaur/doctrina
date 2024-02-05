export function parseScssPxValue(scssPxString: string): number {
  if (!scssPxString.endsWith("px")) return undefined;
  return parseInt(scssPxString.substring(0, scssPxString.indexOf("px")));
}