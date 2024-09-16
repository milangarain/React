import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import { getAllPlaces } from './Http.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getAvailablePlaces() {
      try {
        setIsFetching(true);
        setApiError(false);
        const places = await getAllPlaces();
        setAvailablePlaces(places);
      } catch (e) {
        setApiError(true);
      } finally {
        setIsFetching(false);
      }
    }
    getAvailablePlaces()
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      apiErrorText="An error occured while calling places API."
      isApiError={apiError}
      apiFetchingText="Please wait while we are retrieving all places."
      isFetching={isFetching}
    />

  );
}
