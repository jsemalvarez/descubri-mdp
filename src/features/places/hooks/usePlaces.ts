import { useEffect, useState } from "react"
import { Place, PlaceCreate, placeService, PlaceUpdate } from "../"



export const usePlaces = () => {

    const [places, setPlaces] = useState<Place[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchPlaces()
    },[])

    const fetchPlaces = async () => {        
        try {
            setLoading(true)
            setError(null)
            const placesResponse:Place[] = await placeService.getAll();
            setPlaces(placesResponse)            
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setError(`Error getting places: ${errorMessage}`);
        }finally{
            setLoading(false)
        }
    }

    const addPlace = async (newPlace: PlaceCreate) => {
        try {
            setLoading(true)
            setError(null)
            const createdPlace = await placeService.create(newPlace);
            setPlaces([...places, createdPlace]);          
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setError(`Error adding places: ${errorMessage}`);
        }finally{
            setLoading(false)
        }
      };
    
      const editPlace = async (updatedPlace: PlaceUpdate) => {
        try {
            setLoading(true)
            setError(null)
            await placeService.update(updatedPlace);
            setPlaces(
                places.map((place) =>{
                    if(place.id === updatedPlace.id){
                        return {
                            ...place,
                            ...updatedPlace,
                            id: place.id
                        }
                    }
                    return place
                })
            );         
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setError(`Error getting place: ${errorMessage}`);
        }finally{
            setLoading(false)
        }
      };
    
      const removePlace = async (id: string) => {
        try {
            setLoading(true)
            setError(null)
            await placeService.remove(id);
            setPlaces(places.filter((place) => place.id !== id));        
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            setError(`Error removing place: ${errorMessage}`);
        }finally{
            setLoading(false)
        }
      };

    return {
        error,
        loading,
        places,
        fetchPlaces,
        addPlace,
        editPlace,
        removePlace,
    }
}