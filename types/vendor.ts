export interface Supplier {
  id: string;
  name: string;
  category: 'vegetables' | 'meat' | 'dairy' | 'spices' | 'grains' | 'other';
  location: string;
  rating: number;
  priceRange: 'low' | 'medium' | 'high';
  contactNumber: string;
  email: string;
  verified: boolean;
  lastDelivery: string;
  specialties: string[];
  minimumOrder: number;
  deliveryTime: string;
  image: string;
}

export interface Order {
  id: string;
  supplierId: string;
  supplierName: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  estimatedDelivery: string;
  orderType: 'direct' | 'group';
  groupOrderId?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  totalPrice: number;
}

export interface GroupOrder {
  id: string;
  title: string;
  description: string;
  supplierId: string;
  supplierName: string;
  targetAmount: number;
  currentAmount: number;
  participants: number;
  endDate: string;
  status: 'active' | 'closed' | 'fulfilled';
  createdBy: string;
  createdDate: string;
}