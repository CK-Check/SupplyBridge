import { useState, useMemo } from 'react';
import { Store, TrendingUp, Users, Package, Bell, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSuppliers } from '@/hooks/useSuppliers';
import { SupplierCard } from '@/components/vendor/SupplierCard';
import { FilterPanel } from '@/components/vendor/FilterPanel';
import { OrdersPanel } from '@/components/vendor/OrdersPanel';
import { Supplier } from '@/types/vendor';
import { useToast } from '@/hooks/use-toast';

const VendorDashboard = () => {
  const { suppliers, loading, error } = useSuppliers();
  const { toast } = useToast();
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);

  // Filter suppliers
  const filteredSuppliers = useMemo(() => {
    return suppliers.filter((supplier: Supplier) => {
      // Search filter
      if (searchTerm && !supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !supplier.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !supplier.specialties.some((s: string) => s.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }

      // Category filter
      if (selectedCategory && supplier.category !== selectedCategory) return false;
      
      // Price range filter
      if (selectedPriceRange && supplier.priceRange !== selectedPriceRange) return false;
      
      // Verified filter
      if (verifiedOnly && !supplier.verified) return false;
      
      // Rating filter
      if (minRating && supplier.rating < minRating) return false;

      return true;
    });
  }, [suppliers, searchTerm, selectedCategory, selectedPriceRange, verifiedOnly, minRating]);

  const handleDirectOrder = (supplier: Supplier) => {
    toast({
      title: "Direct Order Initiated",
      description: `Starting direct order process with ${supplier.name}`,
    });
  };

  const handleJoinGroup = (supplier: Supplier) => {
    toast({
      title: "Group Order",
      description: `Looking for active group orders from ${supplier.name}`,
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedPriceRange(null);
    setVerifiedOnly(false);
    setMinRating(0);
  };

  // Stats data
  const stats = [
    {
      title: 'Active Suppliers',
      value: suppliers.filter((s: Supplier) => s.verified).length,
icon: Store,
      color: 'text-primary',
      bgColor: 'bg-primary/20'
    },
    {
      title: 'Pending Orders',
      value: 3,
      icon: Package,
      color: 'text-warning',
      bgColor: 'bg-warning/20'
    },
    {
      title: 'Group Orders',
      value: 2,
      icon: Users,
      color: 'text-accent',
      bgColor: 'bg-accent/20'
    },
    {
      title: 'This Month Savings',
      value: '₹12,500',
      icon: TrendingUp,
      color: 'text-success',
      bgColor: 'bg-success/20'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-muted-foreground">Loading vendor dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="vendor-card max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={() => window.location.reload()} className="vendor-button-primary">
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Vendor Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">Manage your supplier network</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="vendor-button-secondary">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
                <Badge variant="destructive" className="ml-2 px-1.5 py-0.5 text-xs">3</Badge>
              </Button>
              <Button variant="outline" size="sm" className="vendor-button-secondary">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="vendor-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <FilterPanel
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedPriceRange={selectedPriceRange}
                onPriceRangeChange={setSelectedPriceRange}
                verifiedOnly={verifiedOnly}
                onVerifiedChange={setVerifiedOnly}
                minRating={minRating}
                onRatingChange={setMinRating}
                onClearFilters={clearFilters}
              />
              
              <OrdersPanel />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Available Suppliers
                </h2>
                <p className="text-muted-foreground">
                  {filteredSuppliers.length} supplier{filteredSuppliers.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>

            {/* Suppliers Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {filteredSuppliers.map((supplier: Supplier, index: number) => (
                <div
                  key={supplier.id}
                  className="fade-in-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SupplierCard
                    supplier={supplier}
                    onDirectOrder={handleDirectOrder}
                    onJoinGroup={handleJoinGroup}
                  />
                </div>
              ))}
            </div>

            {filteredSuppliers.length === 0 && (
              <Card className="vendor-card text-center py-12">
                <CardContent>
                  <Store className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No suppliers found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters to find more suppliers
                  </p>
                  <Button onClick={clearFilters} className="vendor-button-primary">
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;