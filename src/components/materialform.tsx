import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Package } from "lucide-react";
import { useToast } from "src/hooks/use-toast";

interface Material {
  name: string;
  category: string;
  unit: string;
  pricePerUnit: string;
  minimumOrder: string;
  description: string;
  tags: string[];
}

const categories = [
  "Vegetables & Fruits",
  "Spices & Seasonings", 
  "Grains & Cereals",
  "Dairy Products",
  "Meat & Poultry",
  "Oils & Fats",
  "Packaging Materials",
  "Beverages"
];

const units = ["kg", "g", "L", "ml", "pieces", "boxes", "bags"];

export function MaterialForm() {
  const { toast } = useToast();
  const [material, setMaterial] = useState<Material>({
    name: "",
    category: "",
    unit: "",
    pricePerUnit: "",
    minimumOrder: "",
    description: "",
    tags: []
  });
  const [newTag, setNewTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof Material, value: string) => {
    setMaterial(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !material.tags.includes(newTag.trim())) {
      setMaterial(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setMaterial(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Material Added Successfully!",
        description: `${material.name} has been added to your inventory.`,
      });

      // Reset form
      setMaterial({
        name: "",
        category: "",
        unit: "",
        pricePerUnit: "",
        minimumOrder: "",
        description: "",
        tags: []
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add material. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass-effect hover-lift animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg shadow-glow">
            <Package className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl gradient-primary bg-clip-text text-transparent">
              Add New Material
            </CardTitle>
            <CardDescription>
              Add materials to your supplier inventory for street food vendors
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Material Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Material Name *
              </Label>
              <Input
                id="name"
                value={material.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="e.g., Fresh Tomatoes"
                className="hover-glow focus:shadow-glow transition-all duration-300"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Category *
              </Label>
              <Select value={material.category} onValueChange={(value: string) => handleInputChange("category", value)}>
                <SelectTrigger className="hover-glow focus:shadow-glow transition-all duration-300">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Unit */}
            <div className="space-y-2">
              <Label htmlFor="unit" className="text-sm font-medium">
                Unit *
              </Label>
              <Select value={material.unit} onValueChange={(value: string) => handleInputChange("unit", value)}>
                <SelectTrigger className="hover-glow focus:shadow-glow transition-all duration-300">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {units.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price per Unit */}
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium">
                Price per Unit (₹) *
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={material.pricePerUnit}
                onChange={(e) => handleInputChange("pricePerUnit", e.target.value)}
                placeholder="0.00"
                className="hover-glow focus:shadow-glow transition-all duration-300"
                required
              />
            </div>

            {/* Minimum Order */}
            <div className="space-y-2">
              <Label htmlFor="minimum" className="text-sm font-medium">
                Minimum Order Quantity *
              </Label>
              <Input
                id="minimum"
                type="number"
                value={material.minimumOrder}
                onChange={(e) => handleInputChange("minimumOrder", e.target.value)}
                placeholder="1"
                className="hover-glow focus:shadow-glow transition-all duration-300"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              value={material.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe the material, quality, origin, etc."
              rows={3}
              className="hover-glow focus:shadow-glow transition-all duration-300"
            />
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Tags</Label>
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag (e.g., organic, local)"
                className="hover-glow focus:shadow-glow transition-all duration-300"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} variant="outline" size="icon" className="hover-lift">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {material.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {material.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="hover-lift">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-2 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-primary hover-lift shadow-glow animate-pulse-glow" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? "Adding Material..." : "Add Material"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}