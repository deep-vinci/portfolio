import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'View my resume - Fullstack Developer and Engineering Student',
    openGraph: {
        title: 'Resume | deepvinci',
        description: 'View my resume - Fullstack Developer and Engineering Student',
        type: 'website',
        images: [
            {
                url: '/resume-meta.png',
                width: 1200,
                height: 630,
                alt: 'Resume Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Resume | deepvinci',
        description: 'View my resume - Fullstack Developer and Engineering Student',
        images: ['/resume-meta.png'],
    },
};

export default function ResumePage() {
    redirect('/resume-meta.pdf');
}

