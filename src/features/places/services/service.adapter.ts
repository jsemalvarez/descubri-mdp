import { Place, PlaceCreate, PlaceUpdate } from "../";

export interface PlacesServiceAdapter {
    getAll: ()=> Promise<Place[]>;
    create: (place: PlaceCreate) => Promise<Place>;
    update: (place: PlaceUpdate) => Promise<boolean>;
    remove: (id: string) => Promise<boolean>
}