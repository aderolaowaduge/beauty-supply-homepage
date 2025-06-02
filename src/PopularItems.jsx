// UI components for tabs and cards imported for layout and styling
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import mockData from "./mockData";

export default function PopularItems() {
  return (
    <section className="my-16 mx-6 md:mx-10">
      {/* Section title */}
      <h2 className="text-3xl font-semibold text-center mb-6 text-accent">
        Most Popular Items This Week
      </h2>

      {/* Tabs component to switch between product categories */}
      <Tabs defaultValue="haircare" className="w-full bg-background">
        {/* Tab headers for each category */}
        <TabsList className="justify-center flex-wrap gap-2 bg-card shadow-sm p-2 rounded-lg">
          <TabsTrigger value="haircare">Haircare</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
          <TabsTrigger value="novelty">Novelty</TabsTrigger>
        </TabsList>

        {/* Tab content: products displayed in grid for each category */}
        {Object.entries(mockData).map(([category, items]) => (
          <TabsContent
            key={category}
            value={category}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6"
          >
            {items.map((item) => (
              <a key={item.id} href={`/product/${item.id}`} className="block">
                {/* Card showing product image and name with hover effects */}
                <Card className="bg-card hover:shadow-lg hover:ring-1 hover:ring-accent transition-all rounded-xl cursor-pointer h-full">
                  <CardContent className="p-3 flex flex-col h-full">
                    <div className="w-full aspect-square mb-3 overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-base font-medium text-center text-foreground mt-auto">
                      {item.name}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
