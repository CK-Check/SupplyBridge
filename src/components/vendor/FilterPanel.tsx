import { Search, Filter, SlidersHorizontal, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface FilterPanelProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  selectedPriceRange: string | null;
  onPriceRangeChange: (range: string | null) => void;
  verifiedOnly: boolean;
  onVerifiedChange: (verified: boolean) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
}

const categories = [
  { id: 'vegetables', name: 'Vegetables', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { id: 'meat', name: 'Meat', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { id: 'dairy', name: 'Dairy', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { id: 'spices', name: 'Spices', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { id: 'grains', name: 'Grains', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { id: 'other', name: 'Other', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' }
];

const priceRanges = [
  { id: 'low', name: 'Low Price', color: 'bg-success/20 text-success border-success/30' },
  { id: 'medium', name: 'Medium Price', color: 'bg-warning/20 text-warning border-warning/30' },
  { id: 'high', name: 'High Price', color: 'bg-destructive/20 text-destructive border-destructive/30' }
];

const ratings = [4.5, 4.0, 3.5, 3.0];

export const FilterPanel = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
  verifiedOnly,
  onVerifiedChange,
  minRating,
  onRatingChange,
  onClearFilters
}: FilterPanelProps) => {
  return (
    <Card className="vendor-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          Filters
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Search Suppliers</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, location, or specialty..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="vendor-input pl-10"
            />
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Categories */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Category</label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant="outline"
                className={`cursor-pointer transition-all duration-300 justify-center py-2 hover:scale-105 ${
                  selectedCategory === category.id
                    ? category.color
                    : 'bg-muted/20 text-muted-foreground border-muted/30 hover:bg-accent/20'
                }`}
                onClick={() => onCategoryChange(selectedCategory === category.id ? null : category.id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Price Range */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Price Range</label>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <Badge
                key={range.id}
                variant="outline"
                className={`cursor-pointer transition-all duration-300 justify-center py-2 w-full hover:scale-105 ${
                  selectedPriceRange === range.id
                    ? range.color
                    : 'bg-muted/20 text-muted-foreground border-muted/30 hover:bg-accent/20'
                }`}
                onClick={() => onPriceRangeChange(selectedPriceRange === range.id ? null : range.id)}
              >
                {range.name}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Minimum Rating */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Minimum Rating</label>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div
                key={rating}
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                  minRating === rating
                    ? 'bg-primary/20 border border-primary/30'
                    : 'bg-muted/20 border border-muted/30 hover:bg-accent/20'
                }`}
                onClick={() => onRatingChange(minRating === rating ? 0 : rating)}
              >
                <Star className={`w-4 h-4 ${minRating === rating ? 'text-primary fill-current' : 'text-muted-foreground'}`} />
                <span className={`text-sm ${minRating === rating ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                  {rating}+ Stars
                </span>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Verified Only */}
        <div className="space-y-3">
          <div
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
              verifiedOnly
                ? 'bg-success/20 border border-success/30'
                : 'bg-muted/20 border border-muted/30 hover:bg-accent/20'
            }`}
            onClick={() => onVerifiedChange(!verifiedOnly)}
          >
            <div className={`w-4 h-4 rounded border-2 transition-all duration-300 ${
              verifiedOnly
                ? 'bg-success border-success'
                : 'border-muted-foreground'
            }`}>
              {verifiedOnly && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <span className={`text-sm font-medium ${verifiedOnly ? 'text-success' : 'text-muted-foreground'}`}>
              Verified Suppliers Only
            </span>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Clear Filters */}
        <Button
          onClick={onClearFilters}
          variant="outline"
          className="w-full vendor-button-secondary"
        >
          <Filter className="w-4 h-4 mr-2" />
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
};