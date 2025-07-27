import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
// Update the import path below to the correct relative path, for example:
import { Supplier } from '../types/vendor';
// Or create the file if it does not exist.

// Mock data for demo purposes
const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Green Valley Farms',
    category: 'vegetables',
    location: 'Mumbai, Maharashtra',
    rating: 4.8,
    priceRange: 'medium',
    contactNumber: '+91 98765 43210',
    email: 'contact@greenvalley.com',
    verified: true,
    lastDelivery: '2024-01-15',
    specialties: ['Organic Vegetables', 'Fresh Herbs', 'Seasonal Fruits'],
    minimumOrder: 500,
    deliveryTime: '2-4 hours',
    image: '/api/placeholder/300/200'
  },
  {
    id: '2',
    name: 'Spice Kingdom',
    category: 'spices',
    location: 'Kerala, India',
    rating: 4.9,
    priceRange: 'low',
    contactNumber: '+91 87654 32109',
    email: 'orders@spicekingdom.in',
    verified: true,
    lastDelivery: '2024-01-14',
    specialties: ['Authentic Spices', 'Masala Blends', 'Dried Herbs'],
    minimumOrder: 200,
    deliveryTime: '1-2 days',
    image: '/api/placeholder/300/200'
  },
  {
    id: '3',
    name: 'Fresh Dairy Co.',
    category: 'dairy',
    location: 'Punjab, India',
    rating: 4.7,
    priceRange: 'medium',
    contactNumber: '+91 76543 21098',
    email: 'sales@freshdairy.co',
    verified: true,
    lastDelivery: '2024-01-16',
    specialties: ['Fresh Milk', 'Cheese', 'Yogurt', 'Butter'],
    minimumOrder: 300,
    deliveryTime: '4-6 hours',
    image: '/api/placeholder/300/200'
  },
  {
    id: '4',
    name: 'Metro Meat Supplies',
    category: 'meat',
    location: 'Delhi, India',
    rating: 4.6,
    priceRange: 'high',
    contactNumber: '+91 65432 10987',
    email: 'orders@metromeat.com',
    verified: false,
    lastDelivery: '2024-01-12',
    specialties: ['Fresh Chicken', 'Mutton', 'Seafood'],
    minimumOrder: 1000,
    deliveryTime: '6-8 hours',
    image: '/api/placeholder/300/200'
  },
  {
    id: '5',
    name: 'Golden Grains Trading',
    category: 'grains',
    location: 'Haryana, India',
    rating: 4.5,
    priceRange: 'low',
    contactNumber: '+91 54321 09876',
    email: 'info@goldengrains.in',
    verified: true,
    lastDelivery: '2024-01-10',
    specialties: ['Rice', 'Wheat', 'Pulses', 'Cereals'],
    minimumOrder: 1500,
    deliveryTime: '1-3 days',
    image: '/api/placeholder/300/200'
  },
  {
    id: '6',
    name: 'Urban Grocers',
    category: 'other',
    location: 'Bangalore, Karnataka',
    rating: 4.4,
    priceRange: 'medium',
    contactNumber: '+91 43210 98765',
    email: 'support@urbangrocers.com',
    verified: true,
    lastDelivery: '2024-01-13',
    specialties: ['Packaged Foods', 'Snacks', 'Beverages'],
    minimumOrder: 400,
    deliveryTime: '4-8 hours',
    image: '/api/placeholder/300/200'
  }
];

export const useSuppliers = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        setLoading(true);
        // In a real app, this would fetch from Firestore
        // const suppliersRef = collection(db, 'suppliers');
        // const q = query(suppliersRef, orderBy('rating', 'desc'));
        // const querySnapshot = await getDocs(q);
        // const suppliersData = querySnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // })) as Supplier[];
        
        // For demo, use mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setSuppliers(mockSuppliers);
        setError(null);
      } catch (err) {
        setError('Failed to fetch suppliers');
        console.error('Error fetching suppliers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  const filterSuppliers = (
    category?: string,
    priceRange?: string,
    verified?: boolean,
    minRating?: number
  ) => {
    return suppliers.filter(supplier => {
      if (category && supplier.category !== category) return false;
      if (priceRange && supplier.priceRange !== priceRange) return false;
      if (verified !== undefined && supplier.verified !== verified) return false;
      if (minRating && supplier.rating < minRating) return false;
      return true;
    });
  };

  return {
    suppliers,
    loading,
    error,
    filterSuppliers
  };
};