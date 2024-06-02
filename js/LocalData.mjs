export class LocalData {
    constructor(filename){
        this. path = `../json/${filename}`
    }

    async getData() {
        const response = await fetch(this.path);
        if (response.ok){
            return await response.json()
        } else {
            throw new Error("Bad response from local data file")
        }
    }
}