import { NextResponse } from 'next/server';

type BlogPost = {
    title: string;
    url: string;
    publishedAt: string;
    description: string;
    image?: string;
}

// Simple RSS parser for Medium feed
function parseMediumRSS(xml: string): BlogPost[] {
    const posts: BlogPost[] = [];
    
    // Match all item tags
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    
    while ((match = itemRegex.exec(xml)) !== null) {
        const itemContent = match[1];
        
        // Extract title
        const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
        const title = titleMatch ? titleMatch[1].trim() : '';
        
        // Extract link
        const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
        const url = linkMatch ? linkMatch[1].trim() : '';
        
        // Extract published date
        const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
        const pubDate = pubDateMatch ? pubDateMatch[1].trim() : '';
        
        // Extract description (content:encoded or description)
        const descriptionMatch = itemContent.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/);
        const descriptionContent = descriptionMatch 
            ? descriptionMatch[1] 
            : itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) 
                ? itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1] || ''
                : '';
        
        // Extract image from content (first img tag)
        let image: string | undefined;
        const imgMatch = descriptionContent.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (imgMatch && imgMatch[1]) {
            let imgUrl = imgMatch[1];
            // Convert Medium CDN URLs to optimized format if needed
            if (imgUrl.includes('medium.com') && imgUrl.includes('?q=')) {
                // Remove query params for cleaner URLs
                imgUrl = imgUrl.split('?')[0];
            }
            image = imgUrl;
        }
        
        // Also check for media:thumbnail
        if (!image) {
            const mediaThumbMatch = itemContent.match(/<media:thumbnail[^>]+url=["']([^"']+)["']/i);
            if (mediaThumbMatch && mediaThumbMatch[1]) {
                image = mediaThumbMatch[1];
            }
        }
        
        // Also check for media:content
        if (!image) {
            const mediaContentMatch = itemContent.match(/<media:content[^>]+url=["']([^"']+)["']/i);
            if (mediaContentMatch && mediaContentMatch[1]) {
                image = mediaContentMatch[1];
            }
        }
        
        // Extract first line/paragraph from description (strip HTML tags)
        let description = descriptionContent
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .trim();
        
        // Get first line or first 150 characters
        const firstLine = description.split('\n')[0] || description.substring(0, 150);
        description = firstLine.length > 150 ? firstLine.substring(0, 150) + '...' : firstLine;
        
        if (title && url) {
            posts.push({
                title,
                url,
                publishedAt: pubDate,
                description: description || '',
                image,
            });
        }
    }
    
    return posts;
}

export async function GET() {
    try {
        const mediumRssUrl = 'https://medium.com/feed/@deepakworkpc';
        
        const response = await fetch(mediumRssUrl, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch Medium RSS feed');
        }
        
        const xml = await response.text();
        const posts = parseMediumRSS(xml);
        
        return NextResponse.json({ posts });
    } catch (error) {
        console.error('Error fetching Medium posts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch Medium posts', posts: [] },
            { status: 500 }
        );
    }
}

