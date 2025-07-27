import { Star, MapPin, Phone, Mail, Clock, Package, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Supplier } from '@/types/vendor';

interface SupplierCardProps {
  supplier: Supplier;
  onDirectOrder: (supplier: Supplier) => void;
  onJoinGroup: (supplier: Supplier) => void;
}

export const SupplierCard = ({ supplier, onDirectOrder, onJoinGroup }: SupplierCardProps) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-success';
    if (rating >= 4.0) return 'text-warning';
    return 'text-destructive';
  };

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'low': return 'bg-success/20 text-success border-success/30';
      case 'medium': return 'bg-warning/20 text-warning border-warning/30';
      case 'high': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      vegetables: 'bg-green-500/20 text-green-400 border-green-500/30',
      meat: 'bg-red-500/20 text-red-400 border-red-500/30',
      dairy: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      spices: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      grains: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      other: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    };
    return colors[category] || colors.other;
  };

  return (
    <Card className="vendor-card group cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {supplier.name}
              </h3>
              {supplier.verified && (
                <CheckCircle className="w-5 h-5 text-success" />
              )}
              {!supplier.verified && (
                <AlertCircle className="w-5 h-5 text-warning" />
              )}
            </div>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <Star className={`w-4 h-4 ${getRatingColor(supplier.rating)} fill-current`} />
                <span className={`font-semibold ${getRatingColor(supplier.rating)}`}>
                  {supplier.rating}
                </span>
              </div>
              
              <Badge variant="outline" className={getCategoryColor(supplier.category)}>
                {supplier.category}
              </Badge>
              
              <Badge variant="outline" className={getPriceRangeColor(supplier.priceRange)}>
                {supplier.priceRange} price
              </Badge>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{supplier.location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Delivery: {supplier.deliveryTime}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span>Min Order: ₹{supplier.minimumOrder}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {supplier.specialties.map((specialty: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{supplier.contactNumber}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{supplier.email}</span>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <Button 
            onClick={() => onDirectOrder(supplier)}
            className="vendor-button-primary flex-1"
          >
            Direct Order
          </Button>
          
          <Button 
            onClick={() => onJoinGroup(supplier)}
            variant="outline"
            className="vendor-button-secondary flex-1"
          >
            Join Group
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};