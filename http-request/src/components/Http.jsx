export const addUserSelectedPlaces = async (selectedPlace) => {
    const apiResp = await fetch('http://localhost:8080/user-places', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ places: selectedPlace })
    });
    if (!apiResp.ok) {
        throw new Error("API failed");
    }
}

export const getAllPlaces = async () => {
    const placesApiResp = await fetch('http://localhost:8080/places');
    if (!placesApiResp.ok) {
        throw new Error("Api failed");
    }
    const availablePlaces = await placesApiResp.json();
    return availablePlaces.places;
}

export const getUserSelectedPlaces = async () => {
    const placesApiResp = await fetch('http://localhost:8080/user-places');
    if (!placesApiResp.ok) {
        throw new Error("Api failed");
    }
    const availablePlaces = await placesApiResp.json();
    return availablePlaces.places;
}