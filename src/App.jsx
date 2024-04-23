import React from "react";
import "./index.scss";
import { Success } from "./Komponenty/Success";
import { Users } from "./Komponenty/Users/Users";
import { useState } from "react";

// Oto lista użytkowników: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]); //wybrane użytkowniki
  //pierwszy render
  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json()) //jsli odpowiedz z api będzie sukcesem to res nas resultat przerobiamy na json
      .then((json) => {
        setUsers(json.data); //tutaj z naszej odpowiedzi przedajemy do setUsers tylko dat tego co otrzymalismy
      })
      .catch((err) => {
        //nasz blodn
        console.log(err);
        alert("Bląd przy otrzymaniu urzytkowników");
      })
      .finally(() => {
        setIsLoading(false);
      }); //final część zawsze nie ażne czy sukces czy error
  }, []);
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id)); //dostajemy tylko tych kogo nie wybrali
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onClickSetInvits = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSetInvits={onClickSetInvits}
        />
      )}
    </div>
  );
}

export default App;
