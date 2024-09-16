import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { addUserSelectedPlaces, getUserSelectedPlaces} from './components/Http.jsx';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(()=> {
    console.log("useEffect in APP")
    async function retrieveUserPlaces() {
      setIsFetching(true);
      try {
        const userPlaces = await getUserSelectedPlaces();
        console.log(userPlaces);
        setUserPlaces(userPlaces);
      } catch (e) {
        console.log("user API failed");
        setError(true);
      } finally {
        setIsFetching(false);
      }
    }
    
    retrieveUserPlaces();
  }, [])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await addUserSelectedPlaces([selectedPlace, ...userPlaces]);
    } catch (e) {
      console.log("An error occured");
      setErrorUpdatingPlaces(true);
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    const newPlaces = userPlaces.filter((place) => place.id !== selectedPlace.current.id);
    setUserPlaces(newPlaces);

    addUserSelectedPlaces(newPlaces);
    setModalIsOpen(false);
  }, []);

  const handleErrorModalClose = () => {
    setErrorUpdatingPlaces(false);
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <Modal open={errorUpdatingPlaces} onClose={handleErrorModalClose}>
        <Error
          title="An Error Occurred!"
          message="Error While updaing User API"
          onConfirm={handleErrorModalClose}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="An error occurred!" message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fetching your places..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
