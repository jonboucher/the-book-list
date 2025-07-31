type BookInfo = {
    volumeInfo: {
        title: string;
        subtitle?: string;
        authors: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        pageCount?: string;
        categories?: string[];
        averageRating?: number;
        ratingsCount?: number;
        language?: string;
        maturityRating?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail: string;
        };
        infoLink?: string;
    };
};

export type BookSearchResults = BookInfo;
