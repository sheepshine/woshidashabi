export declare class AppService {
    private users;
    getAllUser(): Promise<{
        id: number;
        name: string;
    }[]>;
    getUser(id: number): Promise<{
        id: number;
        name: string;
    }>;
    addUser(user: any): Promise<void>;
}
