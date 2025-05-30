'use client';

import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { addItemToCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ item }: { item: Omit<CartItem, 'cartId'> }) => {
    const router = useRouter();
    const { toast } = useToast();

    const handleAddToCart = async () => {
        const res = await addItemToCart();

        if (!res.success) {
            toast({
                variant: 'destructive',
                description: res.message,
            });
            return;
        }

        toast({
            description: `${item.name} added to the cart`,
            action: (
                <ToastAction
                    className='bg-primary text-white hover:bg-gray-800'
                    onClick={() => router.push('/cart')}
                    altText='Go to cart'
                >
                    Go to cart
                </ToastAction>
            ),
        });
    };

    return (
        <Button className='w-full' type='button' onClick={handleAddToCart}>
            <Plus />
            Add to cart
        </Button>
    );
};

export default AddToCart;
