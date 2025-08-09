export type GoogleBook = {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        subtitle?: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        industryIdentifiers?: {
            type: string;
            identifier: string;
        }[];
        readingModes?: {
            text: boolean;
            image: boolean;
        };
        pageCount?: number;
        printType?: string;
        categories?: string[];
        averageRating?: number;
        ratingsCount?: number;
        maturityRating?: string;
        allowAnonLogging?: boolean;
        contentVersion?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
        language?: string;
        previewLink?: string;
        infoLink?: string;
        canonicalVolumeLink?: string;
    };
};

export type GoogleBooksResponse = {
    kind: string;
    totalItems: number;
    items: GoogleBook[];
};

export type BookListData = {
    title: string;
    description?: string;
    books: GoogleBooksResponse;
};

export type User = {
    id: number;
    username: string;
    userLists: BookListData[];
};
