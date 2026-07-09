import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import ingredientsHero from "@/assets/ingredients.jpg";
import onionPeel from "@/assets/ingredients/onion-peel.jpg";
import jackfruitTree from "@/assets/ingredients/jackfruit-tree.jpg";
import wildFigs from "@/assets/ingredients/wild-figs.jpg";
import eucalyptusFlower from "@/assets/ingredients/eucalyptus-flower.jpg";
import rainbowEucalyptus from "@/assets/ingredients/rainbow-eucalyptus.jpg";
import castorSeeds from "@/assets/ingredients/castor-seeds.jpg";
import marigold from "@/assets/ingredients/marigold.jpg";
import nightJasmine from "@/assets/ingredients/night-jasmine.jpg";
import kumbukTree from "@/assets/ingredients/kumbuk-tree.jpg";
import aththora from "@/assets/ingredients/aththora.jpg";
import khaya from "@/assets/ingredients/khaya.jpg";
import toon from "@/assets/ingredients/toon.jpg";
import pathagi from "@/assets/ingredients/pathagi.jpg";
import mahogany from "@/assets/ingredients/mahoganee.jpg";
import neem from "@/assets/ingredients/neem.jpg";
import velMadatiya from "@/assets/ingredients/velmadatiya.jpg";
import venivelGatta from "@/assets/ingredients/venivelgatta.jpg";
import kayippu from "@/assets/ingredients/kayippu.jpg";
import koon from "@/assets/ingredients/koon.jpg";
import teaPowder from "@/assets/ingredients/teapowder.jpg";

export const Route = createFileRoute("/ingredients")({
  head: () => ({
    meta: [
      { title: "Ingredients — The Plants Behind Earthora" },
      { name: "description", content: "Meet the botanicals that colour Earthora garments — onion peel, jackfruit, wild fig, eucalyptus, castor, marigold, night jasmine, kumbuk, aththora, khaya, toon, pathagi, mahogany, neem, vel madatiya, venivel gatta, kayippu, koon, and tea." },
      { property: "og:title", content: "Earthora Ingredients" },
      { property: "og:description", content: "The natural, plant-based dyes and ingredients we use." },
    ],
  }),
  component: Ingredients,
});

interface Ingredient {
  img: string;
  name: string;
  latin: string;
  desc: string;
  fullStory: string;
  tags: string[];
}

