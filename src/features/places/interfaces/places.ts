export interface Place{
    id: string;
    name:string;
    description:string;
    latitude:string;
    longitude:string;
}

// export interface PlaceCreate extends Omit<Place, "id"> {}

export type PlaceCreate = Omit<Place, "id">;
export type PlaceUpdate = Partial<Place>;