export interface Profile {
    titles: string[];
    profileImages: string;
    bannerImages: string;
    name: string;
    email: string;
    birthday: {
        seconds: number;
        nanoseconds: number;
    };
    phone: number;
    city: string;
    state: string;
    country: string;
    freelanceStatus: string;
    jobStatus: string;
    mainTitle: string;
    degree: string;
    aboutInformation: string;
    summary: string;
    quotes: string;
}

export interface Facts {
    noHappyClient: number;
    noProject: number;
    noSupport: number;
    noaward: number;
    qutes: string
}