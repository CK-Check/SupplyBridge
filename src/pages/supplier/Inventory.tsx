import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Search, Edit, Trash2, AlertTriangle } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  unit: string;
  pricePerUnit: number;
  stock: number;
  minimumOrder: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  tags: string[];
}

const mockInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    category: "Vegetables & Fruits",
    unit: "kg",
    pricePerUnit: 45,
    stock: 150,
    minimumOrder: 5,
    status: "in-stock",
    tags: ["fresh", "local"]
  },
  {
    id: "2",
    name: "Onions",
    category: "Vegetables & Fruits", 
    unit: "kg",
    pricePerUnit: 30,
    stock: 8,
    minimumOrder: 3,
    status: "low-stock",
    tags: ["fresh"]
  },
  {
    id: "3",
    name: "Green Chili",
    category: "Vegetables & Fruits",
    unit: "kg", 
    pricePerUnit: 80,
    stock: 0,
    minimumOrder: 1,
    status: "out-of-stock",
    tags: ["spicy", "fresh"]
  },
  {
    id: "4",
    name: "Basmati Rice",
    category: "Grains & Cereals",
    unit: "kg",
    pricePerUnit: 120,
    stock: 200,
    minimumOrder: 10,
    status: "in-stock",
    tags: ["premium", "aromatic"]
  }
];

const statusConfig = {
  "in-stock": {
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    label: "In Stock"
  },
  "low-stock": {
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", 
    label: "Low Stock"
  },
  "out-of-stock": {
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    label: "Out of Stock"
  }
};

export function Inventory() {
  const [inventory] = useState<InventoryItem[]>(mockInventory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusBadge = (status: InventoryItem["status"]) => {
    const config = statusConfig[status];
    return (
      <Badge variant="outline" className={`${config.color} hover-lift transition-all duration-300`}>
        {status === "low-stock" && <AlertTriangle className="h-3 w-3 mr-1" />}
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Inventory Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your material inventory and stock levels
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="glass-effect">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search materials by name, category, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 hover-glow focus:shadow-glow transition-all duration-300"
            />
          </div>
        </CardContent>
      </Card>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.map((item) => (
          <Card key={item.id} className="glass-effect hover-lift animate-fade-in">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg shadow-glow">
                    <Package className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {item.category}
                    </CardDescription>
                  </div>
                </div>
                {getStatusBadge(item.status)}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Stock Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current Stock</p>
                  <p className="text-lg font-semibold">
                    {item.stock} {item.unit}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Price per {item.unit}</p>
                  <p className="text-lg font-semibold text-green-400">
                    ₹{item.pricePerUnit}
                  </p>
                </div>
              </div>

              {/* Minimum Order */}
              <div>
                <p className="text-sm text-muted-foreground">Minimum Order</p>
                <p className="text-sm font-medium">
                  {item.minimumOrder} {item.unit}
                </p>
              </div>

              {/* Tags */}
              {item.tags.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Tags</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs hover-lift">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 hover-lift">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-destructive/20 hover:text-destructive hover-lift">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Stock Warning */}
              {item.status === "low-stock" && (
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <p className="text-sm text-yellow-400 font-medium">
                      Low stock warning
                    </p>
                  </div>
                  <p className="text-xs text-yellow-300 mt-1">
                    Consider restocking soon to avoid stockouts
                  </p>
                </div>
              )}

              {item.status === "out-of-stock" && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <p className="text-sm text-red-400 font-medium">
                      Out of stock
                    </p>
                  </div>
                  <p className="text-xs text-red-300 mt-1">
                    This item is currently unavailable
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInventory.length === 0 && (
        <Card className="glass-effect">
          <CardContent className="p-12 text-center">
            <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No materials found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or add new materials to your inventory
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}