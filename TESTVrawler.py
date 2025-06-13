import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import os

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.systembolaget.se/sortiment/cider-blanddrycker/blanddryck/?sortera-pa=Price&i-riktning=Ascending")
time.sleep(7)

products = driver.find_elements(By.CSS_SELECTOR, ".product-card")

data = []

for i, product in enumerate(products):
    try:
        name = product.find_element(By.CSS_SELECTOR, ".product-card__heading").text
        country = product.find_element(By.CSS_SELECTOR, ".product-card__country").text
        volume_info = product.find_element(By.CSS_SELECTOR, ".product-card__attributes").text
        alcohol = next((part for part in volume_info.split() if "%" in part), "okänd")
        price = product.find_element(By.CSS_SELECTOR, ".product-card__price").text

        data.append({
            "id": i + 1,
            "name": name,
            "origin": country,
            "alcoholContent": alcohol,
            "price": price
        })
    except:
        continue
print(f"🔍 Antal produkter hittade: {len(products)}")
# Spara som JSON-fil
#with open("../src/data/TESTfetchedData.json", "w", encoding="utf-8") as f:
#    json.dump(data, f, ensure_ascii=False, indent=2)

driver.quit()

# Sökväg till filen du vill skapa
output_path = "./src/data/TESTData.ts"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# Inledande interface
ts_header = """export interface AlcoholItem {
  id: number;
  name: string;
  type: 'vin' | 'öl' | 'sprit' | 'blanddryck';;
  description: string;
  rating: number;
  origin: string;
  alcoholContent: string;
}

export const alcoholData: AlcoholItem[] = [
  // Blanddrycker
"""

# Skapa TypeScript-objekt från crawlad data
ts_items = ""
for i, item in enumerate(data):
    ts_items += f"""  {{
    id: {i + 1},
    name: "{item['name']}",
    type: "sprit",
    description: "",
    rating: 0,
    origin: "{item['origin']}",
    alcoholContent: "{item['alcoholContent']}"
  }},
"""

ts_footer = "];\n"

# Skriv till fil
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_header + ts_items + ts_footer)

print("✅ TESTData.ts skapad med crawlad dryckesdata.")

