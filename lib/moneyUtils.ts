export function displayPrice(
  priceInCents: number | undefined = 0,
  hideCents: boolean = false
): string {
  if (priceInCents !== 0) {
    priceInCents /= 100;
  }
  // return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3
  return (
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD", // TODO: Modify
      // maximumSignificantDigits: 2,
      maximumFractionDigits: hideCents ? 0 : undefined,
    }).format(priceInCents) + ""
  );
  // return '$' + Math.round((priceInCents + Number.EPSILON) * 100) / 100;
}
