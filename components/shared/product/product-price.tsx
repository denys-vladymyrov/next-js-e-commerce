import {cn} from '@/lib/utils';

const ProductPrice = ({
    value,
    className,
}: {
    value: number;
    className?: string;
}) => {
    // Ensure two decimal places

    console.log('value',  value);

    const stringValue = value.toFixed(2);
    // Get the int/float
    const [intValue, floatValue] = stringValue.split('.');

    console.log(intValue);
    console.log(floatValue);

    return (
        <p className={cn('text-2xl', className)}>
            <span className='text-xs align-super'>$</span>
            {intValue}
            <span className='text-xs align-super'>.{floatValue}</span>
        </p>
    );
};

export default ProductPrice;
