from playwright.sync_api import sync_playwright
import time
import json
import os

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    print("🌐 Laddar sida...")
    page.goto("https://www.systembolaget.se/sortiment/cider-blanddrycker/blanddryck/?sortera-pa=Price&i-riktning=Ascending", timeout=60000)

    # Popup: Ålder
    try:
        page.click("text=Jag har fyllt 20 år", timeout=2500)
        print("✅ Klickade åldersverifiering")
    except:
        print("ℹ️ Ingen ålderspopup")

    # Popup: Kakor
    try:
        page.click("text=Slå på och acceptera alla kakor", timeout=2500)
        print("✅ Klickade cookie-popup")
    except:
        print("ℹ️ Ingen cookie-popup")

    # Scrolla ner
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(1)

    # 🎯 Hämta produktkort
    items = page.query_selector_all("a.bg-white.flex.flex-col.rounded-sm.shadow-md")
    print(f"🔍 Hittade {len(items)} riktiga produkter")

    data = []

    for i, item in enumerate(items):
        try:
            # Namn & varumärke
            p_tags = item.query_selector_all("p.monopol-250")
            if len(p_tags) < 2:
                print(f"❌ Produkt {i+1} saknar namn/varumärke")
                continue
            brand = p_tags[0].inner_text().strip()
            name = p_tags[1].inner_text().strip()

            # Artikelnummer (id)
            id_el = next((p for p in item.query_selector_all("p") if "Nr" in p.inner_text()), None)
            if not id_el:
                print(f"❌ Produkt {i+1} saknar artikelnummer")
                continue
            id_num = int(id_el.inner_text().replace("Nr", "").strip())

            # Ursprung, volym, alkoholhalt
            info_tags = item.query_selector_all("p.text-ellipsis")
            if len(info_tags) < 3:
                print(f"❌ Produkt {i+1} saknar info-rader")
                continue
            origin = info_tags[0].inner_text().strip()
            volume = info_tags[1].inner_text().strip()
            alcohol = info_tags[2].inner_text().split()[0] + "%"

            # Pris
            price_el = item.query_selector("p.sans-strong-175")
            price = price_el.inner_text().strip() if price_el else "okänt"

            data.append({
                "id": id_num,
                "name": name,
                "type": "blanddryck",
                "description": brand,
                "rating": 0,
                "origin": origin,
                "alcoholContent": alcohol,
                "volume": volume,
                "price": price
            })

            print(f"✅ Produkt {i+1}: {brand} {name} – ID {id_num}")

        except Exception as e:
            print(f"❌ Fel vid produkt {i+1}: {e}")
            continue

    browser.close()

   # 💾 Skriv till TypeScript-fil
with open("./src/data/TESTData.ts", "w", encoding="utf-8") as f:
    f.write("""export interface AlcoholItem {
  id: number;
  name: string;
  type: 'vin' | 'öl' | 'sprit' | 'blanddryck';
  description: string;
  rating: number;
  origin: string;
  alcoholContent: string;
  volume: string;
  price: string;
}

export const alcoholData: AlcoholItem[] = [
  // Blanddrycker
""")

    # ✅ Här inuti with-blocket körs for-loopen som skriver produkter
    for item in data:
        ts_object = {
            "id": item['id'],
            "name": item['name'],
            "type": "blanddryck",
            "description": item['description'],
            "rating": 0,
            "origin": item['origin'],
            "alcoholContent": item['alcoholContent'],
            "volume": item['volume'],
            "price": item['price']
        }
        f.write("  " + json.dumps(ts_object, ensure_ascii=False) + ",\n")

    f.write("];\n")  # Avslutningen på arrayen
print(f"📦 Totalt {len(data)} produkter insamlade")
print(f"📁 Skrivs till: {os.path.abspath('./src/data/TESTData.ts')}")
