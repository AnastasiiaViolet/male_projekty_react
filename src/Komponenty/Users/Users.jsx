import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

//isLoading to pozwala rendroać Skeleton(lodowanie - gdy dane ladują sie to my widzimy szare okienka ) "Skeleton" to te okienka
export const Users = ({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSetInvits,
}) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Znajdź użytkownika..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((object) => {
              const fullName = (
                object.first_name + object.last_name
              ).toLowerCase(); //robimy toLowerCase() bo bez tego mamy problem gdy szukamy z malych liter(nie maila)
              //sprawdza czy fulname zaiera searchvalue(chociażby jakoś wspólno litere)
              //naet jeśli będzie pusto to będzie true i wyświetla sie wszystko
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                object.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((object) => (
              <User
                onClickInvite={onClickInvite}
                isInvited={invites.includes(object.id)}
                key={object.id}
                {...object}
              /> //jeśli mamy te same nazwe w object jak i komponencie
            ))}
        </ul>
      )}
      {invites.length > 0 && (
        <button onClick={onClickSetInvits} className="send-invite-btn">
          Wysłać zaproszenie
        </button>
      )}
    </>
  );
  //  <User {...object} /> //jeśli mamy te same nazwe w object jak i komponencie
  // lub <User first_name={object.first_name} i tak dalej.../>
};
