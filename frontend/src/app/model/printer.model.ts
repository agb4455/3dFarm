export class Printer{
    name : String;
    ubication : String;
    uri : String;
    photo_Uri : String;

    constructor(name:String,ubication:String,uri:String,photo_Uri : String){
        this.name = name;
        this.ubication = ubication;
        this.uri = uri;
        this.photo_Uri = photo_Uri;
    }

    getName(): String {
        return this.name;
    }

    setName(name: String): void {
        this.name = name;
    }

    getUbication(): String {
        return this.ubication;
    }

    setUbication(ubication: String): void {
        this.ubication = ubication;
    }

    getUri(): String {
        return this.uri;
    }

    setUri(uri: String): void {
        this.uri = uri;
    }

    getPhoto_Uri(): String {
        return this.photo_Uri;
    }

    setPhoto_Uri(photo_Uri: String): void {
        this.photo_Uri = photo_Uri;
    }
}