const items: Ingredient[] = [
  {
    img: onionPeel,
    name: "Onion Peel",
    latin: "Allium cepa",
    desc: "Golden layers of onion skin yield rich amber and warm rust tones, a humble kitchen waste transformed into natural colour.",
    fullStory: `Most people throw away onion peels without realizing they are a valuable natural resource. Rich in antioxidants—particularly quercetin—along with natural pigments and plant compounds, onion peels are a treasure trove for sustainable living, natural dyeing, gardening, and certain cosmetic applications.

Health and Cosmetic Benefits

Hair Care: Onion peel water has been traditionally used as a natural hair rinse. The antioxidants may help protect the scalp from oxidative stress and support healthy-looking hair.

Skin Care: Onion peels contain antioxidant compounds that may help protect the skin from environmental damage, though claims about removing wrinkles or permanently reducing dark spots are not scientifically proven.

Natural Dyeing Excellence

One of the most valuable uses of onion peels is as a natural textile dye. Yellow onion peels produce beautiful shades ranging from golden yellow, honey, amber, and warm brown. The final color depends on several factors:

• The type and amount of onion peels used
• The fabric being dyed (cotton, silk, wool, or linen)
• The mordant used before dyeing
• The dyeing time and temperature

For example, alum mordant generally produces bright golden-yellow and warm orange shades, while iron mordant darkens the color to create olive, brown, or antique gold tones. Because onion peels contain natural flavonoid pigments, they produce long-lasting earthy colors without the need for synthetic dyes.

Environmental Impact

Using onion peels instead of throwing them away helps:
• Reduce kitchen waste
• Promote sustainable and zero-waste living
• Replace synthetic chemical dyes with biodegradable natural dyes
• Support environmentally friendly textile and craft industries

Gardening Applications

Onion peels can be added to compost to enrich the soil. Soaking them in water for several days creates a nutrient-rich liquid that many gardeners use as a natural fertilizer.

This is why Earthora values onion peels as a renewable natural dye source, creating unique, eco-friendly fabrics with beautiful golden and earthy tones while reducing environmental impact.`,
    tags: ["Food waste", "Rich amber", "Antibacterial", "Zero-waste"]
  },
  {
    img: jackfruitTree,
    name: "Jackfruit",
    latin: "Artocarpus heterophyllus",
    desc: "Heartwood and sawdust yield warm saffron and mustard tones cherished by monastic robe dyers.",
    fullStory: `The Jackfruit Tree (Artocarpus heterophyllus) is one of the most valuable tropical trees, widely grown across Sri Lanka and South Asia. Known for producing the world's largest tree-borne fruit, the jackfruit tree has been cherished for centuries for its nutritious fruits, medicinal properties, durable timber, and natural dyeing potential.

At Earthora, we celebrate the beauty of nature by using plant-based dyes to create eco-friendly textiles. The heartwood of the jackfruit tree is one of our treasured natural dye sources, producing beautiful golden-yellow shades that are safe for both people and the environment.

🌳 Botanical Information

• Scientific Name: Artocarpus heterophyllus
• Family: Moraceae
• Common Names: Jackfruit Tree, Jack Tree
• Local Name (Sri Lanka): Kos Gaha (කොස් ගස)

The jackfruit tree is a large evergreen tree that can grow up to 20–25 meters tall. It thrives in tropical climates and is commonly found in Sri Lanka, India, Bangladesh, Thailand, Malaysia, Indonesia, and many other tropical countries.

🍈 Traditional Uses of the Jackfruit Tree

Every part of the jackfruit tree has been used for generations.

Fruit:
• Rich in vitamins A and C
• Excellent source of dietary fiber
• Contains potassium and antioxidants
• Supports digestive health
• Helps strengthen the immune system

Seeds:
Jackfruit seeds are rich in:
• Protein
• Iron
• Calcium
• Magnesium
• B vitamins

They are commonly boiled, roasted, or added to traditional Sri Lankan curries.

💊 Medicinal Importance

In traditional herbal practices, different parts of the jackfruit tree have been used to support:
• Healthy digestion
• Immune function
• Skin health
• Blood sugar management
• General wellness

The leaves, roots, bark, and latex have also been used in traditional remedies for various health conditions.

🎨 Jackfruit as a Natural Dye Source

One of the most remarkable features of the jackfruit tree is its heartwood, which produces a rich natural yellow dye.

For centuries, artisans have extracted pigments from jackfruit wood to dye cotton, silk, and other natural fibers. Depending on the dyeing process and mordants used, the colours range from:
• Golden Yellow
• Mustard Yellow
• Honey Gold
• Warm Ochre
• Soft Brownish Yellow

The dye is exceptionally lightfast and deepens with age. Jackfruit dye carries cultural significance, representing wisdom, humility, and spiritual devotion. Our jackfruit wood is harvested sustainably from fallen branches and timber offcuts.`,
    tags: ["Sacred wood", "Saffron hues", "Lightfast"]
  },
  {
    img: wildFigs,
    name: "Wild Fig",
    latin: "Ficus racemosa",
    desc: "Bark and unripe fruit lend gentle taupe and stone greys, rich in soothing tannins.",
    fullStory: `The Cluster Fig Tree (Ficus racemosa) is a magnificent tropical tree native to Sri Lanka, India, Australia, and many parts of Southeast Asia. It is one of the most valuable indigenous tree species due to its exceptional medicinal properties, ecological importance, nutritional value, and cultural significance.

Growing up to 30 meters (100 feet) in height, this fast-growing evergreen to semi-deciduous tree develops a broad, dense canopy that provides excellent shade and supports countless forms of wildlife. One of its most distinctive features is its unique fruiting habit—its figs grow directly from the trunk and major branches in large clusters, a phenomenon known as cauliflory.

🌿 Botanical Characteristics

• Height: 20–30 meters
• Crown: Broad, spreading, and densely branched
• Bark: Smooth to slightly rough, grey on the outside with pinkish-brown inner bark containing white latex
• Leaves: Simple, glossy, oval to elliptical leaves measuring 5–20 cm long
• Flowers: Tiny flowers are enclosed inside the fig structure and are not visible externally
• Fruit: Round figs produced in dense clusters on the trunk and large branches; green when young and bright red to crimson when fully ripe
• Latex: A milky white sap found throughout the tree

🌍 Natural Habitat and Distribution

The Cluster Fig Tree naturally thrives in tropical and subtropical climates. It commonly grows along riverbanks, streams, wetlands, paddy field boundaries, village forests, and lowland rainforests where soil moisture is abundant.

The species is native to Sri Lanka, India, Nepal, Bangladesh, Myanmar, Thailand, Malaysia, Indonesia, Australia, and several other Asian countries.

Because of its extensive root system, the tree helps stabilize riverbanks and prevents soil erosion, making it an important species for watershed conservation and ecological restoration projects.

🦋 A Unique Relationship with Nature

Like all fig trees, Ficus racemosa has one of nature's most fascinating ecological partnerships. Each fig is pollinated by tiny fig wasps, which enter the fruit through a small natural opening to complete the pollination process. In return, the tree provides a safe environment for the wasps to reproduce.

This remarkable relationship has evolved over millions of years and is considered one of the finest examples of mutualism in nature.

🌳 Ecological Importance

The Cluster Fig Tree is often described as a keystone species, meaning it supports many other living organisms within an ecosystem.

Its fruits provide food for:
• Birds
• Fruit bats
• Monkeys
• Squirrels
• Deer
• Butterflies and insects

Because the tree produces fruit several times throughout the year, it supplies wildlife with food even when many other trees are not fruiting.

💊 Traditional Medicinal Importance

For centuries, Ficus racemosa has been highly valued in Ayurveda and traditional Sri Lankan medicine. Almost every part of the tree—including the bark, leaves, roots, fruits, latex, and seeds—has been used in traditional herbal preparations.

According to traditional medical practices, different parts of the tree have been used to support the management of:
• Diarrhea and dysentery
• Hemorrhoids (piles)
• Diabetes
• Gastric irritation
• Urinary disorders
• Gum inflammation
• Wound healing
• Skin conditions
• Excess body heat
• Certain women's health conditions

Traditional Ayurvedic preparations made from this tree include herbal decoctions, medicinal syrups, concentrated extracts, oils, and topical applications.

🎨 Natural Dyeing Potential

The bark and unripe fruits of the wild fig produce some of the most subtle and elegant natural dyes — soft taupes, warm greys, and earthy beiges. The tannins in the fig bark also act as natural mordants, improving colourfastness while adding a softness to the fabric.`,
    tags: ["Minimalist tones", "Natural tannins", "Ayurvedic"]
  },
  {
    img: eucalyptusFlower,
    name: "Eucalyptus Blossom",
    latin: "Eucalyptus globulus",
    desc: "Aromatic blossoms and leaves cast soft honey and rose-tan shades with natural antimicrobial notes.",
    fullStory: `The Eucalyptus Tree is one of the world's fastest-growing and most recognizable tree species. Native to Australia and Tasmania, it has been introduced to many tropical and subtropical countries, including Sri Lanka, for timber production, landscaping, windbreaks, and essential oil extraction.

Renowned for its fragrant leaves and remarkable adaptability, the eucalyptus tree has become an important natural resource, valued for its timber, medicinal essential oils, environmental benefits, and economic importance.

🌍 Origin and Distribution

Eucalyptus trees originated in Australia, where they dominate vast natural forests. Today, more than 700 species of eucalyptus are known worldwide.

They are widely cultivated in:
• Australia
• Sri Lanka
• India
• China
• South Africa
• Brazil
• Portugal
• Spain
• Ethiopia
• Many tropical and subtropical regions

🌿 Botanical Description

Eucalyptus trees vary greatly depending on the species, but most are tall evergreen trees with distinctive aromatic foliage.

Characteristics:
• Height: 20–70 meters, with some species exceeding 90 meters
• Trunk: Straight and cylindrical
• Bark: Smooth, rough, fibrous, or peeling depending on the species
• Leaves: Lance-shaped, leathery, and rich in aromatic essential oils
• Flowers: Cream, white, pink, or red flowers rich in nectar
• Fruits: Small woody capsules commonly known as "gumnuts"

The leaves contain tiny oil glands that release the tree's characteristic fresh fragrance when crushed.

🧪 Essential Oil Production

Eucalyptus leaves are one of the world's major natural sources of eucalyptus essential oil.

The oil is extracted through steam distillation of fresh or partially dried leaves.

Its primary active compound is:
• 1,8-Cineole (Eucalyptol)

This natural compound gives eucalyptus oil its refreshing aroma and has made it one of the most widely used essential oils worldwide.

💊 Traditional Uses

For generations, eucalyptus has been used in traditional herbal practices.

The leaves and essential oil have traditionally been used to:
• Relieve symptoms of colds and coughs
• Ease nasal congestion
• Support respiratory comfort
• Freshen indoor air
• Repel certain insects
• Clean household surfaces

🏭 Modern Applications

Today, eucalyptus oil is widely used in:
• Pharmaceutical products
• Herbal inhalants
• Cough lozenges
• Chest rubs
• Mouthwashes
• Toothpaste
• Soaps
• Shampoos
• Cosmetics
• Aromatherapy
• Cleaning products
• Natural disinfectants

Its fresh scent makes it a popular ingredient in wellness and personal care products.

🪵 Timber Uses

Eucalyptus wood is highly valued for its:
• Strength
• Durability
• Fast growth
• Attractive grain

It is commonly used for:
• Construction timber
• Furniture
• Flooring
• Fence posts
• Utility poles
• Firewood
• Charcoal
• Paper pulp
• Plywood

Many eucalyptus plantations are managed as renewable sources of timber and pulp.

🌱 Environmental Benefits

Eucalyptus trees contribute to the environment by:
• Producing oxygen
• Absorbing carbon dioxide
• Reducing soil erosion
• Providing wind protection
• Supporting honey production through nectar-rich flowers
• Offering habitat for birds and beneficial insects
• Helping restore degraded land in suitable locations

🎨 Natural Dyeing Properties

Eucalyptus blossoms release complex pigments that range from warm honey to delicate rose-tan, creating colours that seem to glow with natural radiance. The leaves and flowers are rich in polyphenols and essential oils, which not only produce beautiful dyes but also impart subtle antimicrobial properties to the fabric.

This makes eucalyptus-dyed garments particularly suitable for activewear and everyday wear. The aromatic compounds also provide a gentle, lingering scent that recalls the Australian bush.

✨ Interesting Facts

• Some eucalyptus trees rank among the tallest flowering plants on Earth.
• Koalas feed almost exclusively on the leaves of selected eucalyptus species.
• Eucalyptus flowers are an excellent nectar source for honeybees.
• More than 700 eucalyptus species have been identified worldwide.
• Many species can regrow rapidly after bushfires due to specialized buds beneath their bark.`,
    tags: ["Antimicrobial", "Honey tones", "Wild harvested"]
  },
  {
    img: rainbowEucalyptus,
    name: "Rainbow Eucalyptus",
    latin: "Eucalyptus deglupta",
    desc: "Peeling bark shifts through olive, plum and copper — a living palette of earth pigments.",
    fullStory: "The rainbow eucalyptus is nature's own artist, its multicoloured bark peeling away to reveal brilliant green, purple, orange, and maroon streaks. When the bark is processed for dye, it yields an extraordinary palette — olive greens, plummy purples, rich coppers, and earthy browns. This unique tree is native to the Philippines and Indonesia, where it has been used traditionally for both dye and medicine. The pigments are exceptionally stable and create colour that shifts subtly depending on the light. Each batch of rainbow eucalyptus dye is unique, reflecting the age and growing conditions of the tree.",
    tags: ["Unique palette", "Colour shifting", "Moody tones"]
  },
  {
    img: castorSeeds,
    name: "Castor Seed",
    latin: "Ricinus communis",
    desc: "Pressed oil conditions natural fibres, softening drape and lending a subtle sheen.",
    fullStory: `The Castor Bean Plant (Ricinus communis) is one of the world's most well-known medicinal plants, valued for centuries in Ayurveda, traditional Sri Lankan medicine, and many other healing systems. Best known as the source of castor oil, this fast-growing shrub is cultivated throughout tropical and subtropical regions for its medicinal, industrial, and ornamental value.

Although every part of the plant has been used in traditional medicine, it is especially famous for the oil extracted from its seeds, which has been used to support digestive health, skin care, hair care, and various traditional therapeutic applications.

🌿 Botanical Description

The Castor Bean Plant is a fast-growing annual or perennial shrub that typically reaches 3–4 meters (10–13 feet) in height, although some plants can grow much taller under favorable conditions.

Characteristics:
• Large, glossy, star-shaped leaves with 5–12 deep lobes
• Leaf colors range from bright green to reddish-purple depending on the variety
• Thick, hollow stems
• Small clusters of yellowish-green flowers
• Spiny seed capsules containing attractive, marbled seeds
• Deep taproot that helps the plant tolerate dry conditions

🌍 Origin and Distribution

Although believed to have originated in Northeastern Africa, the Castor Bean Plant is now widely naturalized throughout:
• Sri Lanka
• India
• Southeast Asia
• Africa
• South America
• Australia
• Tropical and subtropical regions worldwide

💊 Traditional Medicinal Importance

In Ayurveda, Siddha, Unani, and traditional Sri Lankan medicine, different parts of the Castor Bean Plant including the leaves, roots, bark, seeds, and especially castor oil have long been used in herbal preparations.

Joint and Muscle Health:
Warm castor oil is traditionally applied externally to help relieve:
• Joint stiffness
• Rheumatic discomfort
• Arthritis
• Muscle aches
• Swelling

Digestive Health:
Castor oil has long been recognized as a natural stimulant laxative and has traditionally been used to relieve occasional constipation under appropriate medical guidance.

Skin Care:
Castor oil is widely used in natural skincare because of its moisturizing properties. Traditionally, it has been applied to help soothe:
• Dry skin
• Minor skin irritation
• Cracked heels
• Rough elbows
• Small wounds

Hair Care:
Castor oil is a popular ingredient in hair-care products. Traditionally, it has been used to:
• Moisturize the scalp
• Reduce hair dryness
• Improve hair appearance
• Help reduce hair breakage
• Condition eyebrows and eyelashes

🧪 Modern Scientific Research

Modern studies have identified several biologically active compounds in Ricinus communis, including:
• Ricinoleic acid
• Flavonoids
• Alkaloids
• Phenolic compounds
• Fatty acids

Research suggests that castor oil may possess:
• Anti-inflammatory properties
• Antioxidant activity
• Moisturizing effects
• Mild antimicrobial activity

🏭 Industrial Importance

Castor oil is one of the most valuable vegetable oils used in industry. It is used in the production of:
• Cosmetics
• Pharmaceuticals
• Soaps
• Lubricants
• Paints
• Printing inks
• Hydraulic fluids
• Plastics
• Nylon
• Biodegradable products
• Bio-based industrial chemicals

🌱 Environmental Value

The Castor Bean Plant contributes to sustainable agriculture by:
• Growing rapidly in marginal soils
• Helping reduce soil erosion
• Supporting pollinating insects with its flowers
• Providing a renewable source of industrial oil

⚠️ Safety Precautions

Although castor oil is widely used, the raw seeds of the Castor Bean Plant are highly poisonous. They contain ricin, one of the most toxic naturally occurring proteins known.

Important Safety Information:
• Never eat raw castor seeds.
• Castor oil intended for medicinal use should only be obtained from properly processed commercial products.
• Excessive consumption of castor oil may cause severe diarrhea, dehydration, and abdominal cramping.
• Pregnant women should not use castor oil unless specifically advised by a qualified healthcare professional.
• Always follow professional medical advice before using castor oil therapeutically.

✨ Interesting Facts

• Castor oil has been used medicinally for more than 4,000 years.
• Ancient Egyptians used castor oil in lamps and traditional remedies.
• The plant's leaves are among the largest found on ornamental shrubs.
• Despite the toxicity of the raw seeds, properly processed pharmaceutical-grade castor oil is considered safe when used appropriately.`,
    tags: ["Luxurious finish", "Anti-static", "Traditional pressed"]
  },
  {
    img: marigold,
    name: "Marigold",
    latin: "Tagetes erecta",
    desc: "Petals bloom into vivid saffron, sunflower and warm gold — brilliant, fast, and joyful.",
    fullStory: `The Marigold (Tagetes erecta) is one of the world's most popular flowering plants, admired for its brilliant golden-yellow, orange, and deep yellow blossoms. Native to Mexico and Central America, this annual flowering plant is now cultivated throughout tropical and subtropical regions, including Sri Lanka, where it is widely grown in home gardens, temples, parks, and commercial flower farms.

Beyond its ornamental beauty, marigold has a long history of use in traditional medicine, natural skincare, herbal remedies, and agriculture. Its flowers are rich in natural pigments, antioxidants, and aromatic compounds that have made the plant valuable in both traditional healing practices and modern cosmetic products.

🌿 Botanical Description

Marigold is a fast-growing annual herb that typically reaches 60–90 cm (2–3 feet) in height.

Key Characteristics:
• Upright, branched herbaceous stems
• Deep green, finely divided pinnate leaves with serrated edges
• Distinctive aromatic fragrance released from leaves and flowers
• Large, rounded flower heads in shades of yellow, golden yellow, orange, and deep orange
• Flower diameter ranging from 5–12 cm depending on the variety
• Small black seeds produced after flowering

🌍 Origin and Distribution

Although native to Mexico, Tagetes erecta has spread worldwide due to its beauty and versatility. Today it is widely cultivated in:
• Sri Lanka
• India
• Nepal
• China
• Thailand
• Indonesia
• Africa
• Europe
• North and South America

🧪 Nutritional and Phytochemical Composition

Marigold flowers contain numerous naturally occurring plant compounds, including:
• Lutein
• Zeaxanthin
• Flavonoids
• Carotenoids
• Essential oils
• Polyphenols
• Natural antioxidants

These compounds are responsible for many of the plant's traditional medicinal uses and vibrant flower colors. Lutein and zeaxanthin, in particular, are widely studied for their role in supporting eye health.

💊 Traditional Medicinal Uses

For centuries, marigold flowers have been used in traditional herbal medicine across many cultures.

Traditionally, preparations made from the flowers have been used to support:
• Minor skin irritation
• Wound healing
• Insect bites
• Mild inflammation
• Skin cleansing
• Digestive comfort
• General wellness

💆 Benefits for Skin Care

Marigold flowers are widely used in natural beauty treatments because of their soothing and antioxidant properties.

Traditional skincare applications include:
• Helping calm irritated skin
• Supporting the healing of minor cuts and scratches
• Reducing the appearance of blemishes and dark spots
• Moisturizing dry skin
• Refreshing tired skin

Flower petals are often infused into creams, soaps, facial masks, herbal oils, and natural toners.

💇 Hair Care Benefits

Marigold has also been valued in traditional hair care. Flower infusions are commonly used as a natural hair rinse to:
• Refresh the scalp
• Improve hair shine
• Condition the hair
• Support a healthy scalp environment

🍵 Herbal Tea

Dried marigold petals are sometimes prepared as a mild herbal infusion. Traditionally, marigold tea has been consumed to support:
• General wellness
• Digestive comfort
• Relaxation
• Natural antioxidant intake

🌿 Natural Pest Control

Marigold is famous among gardeners as a natural companion plant. Its aromatic roots and foliage help deter certain garden pests, including some species of nematodes and insects. For this reason, marigolds are frequently planted alongside vegetables and herbs in organic gardens.

🧴 Uses in Cosmetics

Marigold extracts are commonly incorporated into:
• Natural soaps
• Moisturizers
• Face creams
• Lip balms
• Herbal shampoos
• Bath products
• Essential oil blends

🎨 Natural Dye Properties

The bright natural pigments of marigold are also used as plant-based colorants in cosmetic products and textiles. Marigold-dyed fabrics have exceptional lightfastness and their cheerful colours uplift the spirit.

🏛️ Cultural Importance

Marigolds hold cultural and religious significance in many countries. Their bright flowers are widely used for:
• Religious ceremonies
• Temple offerings
• Floral decorations
• Festivals
• Weddings
• Home gardens
• Landscape design

In many cultures, marigolds symbolize positivity, prosperity, warmth, and remembrance.

🌱 Environmental Benefits

Marigolds contribute to sustainable gardening by:
• Supporting pollinators
• Improving garden biodiversity
• Helping reduce certain soil pests
• Adding vibrant seasonal color to landscapes
• Providing nectar for beneficial insects`,
    tags: ["Vibrant gold", "Lightfast", "Ceremonial"]
  },
  {
    img: nightJasmine,
    name: "Night Jasmine",
    latin: "Nyctanthes arbor-tristis",
    desc: "Coral tubes of the parijat flower give a rare, luminous apricot dye used since antiquity.",
    fullStory: `The Night-Flowering Jasmine (Nyctanthes arbor-tristis) is one of the most enchanting flowering plants found across South Asia. Celebrated for its delicate white petals, vibrant orange tubular center, and captivating fragrance, this small ornamental tree has been treasured for centuries in traditional medicine, religious ceremonies, and home gardens.

Unlike most flowering plants, its blossoms open after sunset, filling the evening air with a sweet, calming fragrance. By sunrise, the flowers gently fall to the ground, creating a beautiful white-and-orange floral carpet beneath the tree. This unique behavior inspired its scientific name, arbor-tristis, meaning "the sad tree," because the flowers appear to "weep" as they fall with the morning light.

🌿 Botanical Description

Night-Flowering Jasmine is a small deciduous tree or large shrub that typically grows 5–10 meters (16–33 feet) tall.

Characteristics:
• Rounded, spreading crown
• Rough, greyish bark
• Opposite, simple, dark green leaves with a slightly rough texture
• Highly fragrant white flowers with bright orange tubular centers
• Flowers arranged in clusters at the ends of branches
• Small, flat, heart-shaped seed capsules

🌍 Origin and Distribution

The species is native to the Indian subcontinent and Southeast Asia and is widely cultivated throughout tropical regions. It is commonly found in:
• Sri Lanka
• India
• Nepal
• Bangladesh
• Myanmar
• Thailand
• Malaysia

🌙 Why Is It Called the "Tree of Sorrow"?

The name Tree of Sorrow does not reflect sadness in a negative sense. Instead, it refers to the tree's extraordinary flowering habit. The blossoms open only at night, releasing their strongest fragrance after sunset. By early morning, the flowers naturally detach from the branches and fall to the ground, creating the impression that the tree is shedding tears.

🌸 Fragrant Flowers

The flowers of Nyctanthes arbor-tristis are among the most aromatic in the plant kingdom.

Each flower features:
• Five to eight delicate white petals
• A vivid orange central tube
• A soft, sweet fragrance that becomes strongest during the evening

The fallen flowers are often collected for religious offerings, floral decorations, and natural dye extraction.

💊 Traditional Medicinal Importance

Night-Flowering Jasmine has held an important place in Ayurveda, Siddha, Unani, and traditional Sri Lankan medicine for centuries.

Almost every part of the plant—including the leaves, flowers, bark, roots, and seeds—has been used in traditional herbal preparations.

Traditionally, the plant has been used to support the management of:
• Fever
• Coughs and colds
• Asthma
• Joint discomfort
• Rheumatic conditions
• Digestive disorders
• Intestinal worms
• Skin conditions
• Hemorrhoids
• Muscle stiffness
• Scalp conditions such as dandruff
• General inflammatory conditions

🧪 Modern Scientific Research

Modern studies have identified numerous bioactive compounds within Nyctanthes arbor-tristis, including:
• Flavonoids
• Iridoid glycosides
• Essential oils
• Carotenoids
• Phenolic compounds
• Antioxidants

Laboratory research suggests that extracts from the plant may possess:
• Antioxidant activity
• Anti-inflammatory properties
• Antibacterial effects
• Antifungal activity
• Antiviral potential
• Immune-supporting properties

🎨 Natural Dye Source

The brilliant orange tubular portion of the flower contains natural pigments that have traditionally been used as a yellow to saffron-colored dye.

Historically, these natural dyes have been used for:
• Coloring textiles
• Dyeing silk and cotton
• Religious garments
• Traditional handicrafts
• Decorative art

The flowers are valued by eco-conscious artisans because they provide a biodegradable, plant-based alternative to synthetic dyes.

🌳 Ecological Importance

Night-Flowering Jasmine contributes positively to biodiversity by:
• Providing nectar for moths and other nocturnal pollinators
• Supporting bees and butterflies during the day with remaining nectar
• Enhancing garden biodiversity
• Producing natural organic matter through fallen flowers and leaves

🏛️ Cultural and Spiritual Significance

Across South Asia, the flowers are closely associated with spirituality, purity, and devotion. Freshly fallen flowers are traditionally gathered each morning and offered in temples and places of worship. Because the flowers naturally fall without being picked, they are often regarded as symbols of humility, surrender, and the fleeting beauty of life.

✨ Interesting Facts

• The flowers bloom only at night and fall naturally by morning.
• The orange floral tube contains natural pigments once widely used for textile dyeing.
• Despite its common name, Night-Flowering Jasmine is not a true jasmine.
• The tree's sweet fragrance is strongest after sunset.
• Its flowers are widely used in traditional festivals and religious ceremonies across Asia.`,
    tags: ["Rare pigment", "Luminous", "Royal heritage"]
  },
  {
    img: kumbukTree,
    name: "Kumbuk Tree",
    latin: "Terminalia arjuna",
    desc: "Majestic bark yields warm earthy browns and soft taupes while naturally purifying water and supporting heart health.",
    fullStory: `The Kumbuk tree, scientifically known as Terminalia arjuna, is a highly valuable tree that grows abundantly in the dry zone of Sri Lanka. It belongs to the Combretaceae family. In Sanskrit, it is known as Arjuna, and it is a large, majestic tree that protects and beautifies the surrounding environment.

🌍 Natural Distribution

Kumbuk is native to Sri Lanka and India, and is also found in Myanmar, Thailand, Malaysia, and other tropical regions. In Sri Lanka, it is especially common in the dry zone and riverbank ecosystems. The tree grows up to 40–50 feet tall, with a thick trunk and widely spreading branches. The bark is thick, smooth, and light pink in colour, peeling off easily in layers.

💧 Natural Water Purification

One of the most remarkable qualities of the Kumbuk tree is its ability to improve water quality naturally. It is traditionally believed that Kumbuk trees help:
• Reduce water hardness
• Improve water clarity
• Support natural purification of wells and tanks

Ancient communities often planted Kumbuk trees around wells, reservoirs, and water streams. In dry-zone Sri Lanka, where hard water is common, Kumbuk trees are still considered a natural solution for improving water quality.

❤️ Traditional Medicinal Value

In Ayurveda and traditional medicine, almost every part of the Kumbuk tree is used for healing purposes. Traditional benefits include:
• Supporting heart health
• Helping wound healing
• Reducing inflammation
• Supporting bone strength
• Relieving thirst and body heat
• Supporting urinary and blood-related conditions

Common traditional uses include bark decoctions for herbal medicine, powder applied to wounds, bark water used as mouth rinse, and leaf preparations for skin and digestion.

🌿 Skin & Wellness Benefits

Kumbuk bark is traditionally used in natural skincare remedies:
• May help reduce acne and skin irritation
• Used in honey-based herbal applications for skin care
• Believed to improve skin balance and clarity

🚶‍♂️ Digestive & Internal Wellness

Traditional uses of Kumbuk include:
• Supporting digestion
• Helping relieve constipation (leaf preparations)
• Supporting body cooling and internal balance

🌱 Environmental Importance

Kumbuk trees play a vital role in protecting the environment:
• Stabilize riverbanks and soil
• Improve water ecosystems
• Provide shade and habitat for wildlife
• Support rural ecological balance

Planting Kumbuk trees is considered an important step in environmental conservation and water protection.

🌿 Traditional Wisdom

Ancient communities believed that:
• Planting Kumbuk near water sources improves water quality
• Bathing near Kumbuk trees refreshes the body
• The tree represents strength, protection, and healing

This traditional wisdom continues to influence rural practices even today.

🌳 Conclusion

The Kumbuk tree is more than just a plant—it is a symbol of healing, strength, and environmental protection. From improving water quality to supporting traditional medicine, it remains one of Sri Lanka's most valuable natural resources. At Earthora, we honor this ancient wisdom by incorporating Kumbuk bark into our natural dyeing process, creating warm, earthy tones that carry the spirit of Sri Lankan heritage.`,
    tags: ["Sacred tree", "Water purifier", "Heart health", "Sri Lankan heritage"]
  },
  {
    img: aththora,
    name: "Aththora",
    latin: "Senna alata",
    desc: "Bright yellow candle-like blooms yield soft olive greens and warm golden tones with natural antifungal properties.",
    fullStory: `Aththora (Senna alata), also known as the Candle Bush or Ringworm Bush, is a tropical medicinal plant belonging to the Fabaceae family. It is easily recognized by its bright yellow flower spikes that resemble candles. For centuries, Aththora has been valued in traditional Ayurvedic medicine for its powerful healing properties and is now gaining attention as an eco-friendly natural dye source in sustainable textile production.

At Earthora, we believe in preserving nature's wisdom by using plant-based dyes that are safe for people and kind to the environment. Aththora is one of the valuable plants that supports our commitment to healthy and sustainable fashion.

🌿 Botanical Information

• Scientific Name: Senna alata
• Family: Fabaceae
• Common Names: Candle Bush, Ringworm Bush, Emperor's Candlesticks
• Local Name (Sri Lanka): Aththora

Aththora is a fast-growing shrub that can reach 2–5 meters in height. It thrives in warm tropical climates and is commonly found in Sri Lanka, India, Southeast Asia, Africa, and South America.

💊 Traditional Medicinal Uses

Aththora has been widely used in traditional medicine due to its natural antifungal, antibacterial, and anti-inflammatory properties.

Common traditional uses include:
• Supporting the treatment of fungal skin infections such as ringworm
• Helping relieve eczema and itching
• Assisting in wound healing
• Reducing minor skin inflammation
• Supporting digestive health
• Traditionally used for constipation relief
• Used in herbal preparations for certain liver and skin disorders

🎨 Natural Dye Potential

Besides its medicinal importance, Aththora is an excellent natural dye plant. The leaves, flowers, and other plant parts contain natural pigments that can produce beautiful earthy shades ranging from soft olive green and warm yellow to golden-brown tones, depending on the mordant and dyeing method used.

At Earthora, natural dyeing with plants like Aththora allows us to create fabrics without synthetic chemicals, making every piece unique and environmentally responsible.

Benefits of Aththora Natural Dye

Choosing textiles dyed with Aththora offers many advantages:
• 100% plant-based colouring
• Free from harsh synthetic dyes
• Environmentally friendly production
• Biodegradable and sustainable
• Gentle on sensitive skin
• Suitable for eco-conscious fashion
• Every fabric develops its own naturally unique colour pattern

🌱 Environmental Benefits

Using Aththora as a natural dye source helps:
• Reduce water pollution caused by synthetic dyes
• Lower chemical waste in textile production
• Support biodiversity
• Encourage sustainable agriculture
• Promote eco-friendly fashion
• Protect artisan traditions and natural heritage`,
    tags: ["Antifungal", "Olive greens", "Eco-friendly"]
  },
  {
    img: khaya,
    name: "Khaya",
    latin: "Khaya senegalensis",
    desc: "African Mahogany bark yields rich earthy browns and warm taupes while supporting sustainable forestry.",
    fullStory: `Khaya senegalensis, commonly known as African Mahogany, is a majestic hardwood tree native to West and Central Africa. It is admired for its durable timber, traditional medicinal significance, and increasing importance as a natural source of plant-based dyes. The tree is valued not only for its beauty and strength but also for its role in sustainable and eco-friendly living.

🌿 Botanical Description

Khaya senegalensis is a large, semi-deciduous tree that can grow up to 35 meters in height. It has a broad, rounded crown, dark grey to brown bark, and glossy green leaves. The tree produces small white flowers followed by woody, round seed capsules containing winged seeds that are dispersed by the wind.

🌍 Natural Distribution

African Mahogany naturally grows across many countries in West and Central Africa. It thrives in tropical and subtropical climates and is widely planted in parks, roadsides, agroforestry systems, and reforestation projects because of its adaptability and environmental benefits.

💊 Traditional Uses

For generations, different parts of the tree especially the bark have been used in traditional medicine. Communities have traditionally prepared bark extracts to support general wellness and to manage fever and certain skin conditions. While laboratory studies have identified compounds with antioxidant and anti-inflammatory activity, more human clinical research is needed to confirm many of these traditional uses.

🎨 Natural Dye Applications

The bark of Khaya senegalensis is an excellent source of natural brown shades for textile dyeing. It produces rich, earthy colours that are suitable for cotton, silk, and other natural fibres. Natural dyeing with African Mahogany bark helps reduce dependence on synthetic dyes and supports environmentally responsible textile production.

At Earthora, natural dyes from plant materials such as Khaya senegalensis are celebrated as part of a commitment to sustainable fashion and eco-conscious craftsmanship.

🌱 Environmental Importance

Khaya senegalensis plays an important ecological role by:
• Providing shade and improving landscapes
• Helping reduce soil erosion
• Supporting biodiversity by providing habitat for birds and insects
• Contributing to carbon storage and climate resilience
• Supporting sustainable forestry and agroforestry systems

💰 Economic Value

African Mahogany is one of Africa's most valuable hardwood species. Its timber is used for:
• Premium furniture
• Doors and windows
• Interior finishing
• Boat building
• Decorative woodwork
• Musical instruments

The tree also provides opportunities for sustainable natural dye production and community-based livelihoods.

🌳 Conservation

Increasing demand for timber has placed pressure on natural populations in some regions. Sustainable forest management, responsible harvesting, and tree planting are essential to ensure that future generations continue to benefit from this valuable species.`,
    tags: ["Earthy browns", "Sustainable timber", "African heritage"]
  },
  {
    img: toon,
    name: "Toon",
    latin: "Toona sinensis",
    desc: "Reddish young foliage yields warm golden-brown tones while offering culinary and medicinal value.",
    fullStory: `Toona sinensis, commonly known as the Chinese Toon or Beef and Onion Tree, is a remarkable deciduous tree valued for its culinary, medicinal, ornamental, and timber uses. Native to East and Southeast Asia, this unique species has been cultivated for thousands of years and holds a special place in traditional Chinese culture and herbal medicine.

Today, the tree is appreciated not only for its beautiful reddish young foliage but also for its nutrient-rich edible leaves, medicinal properties, durable timber, and environmental benefits. In Sri Lanka, Toona sinensis is mainly grown as an ornamental and shade tree due to its attractive appearance and rapid growth.

🌍 Origin and Distribution

Toona sinensis is native to:
• China
• Northeastern India
• Myanmar
• Thailand
• Malaysia
• Indonesia

It has also been introduced into several tropical and subtropical countries, including Sri Lanka, where it is planted in gardens, parks, botanical collections, and landscaped areas.

🌿 Botanical Description

The Chinese Toon is a fast-growing, medium to large deciduous tree that can reach 30–40 meters (100–130 feet) in height under favorable conditions.

Key Characteristics:
• Tall, straight trunk with an elegant spreading canopy
• Attractive reddish-bronze young leaves that gradually turn deep green as they mature
• Large pinnate leaves with numerous leaflets
• Small, fragrant white flowers produced in large clusters
• Winged seeds enclosed in capsule-like fruits
• Strong and extensive root system
• Easily shaped through pruning, making it an excellent ornamental landscape tree

🥩 Why Is It Called the "Beef and Onion Tree"?

One of the most fascinating characteristics of Toona sinensis is the distinctive flavor of its young leaves. The fresh shoots possess a rich umami taste that many people describe as a combination of beef, onion, garlic, and mushrooms. This natural savory flavor has earned the tree the nickname "Beef and Onion Tree."

Unlike meat products, this flavor comes entirely from naturally occurring amino acids and aromatic compounds found in the young leaves. Because of this unique taste, the tree has become especially popular among vegetarians and vegans who seek naturally savory ingredients.

🍳 Culinary Uses

In China and several neighboring countries, the tender spring shoots are considered a seasonal delicacy. The young leaves are commonly used in:
• Stir-fried vegetable dishes
• Omelets
• Fried rice
• Noodle dishes
• Tofu recipes
• Soups
• Dumpling fillings
• Traditional herbal salads
• Homemade seasoning pastes

🥗 Nutritional Value

Young Chinese Toon leaves are highly nutritious and contain important vitamins, minerals, and antioxidants. They are naturally rich in:
• Vitamin A
• Vitamin C
• B-complex vitamins
• Calcium
• Iron
• Magnesium
• Potassium
• Dietary fiber
• Natural antioxidants
• Plant polyphenols

💊 Traditional Medicinal Uses

For centuries, Toona sinensis has been an important medicinal plant in Traditional Chinese Medicine. Different parts of the tree including its leaves, bark, roots, and seeds have been used in traditional herbal preparations.

Traditionally, the tree has been used to support the management of:
• Diarrhea
• Dysentery
• Digestive disorders
• Loss of appetite
• Nausea and vomiting
• Urinary tract infections
• Rheumatic discomfort
• Skin itching
• Liver conditions
• Lung disorders

🧪 Modern Scientific Research

Modern research has identified numerous bioactive compounds in Toona sinensis, including flavonoids, polyphenols, terpenoids, and other antioxidant substances. Laboratory studies suggest these compounds may possess antioxidant, anti-inflammatory, antibacterial, and antiviral activities.

🪵 Timber Uses

The wood of Toona sinensis is lightweight, durable, attractive, and easy to work with. It closely resembles genuine mahogany in appearance and quality. Traditionally, the timber has been used to manufacture high-quality furniture, doors, window frames, cabinets, interior woodwork, decorative carvings, and musical instruments.

🌱 Environmental Importance

Beyond its ornamental value, the Chinese Toon provides numerous ecological benefits. It helps to improve urban greenery, provide shade and cooling, absorb carbon dioxide, improve air quality, reduce soil erosion, support biodiversity, and create habitats for birds and beneficial insects.`,
    tags: ["Edible leaves", "Golden-brown", "Culinary heritage"]
  },
  {
    img: pathagi,
    name: "Pathagi",
    latin: "Caesalpinia sappan",
    desc: "Reddish heartwood produces vibrant coral, brick red, and golden orange tones with traditional medicinal value.",
    fullStory: `Pathagi (Caesalpinia sappan) is a valuable medicinal and dye-producing tree that has been used for centuries in Sri Lankan Ayurveda and traditional medicine. Known for its beautiful reddish heartwood, Pathagi is not only appreciated for its therapeutic properties but also for its ability to produce vibrant natural dyes for textiles. At Earthora, we value Pathagi as one of nature's finest resources for creating sustainable, eco-friendly fabrics while preserving traditional knowledge.

🌿 Botanical Description

Pathagi is a medium-sized deciduous tree that can grow up to 10 meters in height. It has thorny branches, compound green leaves, clusters of bright yellow flowers, and flat seed pods. The heartwood is rich in natural pigments that produce attractive shades ranging from golden orange to deep reddish-brown depending on the mordant and dyeing process.

💊 Traditional Medicinal Uses

For generations, Pathagi has been recognized in Ayurveda for its medicinal properties. Traditionally, the heartwood has been used to support the management of:
• Diarrhea and dysentery
• Digestive disorders
• Skin conditions
• Excessive bleeding
• White vaginal discharge (Leucorrhoea)
• Blood purification
• Wound healing

The leaves are also valued for their antimicrobial properties and have been used in traditional remedies for minor skin infections.

🎨 Natural Dye Properties

One of the most remarkable features of Pathagi is its exceptional natural dye content. The heartwood contains natural coloring compounds such as brazilin, which oxidizes to brazilein, producing beautiful shades of:
• Soft yellow
• Golden orange
• Warm coral
• Brick red
• Rich reddish-brown

The final color depends on the fabric type, mordants used, water quality, and dyeing technique.

🌿 Pathagi in Eco-Textile Production

At Earthora, Pathagi is one of the botanical dyes used to create unique eco-friendly textiles. Unlike synthetic dyes, natural dyes from Pathagi are biodegradable and environmentally responsible.

Benefits of Pathagi Natural Dye:
• Free from harsh synthetic chemicals
• Eco-friendly and biodegradable
• Gentle on sensitive skin
• Creates warm, earthy, one-of-a-kind colours
• Supports sustainable fashion practices
• Every dyed piece is naturally unique

🏛️ Cultural Importance

Historically, Pathagi has played an important role in Sri Lankan culture. Its natural dye was traditionally used for coloring Buddhist monks' robes, handicrafts, woven products, and decorative items. It has also been widely used throughout Asia as a valuable source of natural red dye for centuries.

🌍 Earthora's Commitment

At Earthora, we believe in bringing together nature, tradition, and sustainable fashion. By using natural dye plants such as Pathagi, we create handcrafted garments that celebrate Sri Lanka's botanical heritage while reducing environmental impact.

Every Earthora creation is naturally dyed, environmentally conscious, and uniquely beautiful because nature never creates two identical masterpieces.`,
    tags: ["Coral red", "Ayurvedic", "Sri Lankan heritage"]
  },
  {
    img: mahogany,
    name: "Mahogany",
    latin: "Swietenia macrophylla",
    desc: "Premium hardwood yields warm reddish-brown tones while providing durable timber for sustainable forestry.",
    fullStory: `The Mahogany tree is a valuable tropical hardwood species belonging to the Meliaceae family. It is widely known for its strength, durability, and high-quality timber. Mahogany is originally native to the tropical regions of North and South America, and it was introduced to Sri Lanka in 1849. The first recorded planting in Sri Lanka is believed to have taken place in the Jaffna region.

Today, mahogany is grown in many tropical countries including India, Burma, Malaysia, Cuba, Jamaica, Honduras, and Mexico, mainly for timber production and roadside shade planting.

🌿 Botanical Description

Mahogany is a large, long-living tree that grows straight and tall.
• Height: Up to 30 meters
• Trunk: Straight, strong, and cylindrical
• Leaves: Dark green, compound, smooth, and glossy
• Flowers: Small, greenish-yellow, and fragrant
• Flowering season: Usually November to December
• Fruit: Woody capsule that splits open when mature
• Seeds: Winged seeds adapted for wind dispersal

The tree undergoes seasonal leaf shedding before producing new leaves and flowers.

🌍 Growth and Distribution

Mahogany grows well in tropical and subtropical climates. It is commonly planted in:
• Forest plantations
• Roadside avenues for shade
• Government reforestation projects
• Private timber plantations

In Sri Lanka, mahogany is widely found in forest reserves and cultivated plantations, especially in the Kurunegala district and dry/intermediate zones.

💨 Seed Dispersal

One of the unique features of mahogany is its wind-based seed dispersal system. When the fruit matures, it dries and splits open, releasing seeds that are carried by the wind using wing-like structures. This allows natural propagation over long distances.

💰 Economic Importance

Mahogany is highly valued for its premium-quality timber, which is widely used in:
• Furniture making
• Interior decoration
• Doors and windows
• Cabinet work
• Construction materials

Due to its durability, strength, and attractive grain, mahogany remains one of the most commercially important timber trees in tropical forestry.

🌱 Environmental Importance

Mahogany is also planted for environmental and landscaping purposes. It provides:
• Shade along roadsides
• Soil stabilization in plantations
• Green cover in reforestation projects
• Aesthetic value in urban and rural areas

Although it is an introduced species in Sri Lanka, it plays a significant role in forestry development and timber sustainability programs.

🎨 Natural Dye Properties

The bark and sawdust of mahogany produce warm reddish-brown tones that are excellent for natural textile dyeing. These earthy colours are perfect for creating sustainable, eco-friendly fabrics that carry the warmth and richness of tropical hardwoods.

🌳 Conclusion

The Mahogany tree is a globally important timber species that combines economic value with environmental benefits. While it is not native to Sri Lanka, it has become an important part of forestry and plantation systems in the country. Its strength, long lifespan, and high-quality wood make it one of the most valuable tropical trees in the world.`,
    tags: ["Reddish-brown", "Premium timber", "Sustainable forestry"]
  },
  {
    img: neem,
    name: "Neem",
    latin: "Azadirachta indica",
    desc: "Bitter leaves and bark yield soft golden-green tones while offering powerful medicinal and skincare benefits.",
    fullStory: `The Neem tree, known as Kohomba in Sinhala, is a highly valuable medicinal plant widely found in Sri Lanka, India, Pakistan, Thailand, Malaysia, and Indonesia. It is believed that its origin is in India, where it has been used for centuries in traditional medicine.

Neem belongs to the Meliaceae family and is considered one of the most important trees in Ayurveda and natural healing systems.

It is known in:
• Sinhala: Kohomba
• Tamil: Veppai
• English: Neem / Margosa tree
• Botanical name: Azadirachta indica

🌿 Tree Characteristics

Neem is a fast-growing tropical tree that can reach a height of 15–20 meters, and in some cases up to 40 meters.
• Leaves are long (20–40 cm), bitter in taste, and evergreen
• The tree remains green throughout the year
• Flowers are small, white, and fragrant with a honey-like scent
• A flower cluster may contain 150–200 flowers
• Fruits are oval and turn yellow when ripe
• Seeds are dispersed by wind, animals, and birds

Neem is highly drought-resistant and thrives in dry and warm climates.

🌱 Ecological Importance

Neem plays an important role in environmental protection:
• Prevents soil erosion
• Improves soil fertility and water retention
• Helps neutralize acidic soil
• Provides shade and supports biodiversity
• Naturally repels insects and pests

Because of these properties, Neem is widely planted in rural and agricultural areas.

🪵 Timber and Practical Uses

Neem wood is strong and resistant to insects and fungi. It is widely used for:
• Furniture making
• Agricultural tools
• Boats and carvings
• Durable household items

The wood is also polished to resemble mahogany in appearance.

💊 Medicinal Importance (Traditional Use)

Neem is considered one of the most powerful medicinal plants in Ayurveda and is often called "Sarva Roga Nivarini" (the healer of all diseases).

Traditional uses include:
• Skin diseases and acne treatment
• Blood purification
• Diabetes management support
• Malaria and fever treatments
• Wound healing
• Parasite and worm control
• Dental and oral health improvement
• Hair and scalp care

💆 Beauty & Skin Care Uses

Neem is widely used in natural cosmetic care:
• Acne Treatment: Neem leaves can be boiled in water and used as a face wash or toner
• Face Pack: Neem leaf paste can be applied to the skin to help improve clarity
• Skin Toner: Neem water can be used with cotton to cleanse the skin
• Hair Care: Neem water helps reduce dandruff and supports scalp health
• Cooling & Healing Packs: Neem mixed with honey or yogurt is used as a face mask

🏡 Traditional Home Remedies

Neem is widely used in traditional rural practices:
• Neem water is used for washing burns and wounds
• Neem leaves are used in chickenpox care for cooling and infection control
• Neem leaves are placed in bedding for their antimicrobial effect
• Neem decoction is used for bathing and skin cleansing
• Eye wash (cooled neem water) is traditionally used for eye irritation

🌿 Environmental Wisdom

In traditional Sri Lankan culture, Neem was often used as a protective plant around homes. It was believed to purify the environment, reduce disease spread, and protect households from epidemics.

🌳 Conclusion

The Neem tree (Kohomba) is one of nature's most powerful healing plants. It provides medicine, beauty care, environmental protection, and agricultural benefits all in one tree. Its role in traditional medicine and sustainable living makes it a priceless natural resource for future generations.`,
    tags: ["Golden-green", "Medicinal", "Skin healing"]
  },
  {
    img: velMadatiya,
    name: "Vel Madatiya",
    latin: "Rubia cordifolia",
    desc: "Natural skin brightener yields soft earthy reds and pinks while supporting radiant, healthy skin.",
    fullStory: `Vel Madatiya (Rubia cordifolia), commonly known as Manjistha, is one of the most valuable medicinal herbs used in Ayurveda and traditional herbal beauty care for centuries. It is especially renowned for promoting healthy, clear, and naturally glowing skin. Rich in powerful plant compounds, this herb supports skin health from within while helping maintain a youthful appearance.

🌿 Botanical Information

• Scientific Name: Rubia cordifolia
• Common Name: Manjistha
• Family: Rubiaceae
• Traditional Uses: Ayurveda, Herbal Medicine, Natural Skincare

💆 Benefits for Skin Care

Natural Skin Brightening:
Vel Madatiya is widely valued for its natural skin-brightening properties. It helps improve dull skin, reduce uneven skin tone, fade sun-induced pigmentation, and restore a healthy, radiant complexion without the use of harsh chemicals.

Helps Reduce Acne and Acne Marks:
Its natural antibacterial and anti-inflammatory properties help reduce acne, pimples, and skin irritation. Regular use may also help minimize acne scars and dark spots while leaving the skin smoother and healthier.

Anti-Aging Properties:
This medicinal plant is rich in antioxidants that help protect skin cells from damage caused by free radicals. It supports skin elasticity, reduces the appearance of fine lines and wrinkles, and helps maintain a youthful-looking complexion.

Natural Blood Purifier:
According to Ayurvedic medicine, Vel Madatiya is considered an excellent natural blood purifier. By helping remove toxins from the body, it contributes to clearer skin and may reduce skin conditions such as itching, irritation, and certain allergic reactions.

Natural Skin Lightening Effect:
Vel Madatiya contains natural compounds that may help regulate melanin production, making it useful for reducing pigmentation and improving overall skin tone. Unlike chemical bleaching agents, its effects are gentle and gradual.

🌸 Traditional Beauty Applications

Herbal Face Pack:
Mix Vel Madatiya powder with turmeric powder and fresh milk or yogurt to prepare a nourishing face mask. Apply it to the face for 15–20 minutes before rinsing with clean water.

Honey Face Mask:
Blend Vel Madatiya powder with pure honey to create a soothing facial treatment. This mixture helps reduce acne, calm inflammation, and improve overall skin health.

Natural Exfoliating Scrub:
Mix the powder with a small amount of water to make a gentle exfoliating scrub. It helps remove dead skin cells, leaving the skin fresh, smooth, and naturally radiant.

Scar Care:
A paste prepared by mixing Vel Madatiya powder with a small amount of herbal oil or clarified butter (ghee) has traditionally been used to help reduce the appearance of scars.

Use in Herbal Oils:
Vel Madatiya is an important ingredient in many traditional Ayurvedic herbal oils and beauty formulations designed to enhance skin complexion, nourish the scalp, and promote healthy hair growth.

💊 Traditional Medicinal Importance

For generations, Ayurvedic practitioners have valued Vel Madatiya as a powerful herbal remedy for supporting skin health, purifying the blood, reducing inflammation, and maintaining overall wellness. Its long history of traditional use has made it one of the most respected herbs in natural medicine.

📝 Note

While Vel Madatiya has a long history of traditional use in Ayurveda, scientific evidence for some of its health and cosmetic benefits is still developing. It should not be considered a replacement for professional medical advice or treatment. If you have a medical condition, are pregnant, breastfeeding, or have sensitive skin, consult a qualified healthcare professional before using herbal remedies.`,
    tags: ["Skin brightener", "Earthy reds", "Ayurvedic beauty"]
  },
  {
    img: venivelGatta,
    name: "Venivel Gatta",
    latin: "Coscinium fenestratum",
    desc: "Woody vine yields bright yellow-gold tones with powerful antimicrobial and anti-inflammatory properties.",
    fullStory: `Venivel Gatta, scientifically known as Coscinium fenestratum, is a woody medicinal climbing plant commonly found in the lowland wet zone forest ecosystems of Sri Lanka. It is an essential ingredient in traditional Ayurvedic medicinal formulations such as Paspanguwa and Dasapanguwa.

This woody forest vine spreads over large trees. The stem is smooth, while young shoots are covered with fine hairs. The flowers are unisexual and occur in clusters, with male and female flowers found on separate plants. The fruit is approximately 2–3 cm in diameter.

📜 Historical Significance

In ancient times, it was used as a strong binding rope for tying cattle, and therefore it is also known as "Ban-wel". The name "Venivel Gatta" is derived from the knot-like structure of the stem, which is an important botanical and medicinal characteristic.

Traditionally, Venivel Gatta was one of the first remedies used for emergency injuries such as cuts, punctures, and wounds caused by tools or sharp objects. From ancient times, it has been commonly used to prevent tetanus by drinking boiled Venivel preparations.

🧪 Modern Research

Modern research has also confirmed its medicinal value. It contains natural compounds with anti-microbial, anti-diabetic, and anti-inflammatory properties.

Among these, berberine is the most prominent compound responsible for its strong yellow color and medicinal activity. Other important compounds include palmatine and jatrorrhizine, which contribute to its antiviral and anti-inflammatory effects.

🌿 Traditional Names and Preparations

Venivel Gatta is also known by different names such as Banwel, Kaha-wel, and Wanu-wel. A popular traditional preparation includes boiling Venivel with garlic and drinking the decoction.

The medicinal parts of the plant include the stem (especially the knotted portions) and the roots. People living near forests traditionally harvest fresh Venivel sap and consume it to reduce fatigue and manage diabetes.

In rural households, children were bathed using water boiled with Venivel and neem leaves, which is believed to soften the skin and improve complexion.

💊 Medicinal Properties

• Balances Vata and Pitta dosha
• Boosts immunity
• Acts as a pain reliever
• Helps in fast wound healing
• Improves appetite and digestion
• Supports liver function and purifies blood
• Treats mouth ulcers and gum bleeding

👁️ Eye Care

It is used in treating eye inflammation. Fresh juice (swarasa) of Venivel is used for washing eyes to reduce itching, redness, and swelling.

🌿 Nature's Hidden Gift

Why Venivel Gatta is Special:
✨ Natural immunity booster – strengthens the body's defense system against common illnesses
🌡️ Cooling effect – helps reduce body heat and fever, commonly used as a cooling herbal drink
💪 Anti-inflammatory properties – helps reduce swelling, pain, and inflammation in the body
💧 Supports liver health – helps detoxify the body and improve liver function naturally
🩸 Blood purifier – traditionally used to purify blood and improve skin health
🌱 Aids digestion – supports a healthy digestive system and relieves stomach-related discomfort

⚠️ Conservation Note

Due to excessive harvesting, this valuable medicinal plant is now declining in the wild. Therefore, proper awareness and conservation are essential to protect it for future generations.`,
    tags: ["Bright yellow", "Antimicrobial", "Sri Lankan heritage"]
  },
  {
    img: kayippu,
    name: "Kayippu",
    latin: "Acacia catechu",
    desc: "Dark brown heartwood extract yields warm earthy tones while supporting oral health and digestion.",
    fullStory: `Kayippu, commonly known as Catechu, is a natural herbal extract obtained from the heartwood of the Khadira tree (Acacia catechu), a medicinal plant that has been valued in Ayurveda for centuries. It is well known for its astringent taste and its wide range of traditional medicinal applications, particularly in oral health, digestion, and wound care.

🌿 Botanical Information

• Common Name: Catechu / Cutch
• Sinhala Name: Kayippu
• Scientific Name: Acacia catechu
• Family: Fabaceae

🔬 What is Kayippu?

Kayippu is produced by boiling the heartwood of the Khadira tree to obtain a concentrated extract, which is then dried into solid pieces or powder. It has a dark brown to black color and a strong bitter, astringent taste. For centuries, it has been used in traditional medicine and as an ingredient in betel chewing.

💊 Traditional Medicinal Properties

According to Ayurvedic medicine, Kayippu is believed to possess several beneficial properties:
• Stimulates appetite and improves digestion
• Helps relieve indigestion and promotes healthy metabolism
• Supports the balance of Vata and Kapha doshas
• Traditionally used to soothe sore throat and throat irritation
• Helps promote the healing of wounds and mouth ulcers
• Possesses natural astringent, antimicrobial, and antioxidant properties
• Traditionally used to support oral hygiene and strengthen gums

🩺 Health Benefits

Supports Digestive Health:
Kayippu has long been used to stimulate appetite and improve digestive function. It is traditionally recommended for people experiencing poor digestion or loss of appetite.

Promotes Oral Health:
Its natural astringent and antimicrobial properties help maintain healthy gums and teeth. Traditional Ayurvedic preparations often include Kayippu for treating mouth ulcers, gum inflammation, and sore throat.

Wound Healing:
Kayippu has been traditionally applied to minor wounds because of its astringent properties, which may help reduce bleeding and support natural healing.

Rich in Natural Antioxidants:
Catechu contains plant compounds such as catechin, epicatechin, tannins, and flavonoids that exhibit antioxidant activity, helping protect cells from oxidative stress.

🏡 Traditional Uses

For generations, Kayippu has been used as:
• An ingredient in traditional betel preparations
• A component in Ayurvedic herbal formulations
• A natural remedy for sore throat and mouth ulcers
• A herbal preparation to improve digestion and appetite
• A traditional herbal extract for maintaining oral hygiene

🧪 Scientific Interest

Modern research has identified several bioactive compounds in Catechu, including catechins and tannins, which have demonstrated antioxidant, antimicrobial, and anti-inflammatory activity in laboratory studies. Researchers continue to investigate its potential therapeutic applications, although more human clinical studies are needed to confirm many traditional claims.

⚠️ Safety Information

Kayippu is generally used in small amounts in traditional medicine. Excessive consumption may cause digestive discomfort due to its high tannin content. It should always be used according to the guidance of a qualified Ayurvedic practitioner or healthcare professional.

🌳 Conclusion

Kayippu (Acacia catechu extract) remains one of the most respected herbal ingredients in traditional Ayurvedic medicine. Its long history of use for digestive health, oral care, wound healing, and overall wellness highlights its importance as a valuable natural remedy. When used responsibly, Kayippu continues to be appreciated as a beneficial herbal extract with both traditional significance and growing scientific interest.`,
    tags: ["Earthy tones", "Oral health", "Digestive support"]
  },
  {
    img: koon,
    name: "Koon",
    latin: "Schleichera oleosa",
    desc: "Ceylon Oak bark yields warm golden-brown tones while offering medicinal and nutritional benefits.",
    fullStory: `The Koon tree (Schleichera oleosa), commonly known as the Ceylon Oak or Kusum Tree, is one of Sri Lanka's most valuable indigenous medicinal trees. It has been an important part of traditional Ayurvedic medicine for centuries and is highly regarded for its nutritional, medicinal, ecological, and economic value. Almost every part of the tree including its roots, bark, leaves, flowers, fruits, and seeds is traditionally used for different purposes.

🌿 Botanical Information

• Scientific Name: Schleichera oleosa (Lour.) Oken
• Family: Sapindaceae
• Common English Names: Ceylon Oak, Kusum Tree
• Sinhala Name: Koon
• Tamil Names: Konji, Kosum, Thumbaridi, Marugakkottai
• Sanskrit Names: Jñānaskandha, Raktāmra, Krimivaksha, Lakshāvamāksha, Sukoshaka, Suraktaka, Vanāmra

🌍 Distribution and Habitat

The Koon tree is native to Sri Lanka and the Indian subcontinent. It naturally grows in Sri Lanka, India, Bangladesh, Nepal, and Myanmar and is also found in parts of China, Malaysia, and Indonesia.

In Sri Lanka, the tree is commonly found in the dry and intermediate zones, although it also grows in certain wet zone forests. It thrives in well-drained soils and can grow at elevations of up to 1,000 metres above sea level. A healthy Koon tree may live for approximately 150 years, making it an important long-lived forest species.

🌿 Botanical Description

The Koon tree is a large deciduous tree that generally grows between 15 and 25 metres in height. It develops a broad, spreading canopy that provides excellent shade.

Its trunk is covered with thick greyish-brown bark that becomes deeply fissured as the tree matures. The wood is strong, durable, and highly valued for timber.

The leaves are compound, consisting of four to five leaflets. Young leaves emerge in beautiful shades of pink to reddish bronze before gradually turning glossy green as they mature.

Small greenish yellow flowers appear in clusters and later develop into round or oval fruits. The ripe fruits turn brown and contain one or two seeds surrounded by a fleshy orange pulp with a pleasant sweet-and-sour taste.

The tree naturally reproduces through seeds and root suckers, allowing it to spread successfully in suitable habitats.

🥗 Nutritional Value

The ripe fruit of the Koon tree is an indigenous seasonal fruit that provides valuable nutrients, including:
• Carbohydrates
• Protein
• Small amounts of healthy fats
• Vitamin C
• Natural antioxidants and beneficial plant compounds

The fruit is traditionally eaten fresh and is also used in the preparation of traditional pickles in some parts of Sri Lanka.

💊 Traditional Medicinal Importance

The Koon tree has occupied an important place in Ayurvedic medicine for generations. According to Ayurvedic principles, it possesses:
• Bitter taste (Tikta Rasa)
• Dry quality (Ruksha Guna)
• Heating potency (Ushna Virya)
• Pungent post-digestive effect (Katu Vipaka)

Traditionally, it is believed to help maintain the balance of the body's Vata, Pitta, and Kapha doshas, particularly supporting the balance of Vata and Kapha.

Traditional Uses in Ayurveda:
• Diarrhoea and dysentery
• Cholera
• Certain skin disorders
• Rheumatic pain and arthritis
• Headaches
• Fever, including malarial fever
• Jaundice
• Asthma
• Digestive disorders

🌿 Medicinal Uses of Different Plant Parts

Bark:
The bark is valued for its natural astringent properties. Traditionally, it has been used in herbal remedies for diarrhoea, dysentery, fever, cholera, malaria, and digestive disorders.

Leaves:
Fresh leaves are traditionally prepared as herbal porridge and consumed during recovery from jaundice. They are also used in several Ayurvedic herbal preparations.

Fruits:
The ripe fruits are edible and enjoyed as a seasonal delicacy. In traditional medicine, they are considered a warming food that provides nourishment and energy.

Seeds:
The seeds produce Kusum Oil, a traditional vegetable oil widely used for hair care and skin conditioning.`,
    tags: ["Golden-brown", "Ceylon Oak", "Indigenous"]
  },
  {
    img: teaPowder,
    name: "Tea Powder",
    latin: "Camellia sinensis",
    desc: "Used tea leaves yield soft earthy browns and warm taupes, transforming waste into sustainable colour.",
    fullStory: `Tea powder, derived from the leaves of Camellia sinensis, is one of the most versatile and sustainable natural dye sources available. At Earthora, we use recycled tea powder - the dried leaves left over from tea production - to create beautiful, earthy colours that transform agricultural waste into sustainable fashion.

🌿 Botanical Information

• Scientific Name: Camellia sinensis
• Family: Theaceae
• Common Names: Tea, Green Tea, Black Tea
• Origin: East Asia

🍃 The Journey from Leaf to Dye

Tea leaves have been used for thousands of years for their refreshing beverage properties. However, their colour-giving potential is equally remarkable. The leaves contain natural tannins and flavonoids that bind beautifully to natural fibres, producing soft, warm tones.

When tea powder is used as a dye, it creates a range of colours from pale cream and soft beige to warm tan, rich brown, and deep walnut tones, depending on the concentration, mordant used, and dyeing technique.

🎨 Natural Dye Properties

Tea powder produces some of the most versatile and consistent natural dyes available:
• Soft creams and warm whites (light concentration)
• Gentle beiges and taupes (medium concentration)
• Rich tans and caramel tones (strong concentration)
• Deep walnut and warm browns (high concentration)

The colour deepens beautifully with successive dye baths, allowing artisans to create unique, layered effects.

🌱 Environmental Benefits

Using tea powder as a natural dye source offers significant environmental advantages:
• Transforms agricultural waste into valuable resources
• Reduces the need for synthetic chemical dyes
• Creates biodegradable, eco-friendly colour
• Supports circular economy principles
• Produces minimal waste in the dyeing process

💊 Traditional Uses

Beyond its dyeing properties, tea has a long history of traditional medicinal use:
• Rich in antioxidants and polyphenols
• Traditionally used to support digestion
• Known for its calming properties
• Contains natural compounds that support overall wellness

♻️ Sustainability at Earthora

At Earthora, we source tea powder from sustainable tea production facilities, giving new life to materials that would otherwise become agricultural waste. This aligns perfectly with our commitment to zero-waste, sustainable fashion.

Every piece dyed with tea powder carries the gentle warmth and natural beauty of this humble leaf, reminding us that nature's gifts are all around us - even in what others might consider waste.`,
    tags: ["Earthy browns", "Zero-waste", "Sustainable dye"]
  }
];

