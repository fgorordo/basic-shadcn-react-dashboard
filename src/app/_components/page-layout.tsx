import { PropsWithChildren } from 'react';

interface PageLayoutProps extends PropsWithChildren {
    title: string;
    description: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
    return (
        <div className='pb-12 px-6'>
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <p className='text-sm mb-4'>{description}</p>
            {children}
        </div>
    );
}