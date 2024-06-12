import { NextRequest, NextResponse } from "next/server";

const drinks = [
  {
    name: "Lycheetini",
    price: 14,
    summary: "229 Vodka, vermouth lychee juice, fresh lime juice",
  },
  {
    name: "Dragonfruit Tini",
    price: 16,
    summary:
      "Titos, dragon fruit liqueur, Cointreau, fresh lemon juice, simple",
  },
  {
    name: "HIBISCUS RITA",
    price: 16,
    summary:
      "Casamigos Blanco,orange liqueur, hibiscus liqueur, dried hibiscus fresh lime juice",
  },
  {
    name: "SWEET HEAT",
    price: 16,
    summary: "Termana Reposado, muddled jalapeno, fresh lime juice, Agave",
  },
  {
    name: "ATLAS",
    price: 18,
    summary:
      "Herradura Anejo, strawberry, lime, agave, club soda cotton candy candy fluff",
  },
  {
    name: "SMOKEY LOMA",
    price: 16,
    summary: "Mezcal, fresh grapefruit juice, agave, soda",
  },
  {
    name: "SMOKED PEACH OLD FASHION",
    price: 16,
    summary:
      "Angles Envy, creme de peach, bitters, cedarwood plank chard peaches,orange essence",
  },
  {
    name: "PURPLE RAIN",
    price: 18,
    summary:
      "Empress Indigo gin, elderflower liqueur, lavender essence, fresh lemon juice, eggwhite",
  },
  {
    name: "THE 6TH MAN",
    price: 15,
    summary: "D'usse, cointreau, lemon juice, blueberry puree",
  },
  {
    name: "PEACH TEA",
    price: 14,
    summary: "D'usse, peach puree, house made tea",
  },
];

const cocktails = [
  {
    name: "CINNAMON TOAST CRUNCH",
    price: 16,
    summary:
      "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon",
  },
  {
    name: "MOET SPRITZ",
    price: 20,
    summary:
      "Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper",
  },
  {
    name: "BAR 42 MARY",
    price: 14,
    summary:
      "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
  },
];

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  if (params.slug == "drinks") {
    return NextResponse.json(drinks);
  }

  if (params.slug == "cocktails") {
    return NextResponse.json(cocktails);
  }
}
