import { Place, PlaceCreate, PlaceUpdate } from "../";
import { PlacesServiceAdapter } from "./service.adapter";

const getAll = async(): Promise<Place[]> => {
    try {
        throw new Error('getAll place method is not implemented yet')
    } catch (error) {
        throw new Error('Error updating place')
    }
} 

const create = async(newPlace: PlaceCreate): Promise<Place> => {
    try {
        console.log(newPlace)
        throw new Error('create place method is not implemented yet')
    } catch (error) {
        throw new Error('Error creating place')
    }
} 

const update = async(place: PlaceUpdate): Promise<boolean> => {
    try {
        console.log(place)
        throw new Error('update place is not implemented yet')
    } catch (error) {
        throw new Error('Error updating place')
    }
} 

const remove = async(id: string): Promise<boolean> => {
    try {
        console.log(id)
        throw new Error('remove place is not implemented yet')
    } catch (error) {
        throw new Error('Error deleting place')
    }
} 

export const placeService:PlacesServiceAdapter= {
    getAll,
    create,
    update,
    remove
}