function Ingredients() {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-leaf">Ingredients Used</p>
          <h1 className="mt-4 text-5xl sm:text-7xl text-balance">
            Colour, drawn from <span className="italic text-leaf">the earth</span>.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Every hue in an Earthora piece comes from a plant. No synthetic pigments — only bark, wood, peel, seed and bloom.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={ingredientsHero}
          alt="Natural botanical dye ingredients"
          loading="lazy"
          className="w-full h-[380px] sm:h-[500px] object-cover rounded-3xl"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition hover:border-leaf/60 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden flex-shrink-0">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-light text-foreground">{it.name}</h3>
                  <p className="mt-1 text-xs italic text-muted-foreground">{it.latin}</p>
                </div>
              </div>
              
              <div className="flex flex-col flex-1 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {it.desc}
                </p>
                
                <div className="mt-5 flex flex-wrap gap-2">
                  {it.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedIngredient(it)}
                  className="mt-6 w-full rounded-full border border-leaf/30 bg-transparent px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-leaf hover:text-white hover:border-leaf"
                >
                  Learn More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedIngredient && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedIngredient(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedIngredient(null)}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border/60 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/20 p-2 text-white backdrop-blur-sm transition hover:bg-black/40"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative h-72 overflow-hidden">
              <img
                src={selectedIngredient.img}
                alt={selectedIngredient.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-light text-white">{selectedIngredient.name}</h2>
                <p className="mt-1 text-sm italic text-white/80">{selectedIngredient.latin}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6 flex flex-wrap gap-2">
                {selectedIngredient.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-sm prose-invert max-w-none">
                {selectedIngredient.fullStory.split('\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return null;
                  
                  const isHeading = paragraph.trim().endsWith(':') || 
                                   (paragraph.trim().length < 60 && paragraph.trim().toUpperCase() === paragraph.trim());
                  
                  if (isHeading) {
                    return (
                      <h4 key={index} className="mt-4 mb-2 text-sm font-semibold text-foreground">
                        {paragraph.trim().replace(':', '')}
                      </h4>
                    );
                  }
                  
                  if (paragraph.trim().startsWith('•')) {
                    return (
                      <li key={index} className="ml-4 text-sm leading-relaxed text-foreground/80">
                        {paragraph.trim().replace('•', '').trim()}
                      </li>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-sm leading-relaxed text-foreground/80">
                      {paragraph.trim()}
                    </p>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Used in</p>
                  <p className="text-sm font-medium text-foreground">Earthora Collection</p>
                </div>
                <button
                  onClick={() => setSelectedIngredient(null)}
                  className="rounded-full bg-leaf px-6 py-2.5 text-sm font-medium text-white transition hover:bg-leaf/80"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}