export interface Profile {
    titles: string[];
    email: string;
    phone: number;
    mainTitle: string;
    freelanceStatus: string;
    degree: string;
    name: string;
    birthday: {
        seconds: number;
        nanoseconds: number;
    };
    aboutText: string;
    city: string;
    ondes: string;
    aboutsummary: string;
    aboutImage: string;
}

export interface Facts {
    noHappyClient: number;
    noProject: number;
    noSupport: number;
    noaward: number;
    qutes: string
}