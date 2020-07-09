import { User } from "./user.dto";
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
    addUser(user: User): Promise<void>;
}
