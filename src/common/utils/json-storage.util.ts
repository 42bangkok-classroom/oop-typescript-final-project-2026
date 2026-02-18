import * as fs from 'fs/promises';
import * as path from 'path';

export class JsonStroage<T extends {id: String} >{
    private filePath: string;
    private data: T[] = [];

    constructor(fileName: string){
        this.filePath = path.join(process.cwd(), 'data', fileName);
        this.initialize();
    }

    private async initialize(): Promise<void>{
        try{
            const dir = path.dirname(this.filePath);
            await fs.mkdir(dir, {recursive: true});
        }
       

    }
}