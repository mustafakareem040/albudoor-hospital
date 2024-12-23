import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export default async function POST(request: Request) {
    try {
        const body = await request.json();
        const authKey = request.headers.get('Authorization');

        const expectedAuthKey = "dMfqgY5D8hqaElW";
        if (!expectedAuthKey || authKey !== expectedAuthKey) {
            console.warn('Invalid revalidation attempt.');
            return NextResponse.json({ message: 'Invalid authentication key' }, { status: 401 });
        }

        const model = body?.model;

        if (!model) {
            console.warn('Missing model in revalidation request.');
            return NextResponse.json({ message: 'Missing model in request body' }, { status: 400 });
        }

        const tagMappings: { [key: string]: string[] } = {
            'block': ['blocks'],
            'content': ['content'],
            'footer': ['footer'],
            'header': ['header'],
            'hero': ['hero'],
            'service': ['services'],
        };

        const tagsToRevalidate = tagMappings[model] || [];

        if (tagsToRevalidate.length > 0) {
            tagsToRevalidate.forEach(tag => {
                revalidateTag(tag);
            });
            console.log(`Revalidated tags for model "${model}": ${tagsToRevalidate.join(', ')}`);
            return NextResponse.json({ revalidated: true, message: `Revalidated tags: ${tagsToRevalidate.join(', ')}` });
        } else {
            console.log(`No tags to revalidate for model "${model}".`);
            return NextResponse.json({ revalidated: false, message: `No tags to revalidate for model: ${model}` });
        }

    } catch (error) {
        console.error('Error revalidating:', error);
        return NextResponse.json(
            { message: error },
            { status: 500 }
        );
    }
}